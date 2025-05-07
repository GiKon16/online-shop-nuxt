<script setup lang="ts">
type AppQuantityControlProps = {
	quantity: number;
	addClick: () => void;
	subtrateClick: () => void;
};

defineProps<AppQuantityControlProps>();
</script>

<template>
	<div class="flex items-center justify-center gap-6 p-2 bg-glass rounded-full">
		<button
			class="w-13 h-13 flex items-center justify-center bg-gray-4 rounded-full cursor-pointer transition-all duration-300 hover:opacity-50"
			@click="subtrateClick"
		>
			<span class="w-5 h-0.5 bg-gray-2 rounded-full"></span>
		</button>
		<span class="text-xl text-gray-2">{{ quantity }}</span>
		<button
			class="w-13 h-13 flex items-center justify-center relative bg-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-70"
			@click="addClick"
		>
			<span class="w-5 h-0.5 bg-gray-2 rounded-full"></span>
			<span class="w-5 h-0.5 absolute bg-gray-2 rounded-full rotate-90"></span>
		</button>
	</div>
</template>
