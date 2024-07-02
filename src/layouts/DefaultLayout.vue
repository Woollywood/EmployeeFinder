<script setup lang="ts">
	import Header from '@/widgets/Header.vue';
	import Sidebar from '@/widgets/Sidebar.vue';
</script>

<template>
	<div class="wrapper">
		<Header />
		<div class="content">
			<Sidebar />
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>
