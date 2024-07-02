<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<header class="header">
		<RouterLink :to="{ name: 'home' }" class="header__logo">Жилфонд</RouterLink>
		<span class="header__user">Пользователь</span>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		grid-column: span 2;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 56px;

		&__logo {
			font-weight: 700;
			font-size: 32px;
			line-height: 42px;
			color: var(--brand);

			&:hover {
				text-decoration: underline;
			}
		}

		&__user {
		}
	}
</style>
