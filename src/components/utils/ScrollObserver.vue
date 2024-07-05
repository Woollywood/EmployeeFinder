<script setup lang="ts">
	import { onMounted, ref } from 'vue';

	interface Emits {
		(e: 'trigger'): void;
	}

	const emits = defineEmits<Emits>();

	const trigger = ref<HTMLElement | null>(null);

	const options = {
		root: document.querySelector('#scrollArea'),
		rootMargin: '0px',
		threshold: 1.0,
	};

	onMounted(() => {
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				entry.isIntersecting && emits('trigger');
			});
		}, options);
		observer.observe(trigger.value!);
	});
</script>

<template>
	<div ref="trigger"></div>
</template>
