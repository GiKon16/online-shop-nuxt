<script setup lang="ts">
import { ABOUT_PRODUCTS_FAQ } from '../features/faq/constants';
import FaqList from '../widgets/faq/FaqList.vue';
</script>

<template>
	<div class="flex">
		<FaqList
			heading="О продукции"
			:faqItems="ABOUT_PRODUCTS_FAQ"
			class="basis-1/2"
		/>
	</div>
</template>
