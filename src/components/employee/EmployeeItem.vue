<script setup lang="ts">
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { computed } from 'vue';

	type Props = EmployeeInterface;

	const props = defineProps<Props>();
	const firstName = computed(() => props.name.split(' ')[0]);
	const email = computed(() => props.email);
</script>

<template>
	<div class="employee-item">
		<div class="employee-item__thumbnail">
			<img src="/thumbnail-small.png" :alt="props.username" />
		</div>
		<div class="employee-item__body">
			<h2 class="employee-item__firstname">{{ firstName }}</h2>
			<p class="employee-item__email">{{ email }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.employee-item {
		height: 70px;
		display: grid;
		grid-template-columns: 70px 1fr;
		background-color: var(--background);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		overflow: hidden;

		&__thumbnail {
			position: relative;
			border-right: 1px solid rgba(224, 224, 224, 1);

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__body {
			padding: 15px 15px 18px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 6px;

			font-weight: 600;
			font-size: 14px;
			line-height: 18px;
		}

		&__firstname {
		}

		&__email {
			color: rgba(118, 120, 125, 1);
		}
	}
</style>
