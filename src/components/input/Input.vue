<script setup lang="ts">
	const modelValue = defineModel<string>();
</script>

<template>
	<input v-model="modelValue" class="input" />
</template>

<style lang="scss" scoped>
	.input {
		background-color: var(--background);
		border: 1.5px solid rgba(233, 236, 239, 1);
		border-radius: 8px;
		overflow: hidden;
		padding: 14.5px 16px;
		font-size: 14px;
		line-height: 18px;

		&::placeholder {
			color: rgba(118, 120, 125, 1);
		}
	}
</style>
