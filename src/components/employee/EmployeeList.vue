<script setup lang="ts">
	import { computed } from 'vue';
	import EmployeeItem from './EmployeeItem.vue';
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { RouterLink } from 'vue-router';

	interface Props {
		employees: EmployeeInterface[];
		isSearching: boolean;
	}

	const props = defineProps<Props>();
	const isEmpty = computed(() => props.employees.length === 0);
</script>

<template>
	<h2 v-if="props.isSearching">Идёт загрузка</h2>
	<template v-else>
		<p v-if="isEmpty">ничего не найдено</p>
		<div v-else class="list">
			<RouterLink
				v-for="employee in props.employees"
				:key="employee.id"
				:to="{
					name: 'employee',
					params: {
						slug: employee.username,
					},
				}">
				<EmployeeItem v-bind="employee" />
			</RouterLink>
		</div>
	</template>
</template>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
</style>
