<script>
export default {
	name: 'NftStayCard',
	props: ['sid', 'name', 'address', 'image', 'stayFrom', 'stayTo', 'creator', 'owner', 'seller'],
	methods: {
		alertAddress(addr) {
			alert(addr)
		}
	}
}
</script>

<template>
	<div class="sp-box">
		<div class="flex-center">
			<div class="sid">
				{{ sid }}
			</div>

			<slot name="dropdown-menu"></slot>
		</div>
		<div v-if="name" class="name">
			{{ name }}
		</div>
		<div v-if="image"><img v-bind:src="image" width="265" height="200" /></div>
		<div class="address mb-2">{{ address }}</div>
		<div class="flex-center" v-if="stayFrom && stayTo"></div>
		<div class="flex-center mt-2">
			<div>
				<div v-if="stayFrom" class="mb-2">
					<span class="label-s">Stay from: </span>
					<span class="text-s">{{ timestampToDateString(stayFrom) }}</span>
				</div>
				<div v-if="creator">
					<span class="label-s">Creator: </span>
					<a class="text-s" @click="alertAddress(creator)">{{ shortingWalletAddress(creator) }}</a>
				</div>
			</div>

			<div>
				<div v-if="stayTo" class="mb-2">
					<span class="label-s">Stay to: </span>
					<span class="text-s">{{ timestampToDateString(stayTo) }}</span>
				</div>
				<div v-if="owner">
					<span class="label-s">Owner: </span>
					<a class="text-s" @click="alertAddress(owner)">{{ shortingWalletAddress(owner) }}</a>
				</div>
				<div v-if="seller">
					<span class="label-s">Seller: </span>
					<a class="text-s" @click="alertAddress(seller)">{{ shortingWalletAddress(seller) }}</a>
				</div>
			</div>
		</div>

		<div class="mt-3">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<style>
a:hover,
.dropdown:hover {
	cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
	position: relative;
	/* display: inline-block; */
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
	/* display: none; */
	position: absolute;
	background-color: white;
	min-width: 120px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.dropdown-content a {
	color: black;
	/* background-color: #f1f1f1; */
	padding: 10px 16px;
	text-decoration: none;
	display: block;
}

/* Links inside the dropdown */
.dropdown-content a:hover {
	background-color: #f1f1f1;
}

/* Change color of dropdown links on hover */
/* .dropdown-content a:hover {background-color: #ddd;} */

/* Show the dropdown menu on hover */
/* .dropdown:hover .dropdown-content {display: block;} */

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
</style>
