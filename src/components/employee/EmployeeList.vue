<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import EmployeeItem from './EmployeeItem.vue';
	import { ScrollObserver } from '@/components/utils';
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { RouterLink } from 'vue-router';

	const EMPLOYEES_PER_PAGE = 10;

	interface Props {
		employees: EmployeeInterface[];
		isSearching: boolean;
	}

	const props = defineProps<Props>();
	const isEmpty = computed(() => props.employees.length === 0);
	const displayedEmployees = computed(() => props.employees.slice(0, EMPLOYEES_PER_PAGE * page.value));

	const page = ref(1);
	const maxPage = computed(() => Math.ceil(props.employees.length / EMPLOYEES_PER_PAGE));
	function scrollTrigger() {
		page.value < maxPage.value && page.value++;
	}
	watch(
		() => props.isSearching,
		() => (page.value = 1)
	);
</script>

<template>
	<h2 v-if="props.isSearching">Идёт загрузка</h2>
	<template v-else>
		<p v-if="isEmpty">ничего не найдено</p>
		<template v-else>
			<div class="list">
				<RouterLink
					v-for="employee in displayedEmployees"
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
			<ScrollObserver @trigger="scrollTrigger" />
		</template>
	</template>
</template>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
</style>
