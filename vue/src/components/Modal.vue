<script>
export default {
	name: 'Modal',
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>

<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
				<header class="modal-header" id="modalTitle">
					<slot name="header"></slot>
					<button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
				</header>

				<section class="modal-body" id="modalDescription">
					<slot name="body"></slot>
				</section>

				<footer class="modal-footer">
					<slot name="footer"> </slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<style>
.modal-backdrop {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background: #ffffff;
	box-shadow: 2px 2px 20px 1px;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
	min-width: 300px;
	min-height: 150px;
	font-size: 14px;
}

.modal-header,
.modal-footer {
	padding: 15px;
	display: flex;
}

.modal-header {
	position: relative;
	border-bottom: 1px solid #eeeeee;
	justify-content: space-between;

	opacity: 0.4;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 2.2rem;
}

.modal-footer {
	/* border-top: 1px solid #eeeeee;
    flex-direction: column; */
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.modal-body {
	position: relative;
	padding: 20px 15px;
}

.btn-cancel {
	opacity: 0.4;
	font-weight: 700;
	cursor: pointer;
}

.btn-close {
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	font-size: 20px;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.5s ease;
}
</style>
