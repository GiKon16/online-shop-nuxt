<script setup lang="ts">
type AppInputProps = {
	type: string;
	placeholder: string;
	modelValue: string;
	size?: 'big' | 'default';
};

withDefaults(defineProps<AppInputProps>(), {
	size: 'default',
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const handleInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
	<input
		class="flex-1 bg-glass rounded-full outline-accent font-medium"
		:class="size === 'big' ? 'p-6 text-xl' : 'p-4 text-base'"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="handleInput"
	/>
</template>
