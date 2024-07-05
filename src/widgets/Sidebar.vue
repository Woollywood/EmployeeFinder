<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { Input } from '@/components/input';
	import { Employees } from '@/api';
	import { EmployeeList } from '@/components/employee';
	import type { EmployeeInterface } from '@/interfaces/employee';
	import { useStore } from 'vuex';
	import { key } from '@/store/employee';
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();
	const store = useStore(key);

	const employees = computed<EmployeeInterface[]>(() => store.getters.employees);
	const isSearching = ref(false);
	const searchText = ref('');
	const slug = computed(() => route.params.slug);

	const checkSelectedEmployees = (employees: EmployeeInterface[]) => {
		return !!employees.find((employee) => employee.username === slug.value);
	};

	const searchSubmit = async () => {
		isSearching.value = true;

		const searchItems = searchText.value.split(',').map((item) => item.trim());

		const stringsWithId: string[] = [];
		const stringsWithName: string[] = [];
		searchItems.forEach((item) => {
			if (/^\d+$/.test(item)) {
				stringsWithId.push(item);
			} else {
				stringsWithName.push(item);
			}
		});

		let stringWithId = '';
		let stringWithName = '';
		stringsWithId.forEach((item) => (stringWithId += `id=${item}&`));
		stringsWithName.forEach((item) => (stringWithName += `name=${item}&`));

		let itemsWithId: EmployeeInterface[] | null = null;
		let itemsWithNames: EmployeeInterface[] | null = null;

		stringWithId.length &&
			({ data: itemsWithId } = await Employees.request().get<EmployeeInterface[]>(
				`${Employees.entity}?${stringWithId}`
			));

		stringWithName.length &&
			({ data: itemsWithNames } = await Employees.request().get<EmployeeInterface[]>(
				`${Employees.entity}?${stringWithName}`
			));

		const mergedArray = [...(itemsWithId ?? []), ...(itemsWithNames ?? [])];

		store.commit('setEmployees', mergedArray);

		isSearching.value = false;

		if (!checkSelectedEmployees(mergedArray)) {
			router.push({ name: 'home' });
		}
	};
</script>

<template>
	<aside class="sidebar">
		<form @submit.prevent="searchSubmit" class="sidebar__item">
			<h2 class="title title--top">Поиск сотрудников</h2>
			<Input type="text" placeholder="Введите Id или имя" v-model="searchText" />
		</form>
		<div class="sidebar__item">
			<h2 class="title">Результаты</h2>
			<EmployeeList :employees="employees" :is-searching="isSearching" />
		</div>
	</aside>
</template>

<style lang="scss" scoped>
	.sidebar {
		padding: 28px 24px;
		max-height: calc(100svh - var(--header-height));
		overflow-y: auto;

		&__item {
			&:not(:last-child) {
				margin-bottom: 24px;
			}
		}
	}

	.title {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		&:not(:last-child) {
			margin-bottom: 16px;
		}

		&--top {
			&:not(:last-child) {
				margin-bottom: 22px;
			}
		}
	}
</style>
