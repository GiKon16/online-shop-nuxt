<script setup lang="ts">
import type { FaqItem as FaqItemType } from '@entities/faqItem';
import FaqItem from './FaqItem.vue';

type FaqListProps = {
	heading: string;
	faqItems: FaqItemType[];
};

defineProps<FaqListProps>();
</script>

<template>
	<div class="flex flex-col gap-12 p-8 bg-dim rounded-2xl">
		<h2 class="text-4xl font-semibold">{{ heading }}</h2>
		<ul class="grid auto-rows-auto gap-2.5">
			<FaqItem
				v-for="{ name, description } in faqItems"
				:name="name"
				:description="description"
			/>
		</ul>
	</div>
</template>
