<script setup lang="ts">
	import DefaultLayout from './layouts/DefaultLayout.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<DefaultLayout>
		<RouterView :key="$route.path" />
	</DefaultLayout>
</template>
