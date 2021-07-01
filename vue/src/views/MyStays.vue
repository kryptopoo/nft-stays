<template>
	<div class="container">
		<div class="sp-component">
			<div class="sp-component-title">
				<h3>Mint NFT Stay</h3>
				<span>|</span><span>Mint my NFT Stay</span>
			</div>
			<div class="sp-box sp-shadow sp-form-group">
				<form class="sp-voter__main__form">
					<div class="sp-box-header">MINT STAY</div>
					<div class="sp-form-group"><input class="sp-input" placeholder="Name" v-model="mintStay.name" /></div>

					<div class="sp-form-group"><input class="sp-input" placeholder="Address" v-model="mintStay.address" /></div>
					<div class="sp-form-group"><input class="sp-input" placeholder="Image" type="file" @change="onFileUpload" title="upload image" /></div>
					<div class="sp-form-group">
						<div class="row">
							<div class="column" style="padding-right: 10px">
								<input class="sp-input column" placeholder="Stay From" v-model="mintStay.stayFrom" type="date" />
							</div>
							<div class="column" style="padding-left: 10px">
								<input class="sp-input column" placeholder="Stay To" v-model="mintStay.stayTo" type="date" />
							</div>
						</div>
					</div>

					<sp-button @click="mint" :disabled="!currentAccount" :busy="processing.mint">Mint NFT Stay</sp-button>
				</form>
			</div>
		</div>

		<div class="sp-component">
			<div class="sp-component-title">
				<h3>My NFT Stays</h3>
				<span>|</span><span>List of my NFT Stays</span>
			</div>
			<div class="grid-container-4">
				<div v-for="item in myStays" v-bind:key="item.id" class="grid-item">
					<NftStayCard
						:sid="item.sID"
						:name="item.metadata.name"
						:address="item.metadata.address"
						:stayFrom="item.metadata.stayFrom"
						:stayTo="item.metadata.stayTo"
						:image="item.image"
						:owner="item.owner"
						:creator="item.creator"
					>
						<template v-slot:dropdown-menu>
							<div class="dropdown sp-icon sp-icon-More" v-on:click="showMenuCardId = item.sID">
								<div class="dropdown-content" v-if="showMenuCardId == item.sID && !isShowingModal()">
									<a @click="showBurnModal(item)" v-if="!item.marketId">Burn</a>
									<a @click="showSellModal(item)" v-if="!item.marketId">Sell</a>
									<a @click="unsell(item)" v-if="item.marketId">UnSell</a>
									<a @click="showTransferModal(item)" v-if="!item.marketId">Transfer</a>
								</div>
							</div>
						</template>
					</NftStayCard>
				</div>
			</div>
		</div>

		<Modal v-show="visible.burnModal" @close="closeModal">
			<template v-slot:header>Burn NFT Stay </template>
			<template v-slot:body>
				<p>
					Are you sure you want to burn the NFT Stay <strong>{{ selectedStay.sID }}</strong
					>?
				</p>
			</template>
			<template v-slot:footer>
				<div class="btn-cancel" @click="closeModal()">Cancel</div>
				<sp-button class="sp-button sp-button-danger" @click="burn()" :busy="processing.burn">Yes, Burn it!</sp-button>
			</template>
		</Modal>

		<Modal v-show="visible.sellModal" @close="closeModal">
			<template v-slot:header>Sell NFT Stay </template>
			<template v-slot:body>
				<div>
					You are selling the NFT Stay <strong>{{ selectedStay.sID }}</strong
					>:
				</div>
				<div class="mt-4">
					<div class="mt-4 mb-4">
						<div><input type="radio" name="selling-type" value="0" v-model="sellStay.onAuction" /> <label> Fixed-Price</label></div>
						<div><input type="number" class="sp-input" placeholder="Fixed price (TOKEN)" v-model="sellStay.price" style="width: 500px" /></div>
					</div>
					<div class="mt-4">
						<div>
							<input type="radio" name="selling-type" value="1" v-model="sellStay.onAuction" />
							<label> Auction</label>
						</div>

						<div><input type="number" class="sp-input mb-2" placeholder="Initial price (TOKEN)" v-model="sellStay.initialPrice" style="width: 500px" /></div>
						<div>
							<input class="sp-input mb-2" placeholder="Expiring date" v-model="sellStay.expiredDate" type="date" style="width: 350px" />
							<input class="sp-input mb-2" placeholder="Expiring time" v-model="sellStay.expiredTime" type="time" style="width: 150px" />
						</div>
					</div>
				</div>
			</template>
			<template v-slot:footer>
				<div class="btn-cancel" @click="closeModal()">Cancel</div>
				<sp-button class="sp-button sp-button-primary" @click="sell()" :busy="processing.sell">Sell</sp-button>
			</template>
		</Modal>

		<Modal v-show="visible.transferModal" @close="closeModal">
			<template v-slot:header>Transfer NFT Stay </template>
			<template v-slot:body>
				<div style="width: 500px">
					<div>
						You are transfering the NFT Stay <strong>{{ selectedStay.sID }}</strong> to:
					</div>

					<div class="mt-4">
						<div><input type="radio" name="transfer-type" value="0" v-model="transferStay.ibc" /> <label> On-chain</label></div>
						<div><input type="number" class="sp-input" placeholder="Recipient address" v-model="transferStay.recipient" /></div>
					</div>

					<div class="mt-4">
						<div><input type="radio" name="transfer-type" value="1" v-model="transferStay.ibc" /> <label> Cross-chain (IBC)</label></div>
						<div><input class="sp-input mb-2" placeholder="Port ID" v-model="transferStay.ibcPort" /></div>
						<div><input class="sp-input mb-2" placeholder="Channel ID" v-model="transferStay.ibcChannelID" /></div>
						<div><input class="sp-input mb-2" placeholder="NFT Stay SID" v-model="selectedStay.sID" /></div>
						<div><input class="sp-input mb-2" placeholder="Recipient" v-model="transferStay.ibcRecipient" /></div>
					</div>
				</div>
			</template>
			<template v-slot:footer>
				<div class="btn-cancel" @click="closeModal()">Cancel</div>
				<sp-button class="sp-button sp-button-primary" @click="transferStay.ibc == '1' ? ibcTransfer() : transfer()" :busy="processing.transfer"
					>Transfer</sp-button
				>
			</template>
		</Modal>
	</div>
