<script setup lang="ts">
	import { computed, watch, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { EmployeeDetail } from '@/components/employee';
	import { Employees } from '@/api';
	import type { EmployeeInterface } from '@/interfaces/employee';

	const route = useRoute();
	const slug = computed(() => route.params.slug as string);

	const isLoading = ref(false);
	const responseData = ref<EmployeeInterface[]>([]);
	const hasEmployee = computed(() => responseData.value.length > 0);
	const employee = computed(() => (hasEmployee.value ? responseData.value[0] : null));

	watch(
		slug,
		async () => {
			await getEmployee();
		},
		{
			immediate: true,
		}
	);

	async function getEmployee() {
		isLoading.value = true;
		const { data } = await Employees.request().get<EmployeeInterface[]>(Employees.entity, {
			params: {
				username: slug.value,
			},
		});
		responseData.value = data;
		isLoading.value = false;
	}
</script>

<template>
	<h2 v-if="isLoading">Loading...</h2>
	<EmployeeDetail v-else v-bind="employee" />
</template>
