<template>
	<div class="container">
		<div class="sp-component">
			<div class="sp-component-title">
				<h3>Market</h3>
				<span>|</span>
				<span>Buy, sell and explore NFT Stays</span>
				<span>|</span>
				<span>My balance: {{ balance }} TOKEN</span>
			</div>

			<div class="market grid-container-4">
				<div v-for="item in sellingStays" v-bind:key="item.id" class="grid-item" @click="selectMarket(item)">
					<NftStayCard
						:sid="item.sID"
						:name="item.metadata.name"
						:address="item.metadata.address"
						:stayFrom="item.metadata.stayFrom"
						:stayTo="item.metadata.stayTo"
						:image="item.metadata.image"
						:creator="item.creator"
						:seller="item.seller"
						v-if="item.metadata"
					>
						<template v-slot:footer>
							<div class="flex-center mt-3" v-if="!item.onAuction">
								<div class="price">
									<div class="label">Price</div>
									<div>{{ item.price }} TOKEN</div>
								</div>
								<sp-button @click="buy(item)" :disabled="!canBuy(item)" :busy="processing.buy && processing.target == item.id">Buy</sp-button>
							</div>
							<div class="flex-center mt-3" v-if="item.onAuction && getRemainingTime(item.expired) > 0">
								<div class="price">
									<div class="label">Current bid</div>
									<div>{{ item.price }} TOKEN</div>
								</div>
								<div class="expired">
									<div class="label">Expiring in</div>
									<div>
										<vue-countdown :time="getRemainingTime(item.expired)" v-slot="{ days, hours, minutes, seconds }">
											{{ days * 24 + hours }}h {{ String(minutes).padStart(2, '0') }}m {{ String(seconds).padStart(2, '0') }}s
										</vue-countdown>
									</div>
								</div>
							</div>
							<div class="flex-center mt-3" v-if="item.onAuction && getRemainingTime(item.expired) <= 0">
								<div class="price">
									<div class="label">Highest bid</div>
									<div>{{ item.price }} TOKEN</div>
								</div>
								<sp-button @click="claim(item)" :disabled="!canClaim(item)" :busy="processing.claim && processing.target == item.id">Claim</sp-button>
							</div>
						</template>
					</NftStayCard>
				</div>
			</div>
		</div>

		<Modal v-show="isAuctionModalVisible" @close="closeModal">
			<template v-slot:header>Auction </template>
			<template v-slot:body>
				<div class="sp-box" style="width: 550px" v-if="selectedMarket">
					<div>
						<div class="flex-center" style="align-items: normal">
							<div class="pr-2">
								<div class="mb-3"><span class="label-s mb-2">Name: </span>{{ selectedMarket.metadata.name }}</div>
								<!-- <div class="mb-2"><span class="label-s mb-1">Description: </span>{{ selectedMarket.metadata.description }}</div> -->
								<div class="mb-3"><span class="label-s mb-2">Address: </span>{{ selectedMarket.metadata.address }}</div>
								<div class="mb-4">
									<span class="label-s mb-2">Stay: </span>
									{{ timestampToDateString(selectedMarket.metadata.stayFrom) }} -
									{{ timestampToDateString(selectedMarket.metadata.stayTo) }}
								</div>
								<div class="flex-center">
									<div class="price">
										<div class="label">Current bid</div>
										<div>{{ selectedMarket.price }} TOKEN</div>
									</div>
									<div class="expired">
										<div class="label">Expiring in</div>
										<div>
											<vue-countdown :time="getRemainingTime(selectedMarket.expired)" v-slot="{ days, hours, minutes, seconds }">
												{{ days * 24 + hours }}h {{ String(minutes).padStart(2, '0') }}m {{ String(seconds).padStart(2, '0') }}s
											</vue-countdown>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div class="mb-2 sid">SID: {{ selectedMarket.sID }}</div>
								<img v-bind:src="selectedMarket.metadata.image" width="265" />
							</div>
						</div>
					</div>

					<div class="mt-3">
						<div class="mb-2 mt-3" style="font-weight: 600; font-size: 1.6rem"><span class="label">Offers:</span></div>
						<div class="sp-box-gray mb-2" v-for="offer in selectedMarket.arrOffers" :key="offer">
							<div class="flex-center">
								<div>
									<div class="label-s">Placed by</div>
									<div>{{ offer.offerer }}</div>
								</div>
								<div class="price">{{ offer.price }} TOKEN</div>
							</div>
						</div>
					</div>
					<div class="mt-4" v-if="canPlaceBid(selectedMarket)">
						<div class="mb-2">Placing a bid:</div>
						<input type="number" class="sp-input" placeholder="price (TOKEN)" v-model="bidPrice" />
					</div>
				</div>
			</template>
			<template v-slot:footer v-if="canPlaceBid(selectedMarket)">
				<div class="btn-cancel" @click="closeModal()">Cancel</div>
				<sp-button class="sp-button sp-button-primary" @click="placeBid()" :busy="processing.bid">Place a bid</sp-button>
			</template>
		</Modal>
	</div>
</template>

<script>
import axios from 'axios'
import Modal from '../components/Modal.vue'
import NftStayCard from '../components/NftStayCard.vue'

