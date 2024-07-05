<template>
	<main class="page">
		<slot />
	</main>
</template>

<style lang="scss" scoped>
	.page {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px 22px;
	}
</style>
