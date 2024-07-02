<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { EmployeeDetail } from '@/components/employee';

	const route = useRoute();
	const slug = computed(() => route.params.slug as string);
</script>

<template>
	<Suspense>
		<EmployeeDetail :slug="slug" />
		<template #fallback>
			<h2>Идёт загрузка...</h2>
		</template>
	</Suspense>
</template>
