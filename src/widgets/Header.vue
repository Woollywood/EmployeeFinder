<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<header class="header">
		<div class="header__container">
			<div class="header__inner">
				<RouterLink :to="{ name: 'home' }" class="header__logo">Жилфонд</RouterLink>
				<span class="header__user">Пользователь</span>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		padding: 50px 0 26px;
		height: var(--header-height);

		&__container {
		}

		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 56px;
		}

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
