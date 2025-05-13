<script setup lang="ts">
import { ABOUT_PRODUCTS_FAQ } from '../features/faq/constants';
import AppHelpBlock from '../widgets/AppHelpBlock.vue';
import FaqList from '../widgets/faq/FaqList.vue';
</script>

<template>
	<div class="flex gap-8">
		<FaqList
			heading="О продукции"
			:faqItems="ABOUT_PRODUCTS_FAQ"
			class="basis-1/2"
		/>
		<AppHelpBlock class="basis-1/2 self-start" />
	</div>
</template>
