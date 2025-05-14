<script setup lang="ts">
import type { Order } from '../../entities/order';
import { useCartStore } from '../../features/cart/useCartStore';
import AppButton from '../../shared/ui/AppButton.vue';
import ProductInCartCard from './ProductInCartCard.vue';

type AppOrderCartProps = {
	onConfirm?: (order: Order) => void;
};

defineProps<AppOrderCartProps>();
const cartStore = useCartStore();
</script>

<template>
	<div class="flex flex-col gap-4 py-6 px-4 bg-dim rounded-3xl">
		<h2 class="text-2xl font-semibold">Ваша корзина</h2>
		<div class="flex flex-col gap-10 pb-8">
			<ProductInCartCard
				v-for="{
					id,
					name,
					price,
					weight,
					imgSrc,
					quantity,
				} in cartStore.productsInCart"
				:id="id"
				:name="name"
				:price="price"
				:weight="weight"
				:imgSrc="imgSrc"
				:quantity="quantity"
			/>
		</div>
		<div class="flex flex-col gap-5 mt-auto pt-8 border-t border-gray-4">
			<div class="flex items-center justify-between">
				<span class="text-2xl font-semibold">Общая цена</span>
				<span class="text-2xl font-semibold">₽{{ cartStore.totalPrice }}</span>
			</div>
			<AppButton content="Подтвердить заказ" @click="onConfirm" />
		</div>
	</div>
</template>
