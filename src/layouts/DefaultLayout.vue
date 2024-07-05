<script setup lang="ts">
	import Header from '@/widgets/Header.vue';
	import Sidebar from '@/widgets/Sidebar.vue';
	import Page from '@/widgets/Page.vue';
</script>

<template>
	<div class="wrapper container">
		<Header />
		<div class="content">
			<div class="content__inner">
				<Sidebar />
				<Page>
					<slot />
				</Page>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 100svh;
	}

	.content {
		height: 100%;
		padding-bottom: var(--content-padding-bottom);

		&__inner {
			display: grid;
			grid-template-columns: 292px 1fr;
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
			overflow: hidden;
			border-radius: 10px;
			height: 100%;
			max-height: calc(100svh - var(--header-height) - var(--content-padding-bottom));

			> * {
				&:not(:first-child) {
					border-left: 1px solid rgba(222, 222, 221, 1);
				}
			}
		}
	}
</style>
