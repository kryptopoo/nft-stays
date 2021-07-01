<template>
	<div>
		<div class="container">
			<SpWelcome />
			<SpTokenSend :address="address" />
			<SpTransferList :address="address" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {}
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		}
	},
	methods: {}
}
</script>
