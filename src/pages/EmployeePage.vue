<script setup lang="ts">
	import { computed, watch, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { EmployeeDetail, EmployeeDetailSkeleton } from '@/components/employee';
	import { Employees } from '@/api';
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { useStore } from 'vuex';
	import { key } from '@/store/employee';

	const route = useRoute();
	const store = useStore(key);

	const isLoading = ref(false);
	const responseData = ref<EmployeeInterface[]>([]);
	const hasEmployee = computed(() => responseData.value.length > 0);
	const employee = computed(() => (hasEmployee.value ? responseData.value[0] : null));
	const employees = computed<EmployeeInterface[]>(() => store.getters.employees);
	const slug = computed(() => route.params.slug as string);
	const isUserFinded = computed(() => employees.value.find((empl) => empl.id === employee.value?.id));

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
	<EmployeeDetailSkeleton v-if="isLoading" />
	<template v-else>
		<h3 v-if="!isUserFinded" class="main-title">Employee not found</h3>
		<EmployeeDetail v-else v-bind="employee!" />
	</template>
</template>
