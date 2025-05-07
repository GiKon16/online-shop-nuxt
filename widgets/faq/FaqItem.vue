<script setup lang="ts">
import type { FaqItem } from '@entities/faqItem';
import ArrowBottomIconSVG from '../../assets/icons/ArrowBottomIconSVG.svg';

defineProps<FaqItem>();

const isOpen = ref(false);

const openCloseFaq = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<li
		class="grid grid-rows-[auto_0fr] p-2.5 pl-8 bg-glass rounded-4xl transition-all duration-300"
		:class="isOpen && 'grid-rows-[auto_1fr]'"
	>
		<div class="flex justify-between items-center">
			<span class="uppercase text-xl font-medium text-gray-1">{{ name }}</span>
			<button
				@click="openCloseFaq"
				class="w-13 h-13 flex items-center justify-center bg-primary rounded-full cursor-pointer transition-all duration-200 hover:opacity-70"
			>
				<ArrowBottomIconSVG
					class="transition-all duration-300"
					:class="isOpen && 'rotate-180'"
				/>
			</button>
		</div>
		<div class="overflow-hidden">
			<span class="pb-3 block">{{ description }}</span>
		</div>
	</li>
</template>
