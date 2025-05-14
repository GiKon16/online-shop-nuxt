<script setup lang="ts">
import { DELIVERY_PAYMENT_FAQ } from '../features/faq/constants';
import AppHelpBlock from '../widgets/AppHelpBlock.vue';
import FaqList from '../widgets/faq/FaqList.vue';
</script>

<template>
	<div class="flex gap-8">
		<FaqList
			heading="Доставка и оплата"
			:faqItems="DELIVERY_PAYMENT_FAQ"
			class="basis-1/2"
		/>
		<AppHelpBlock class="basis-1/2 self-start" withBg />
	</div>
</template>
