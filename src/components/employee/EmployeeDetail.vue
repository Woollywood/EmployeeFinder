<script setup lang="ts">
	import { Employees } from '@/api';
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { computed } from 'vue';

	interface Props {
		slug: string;
	}

	const props = defineProps<Props>();

	const { data } = await Employees.request().get<EmployeeInterface[]>(Employees.entity, {
		params: {
			username: props.slug,
		},
	});

	const employee = computed(() => data[0]);
</script>

<template>
	<div class="employee-detail">
		<div class="employee-detail__image">
			<img src="/thumbnail-big.png" :alt="employee.username" class="employee-detail__image" />
		</div>
		<div class="employee-detail__body">
			<h2 class="employee-detail__name">{{ employee.name }}</h2>
			<div class="employee-detail__subtitles">
				<p class="employee-detail__subtitle"><strong>email:</strong> {{ employee.email }}</p>
				<p class="employee-detail__subtitle"><strong>email:</strong> {{ employee.phone }}</p>
			</div>
			<div class="employee-detail__description">
				<h3 class="employee-detail__description-title">О себе:</h3>
				<p class="employee-detail__description-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.employee-detail {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 62px;
		align-items: flex-start;

		&__image {
			position: relative;
			padding-bottom: 68%;

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
		}

		&__name {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: rgba(0, 0, 0, 1);
			margin-bottom: 10px;
		}

		&__subtitles {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-bottom: 20px;
		}

		&__subtitle {
			font-weight: 400;
			font-size: 14px;
			line-height: 18px;
			color: rgba(118, 120, 125, 1);

			strong {
				font-weight: 600;
				font-size: 16px;
				line-height: 24px;
				color: var(--foreground);
			}
		}

		&__description {
		}

		&__description-title {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 26px;
		}

		&__description-text {
			font-weight: 400;
			font-size: 14px;
			line-height: 18px;
			color: rgba(118, 120, 125, 1);
		}
	}
</style>
