<script setup lang="ts">
import { type ProductInCart } from '../../entities/product';
import { useCartStore } from '../../features/cart/store/useCartStore';
import AppQuantityControl from '../../shared/ui/AppQuantityControl.vue';

defineProps<ProductInCart>();
const cartStore = useCartStore();
</script>

<template>
	<div class="flex items-start gap-4">
		<div class="w-60 h-40 bg-accent rounded-xl"></div>
		<div class="h-full flex-1 grid grid-rows-3-auto gap-3">
			<div class="flex items-center justify-between">
				<span class="text-xl font-bold">{{ name }}</span>
				<span class="text-xl font-bold">₽{{ price }}</span>
			</div>
			<span>Вес: {{ weight }}г</span>
			<AppQuantityControl
				:quantity="quantity"
				:addClick="() => cartStore.updateProductQuantity(id, true)"
				:subtrateClick="() => cartStore.updateProductQuantity(id, false)"
				class="self-end justify-self-end"
			/>
		</div>
	</div>
</template>
