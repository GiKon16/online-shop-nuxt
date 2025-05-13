<script setup lang="ts">
type AppInputProps = {
	type: string;
	placeholder: string;
	modelValue: string;
};

defineProps<AppInputProps>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const handleInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
	<input
		class="flex-1 p-6 bg-glass rounded-full outline-accent text-xl font-medium placeholder:text-red"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="handleInput"
	/>
</template>
