<template>
	<div class="skeleton-container">
		<div class="skeleton-container__image skeleton"></div>
		<div class="skeleton-container__body">
			<div class="skeleton-container__title skeleton"></div>
			<div class="skeleton-container__description skeleton"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.skeleton {
		background-color: var(--skeleton-color);
		background: linear-gradient(
				100deg,
				rgba(255, 255, 255, 0) 40%,
				rgba(255, 255, 255, 0.5) 50%,
				rgba(255, 255, 255, 0) 60%
			)
			var(--skeleton-color);
		background-size: 200% 100%;
		background-position-x: 180%;
		animation: 1s loading ease-in-out infinite;
		border-radius: 12px;
		overflow: hidden;
	}

	@keyframes loading {
		to {
			background-position-x: -20%;
		}
	}

	.skeleton-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 62px;
		align-self: flex-start;
		width: 100%;

		&__image {
			padding-bottom: 68%;
		}

		&__body {
			> div {
				&:not(:last-child) {
					margin-bottom: 32px;
				}
			}
		}

		&__title {
			width: 60%;
			height: 32px;
		}

		&__description {
			width: 100%;
			height: 132px;
		}
	}
</style>