</template>

<script>
import axios from 'axios'
import Modal from '../components/Modal.vue'
import NftStayCard from '../components/NftStayCard.vue'

export default {
	name: 'MyStays',
	components: {
		Modal,
		NftStayCard
	},
	data() {
		return {
			showMenuCardId: '',
			mintStay: {
				// name: 'My Nft Homestay',
				// description: 'The first NFT Homestay in the world',
				// address: '88 Bui Vien Street, Pham Ngu Lao Ward, District 1, Ho Chi Minh City',
				name: '',
				description: '',
				address: '',
				imageFile: null,
				stayFrom: this.getFutureDate(7),
				stayTo: this.getFutureDate(8)
			},
			myStays: [],
			sellStay: {
				onAuction: '0',
				price: null,
				initialPrice: null,
				expiredDate: this.getFutureDate(1),
				expiredTime: '23:59:59'
			},
			transferStay: {
				recipient: null,
				ibc: '0',
				ibcPort: 'nftstays',
				ibcChannelID: 'channel-0',
				ibcRecipient: null
			},

			processing: {
				mint: false,
				sell: false,
				burn: false,
				transfer: false,
				unsell: false,
				target: null
			},
			visible: {
				sellModal: false,
				transferModal: false,
				burnModal: false
			},

			selectedStay: {}
		}
	},
	mounted() {
		if (this._depsLoaded) {
			this.loadMyStays()
		}
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
			this.loadMyStays()
		}
	},
	methods: {
		getFutureDate: function (days) {
			let futureDate = new Date()
			futureDate.setDate(new Date().getDate() + days)
			return futureDate.toISOString().slice(0, 10)
		},
		onFileUpload(event) {
			this.mintStay.imageFile = event.target.files[0]
		},
		isShowingModal() {
			return this.visible.burnModal || this.visible.sellModal || this.visible.transferModal
		},
		showBurnModal(stay) {
			this.visible.burnModal = true
			this.selectedStay = stay
		},
		showSellModal(stay) {
			this.visible.sellModal = true
			this.selectedStay = stay
		},
		showTransferModal(stay) {
			this.visible.transferModal = true
			this.selectedStay = stay
		},
		closeModal() {
			this.visible.sellModal = false
			this.visible.transferModal = false
			this.visible.burnModal = false
			this.showMenuCardId = ''
		},
		completeProcess(result) {
			this.processing = {
				mint: false,
				sell: false,
				burn: false,
				transfer: false,
				unsell: false,
				target: null
			}
			this.closeModal()
			this.loadMyStays()

			console.log(JSON.stringify(result))
			if (result.code > 0) alert(result.rawLog)
		},
		uploadNftStorage(data, callback) {
			const token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3QUI4MzkxN2Q5QjIyNWZENzQ2ZDAyMjFCNTVlQTI1NkZDNEMyOUQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyNDc3NzQ0MjkzNywibmFtZSI6ImhhY2thdG9tIn0.6_hyHUzf-A7hD9gSaPaTOt2BAg-PD1IaIuefqMZSY88'

			let headers = {
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + token
			}

			console.log('data type', typeof data) // displays "string"
			if (typeof data == 'string') {
				headers = {
					Authorization: 'Bearer ' + token
				}
			}

			axios
				.post('https://api.nft.storage/upload', data, {
					headers: headers
				})
				.then((res) => {
					console.log(res)
					callback(res)
				})
		},
		async mint() {
			// validation
			if (!this.mintStay.name || !this.mintStay.imageFile || !this.mintStay.stayFrom || !this.mintStay.stayTo) {
				alert('please input required fields!')
				return
			}

			this.processing.mint = true

			const formData = new FormData()

			// ipfs image
			let imageFileName = 'image.' + this.mintStay.imageFile.name.split('.').pop()
			formData.append('file', this.mintStay.imageFile, imageFileName)

			// ipfs metadata
			let metadataFileName = 'metadata.json'
			const metadata = {
				name: this.mintStay.name,
				description: this.mintStay.description,
				address: this.mintStay.address,
				image: imageFileName,
				stayFrom: new Date(this.mintStay.stayFrom) / 1000,
				stayTo: new Date(this.mintStay.stayTo) / 1000
			}
			formData.append('file', new Blob([JSON.stringify(metadata)], { type: 'application/json' }), metadataFileName)

			const _this = this
			this.uploadNftStorage(formData, function (res) {
				if (res.data.ok) {
					let ipftImage = 'https://' + res.data.value.cid + '.ipfs.dweb.link/' + imageFileName
					let ipftMetadata = 'https://' + res.data.value.cid + '.ipfs.dweb.link/' + metadataFileName
					console.log('ipftImage', ipftImage)
					console.log('ipftMetadata', ipftMetadata)

					// send msg to mint nft stay
					_this.$store
						.dispatch('kryptopoo.marketplace.nftstays/sendMsgMintNftStay', {
							value: {
								sender: _this.currentAccount,
								recipient: _this.currentAccount,
								name: _this.mintStay.name,
								description: _this.mintStay.description,
								image: ipftImage,
								tokenUri: ipftMetadata
							},
							fee: []
						})
						.then((result) => {
							_this.completeProcess(result)
						})
				}
			})
		},
		async sell() {
			// validation
			if (this.sellStay.onAuction == '1' && (!this.sellStay.expiredDate || !this.sellStay.expiredTime || this.sellStay.initialPrice == null)) {
				alert('please input required fields!')
				return
			}
			if (this.sellStay.onAuction != '1' && this.sellStay.price == null) {
				alert('please input required fields!')
				return
			}

			let value = {
				seller: this.currentAccount,
				sID: this.selectedStay.sID,
				price: this.sellStay.onAuction == '1' ? parseInt(this.sellStay.initialPrice) : parseInt(this.sellStay.price),
				onAuction: this.sellStay.onAuction == '1',
				expired: this.sellStay.onAuction == '1' ? new Date(this.sellStay.expiredDate + ' ' + this.sellStay.expiredTime) / 1000 : 0
			}

			this.processing.sell = true
			this.$store
				.dispatch('kryptopoo.marketplace.nftstays/sendMsgSellNftStay', {
					value: value,
					fee: []
				})
				.then((result) => {
					this.completeProcess(result)
				})
		},
		async transfer() {
			this.processing.transfer = true
			this.$store
				.dispatch('kryptopoo.marketplace.nftstays/sendMsgTransferNftStay', {
					value: {
						sender: this.currentAccount,
						sID: this.selectedStay.sID,
						recipient: this.transferStay.recipient
					},
					fee: []
				})
				.then((result) => {
					this.completeProcess(result)
				})
		},
		async ibcTransfer() {
			this.processing.transfer = true

			// create ipft transfer transaction info
			const transferInfo = {
				sID: this.selectedStay.sID,
				recipient: this.transferStay.ibcRecipient,
				metadata: {
					name: this.selectedStay.metadata.name,
					description: this.selectedStay.metadata.description,
					address: this.selectedStay.metadata.address,
					image: this.selectedStay.image,
					stayFrom: this.selectedStay.metadata.stayFrom,
					stayTo: this.selectedStay.metadata.stayTo,
					tokenUri: this.selectedStay.tokenUri
				}
			}
			console.log('transferInfo', transferInfo)

			const _this = this
			this.uploadNftStorage(JSON.stringify(transferInfo), function (res) {
				if (res.data.ok) {
					console.log('res.data', res.data)
					console.log('ipft transfer info', 'https://' + res.data.value.cid + '.ipfs.dweb.link')

					let value = {
						sender: _this.currentAccount,
						port: _this.transferStay.ibcPort,
						channelID: _this.transferStay.ibcChannelID,
						timeoutTimestamp: ((new Date() * 1 + 10 * 60 * 1000) * 1000 * 1000).toString(), // in nanoseconds
						sID: _this.selectedStay.sID,
						nftStorageCID: res.data.value.cid
					}

					console.log('ibcTransfer value', value)

					_this.$store
						.dispatch('kryptopoo.marketplace.nftstays/sendMsgSendIbcTransferNftStay', {
							value: value,
							fee: []
						})
						.then((result) => {
							_this.completeProcess(result)
						})
				}
			})
		},
		async burn() {
			this.processing.burn = true
			this.$store
				.dispatch('kryptopoo.marketplace.nftstays/sendMsgBurnNftStay', {
					value: {
						sender: this.currentAccount,
						sID: this.selectedStay.sID
					},
					fee: []
				})
				.then((result) => {
					this.completeProcess(result)
				})
		},
		async unsell(item) {
			var confirmRs = confirm("You don't want to sell the NFT Stay " + item.sID + ' anymore, do you?')
			if (confirmRs) {
				this.selectedStay = item
				let value = {
					marketId: item.marketId,
					seller: this.currentAccount
				}
				console.log('unsell', value)
				this.processing.unsell = true
				this.processing.target = item.marketId
				this.$store
					.dispatch('kryptopoo.marketplace.nftstays/sendMsgUnsellNftStay', {
						value: value,
						fee: []
					})
					.then((result) => {
						this.completeProcess(result)
					})
			}
		},
		async loadMyStays() {
			this.myStays = []
			let result = await this.$store.dispatch('kryptopoo.marketplace.nftstays/QueryNftStayAll', {
				options: { subscribe: true },
				params: {}
			})
			let marketRs = await this.$store.dispatch('kryptopoo.marketplace.nftstays/QueryMarketAll', {
				options: { subscribe: true },
				params: {}
			})

			let nftStays = result.NftStay.filter((s) => s.owner == this.currentAccount)
			let sellingStays = marketRs.Market.filter((s) => s.seller == this.currentAccount && s.status == 'SELLING')
			for (let i = 0; i < nftStays.length; i++) {
				let nftStay = nftStays[i]

				// get metadata
				let res = await axios.get(nftStay.tokenUri)
				nftStay.metadata = res.data

				// get selling info
				let mySellingStays = sellingStays.filter((s) => s.sID == nftStay.sID)
				if (mySellingStays.length > 0) {
					nftStay.marketId = mySellingStays[0].id
				}

				this.myStays.push(nftStay)
			}

			console.log('myStays', this.myStays)
		}
	}
}
</script>