export default {
	name: 'Market',
	components: {
		Modal,
		NftStayCard
	},
	data() {
		return {
			isAuctionModalVisible: false,
			processing: {
				buy: false,
				bid: false,
				target: null
			},
			sellingStays: [],
			selectedMarket: null,
			balance: 0,
			bidPrice: null
		}
	},
	mounted() {
		this.loadAllMarkets()
		this.loadBalance()
	},
	computed: {
		currentAccount() {
			if (this._depsLoaded) {
				if (this.loggedIn) {
					return this.$store.getters['common/wallet/address']
				} else {
					return null
				}
			} else {
				return null
			}
		},
		loggedIn() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/loggedIn']
			} else {
				return false
			}
		}
	},
	watch: {
		currentAccount(newValue) {
			this.loadAllMarkets()
			this.loadBalance()
		}
	},
	methods: {
		selectMarket(item) {
			if (item.onAuction) {
				this.showAuctionModal(item)
			}
		},
		showAuctionModal(market) {
			this.isAuctionModalVisible = true
			this.selectedMarket = market
		},
		closeModal() {
			this.isAuctionModalVisible = false
			this.selectedMarket = null
		},
		canBuy(item) {
			return this.currentAccount != null && this.currentAccount != item.seller && item.status == 'SELLING'
		},
		async buy(item) {
			let confirmRs = confirm('Are you sure you want to buy the NFT Stay ' + item.sID + '?')
			if (confirmRs) {
				this.processing.buy = true
				this.processing.target = item.id
				this.$store
					.dispatch('kryptopoo.marketplace.nftstays/sendMsgBuyNftStay', {
						value: {
							marketId: item.id,
							buyer: this.currentAccount
						},
						fee: []
					})
					.then((result) => {
						this.processing.buy = false
						this.processing.target = null
						this.loadAllMarkets()
						this.loadBalance()
					})
			}
		},
		getRemainingTime(expired) {
			return (expired - Math.floor(Date.now() / 1000)) * 1000
		},
		async placeBid() {
			let value = {
				marketId: this.selectedMarket.id,
				buyer: this.currentAccount,
				price: parseInt(this.bidPrice)
			}
			console.log('bid', value)

			this.processing.bid = true
			this.$store
				.dispatch('kryptopoo.marketplace.nftstays/sendMsgBidNftStay', {
					value,
					fee: []
				})
				.then((result) => {
					this.processing.bid = false
					this.closeModal()
					this.loadAllMarkets()
					this.loadBalance()
				})
		},
		canPlaceBid(item) {
			if (!item) return false
			let isExpired = this.getRemainingTime(item.expired) < 0
			return item.onAuction && item.status == 'SELLING' && !isExpired && this.currentAccount != null && item.seller != this.currentAccount
		},
		canClaim(item) {
			if (!item.offers || item.status == 'SOLD') return false
			let isExpired = this.getRemainingTime(item.expired) < 0
			let highestOffer = item.arrOffers.sort((a, b) => (a.price < b.price ? -1 : 1))[0]
			return isExpired && highestOffer.offerer == this.currentAccount
		},
		async claim(item) {
			let confirmRs = confirm('You are winner in the NFT Stay ' + item.sID + ' auction. Do you claim it?')
			if (confirmRs) {
				this.processing.claim = true
				this.processing.target = item.id
				this.$store
					.dispatch('kryptopoo.marketplace.nftstays/sendMsgClaimNftStay', {
						value: {
							marketId: item.id,
							buyer: this.currentAccount
						},
						fee: []
					})
					.then((result) => {
						this.processing.claim = false
						this.processing.target = null
						this.loadAllMarkets()
						this.loadBalance()
					})
			}
		},
		async loadAllMarkets() {
			this.sellingStays = []
			let result = await this.$store.dispatch('kryptopoo.marketplace.nftstays/QueryMarketAll', {
				options: { subscribe: true },
				params: {}
			})
			this.sellingStays = result.Market

			for (let i = 0; i < this.sellingStays.length; i++) {
				// check auction price
				if (this.sellingStays[i].onAuction && this.sellingStays[i].offers) {
					this.sellingStays[i].arrOffers = []

					let offers = this.sellingStays[i].offers.split(';').filter(function (e) {
						return e === 0 || e
					})
					offers.forEach((offer) => {
						let offerer = offer.split('@')[0]
						let price = parseInt(offer.split('@')[1])
						this.sellingStays[i].arrOffers.push({ offerer: offerer, price: price })
						if (price > this.sellingStays[i].price) {
							this.sellingStays[i].price = price
						}
					})
				}
				// get stay metadata
				let stayId = this.sellingStays[i].sID.replace('SN', '')
				let stayInfoRs = await this.$store.dispatch('kryptopoo.marketplace.nftstays/QueryNftStay', {
					options: { subscribe: true },
					params: { id: stayId }
				})
				if (stayInfoRs.NftStay) {
					const res = await axios.get(stayInfoRs.NftStay.tokenUri)
					this.sellingStays[i].metadata = res.data
					this.sellingStays[i].metadata.image = stayInfoRs.NftStay.image
				}
			}

			this.sellingStays = this.sellingStays.sort((a, b) => (a.onAuction * 1 < b.onAuction * 1 ? 1 : -1))
			console.log('this.sellingStays', this.sellingStays)
		},
		async loadBalance() {
			this.balance = 0
			if (this.currentAccount) {
				let rs = await this.$store.dispatch('cosmos.bank.v1beta1/QueryBalance', {
					params: { address: this.currentAccount, denom: 'token' }
				})
				this.balance = rs.balance.amount
			}
		}
	}
}
</script>
