<script setup lang="ts">
import { TransitionPresets, useTransition } from '@vueuse/core';
import { useCartStore } from '../../features/cart/store/useCartStore';
import AppButton from '../../shared/ui/AppButton.vue';
import ProductInCartCard from './ProductInCartCard.vue';
const cartStore = useCartStore();

const totalPriceRef = toRef(() => cartStore.totalPrice);
const displayedPrice = useTransition(totalPriceRef, {
	duration: 500,
	transition: TransitionPresets.easeOutCubic,
});
</script>

<template>
	<Transition
		enter-active-class="transition duration-300 ease-out"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition duration-200 ease-in"
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div
			v-if="cartStore.isCartOpen"
			class="fixed inset-0 z-9998 bg-dark-glass backdrop-blur-xs"
		></div>
	</Transition>
	<Transition
		enter-active-class="transition duration-300 ease-out"
		enter-from-class="translate-x-full"
		enter-to-class="translate-x-0"
		leave-active-class="transition duration-200 ease-in"
		leave-from-class="translate-x-0"
		leave-to-class="translate-x-full"
	>
		<div
			v-if="cartStore.isCartOpen"
			class="w-1/2 max-w-3xl h-screen flex flex-col gap-13 fixed top-0 right-0 z-9999 overflow-y-auto p-13 bg-primary"
		>
			<div class="flex items-center justify-between">
				<h2 class="text-4xl font-semibold">Ваша корзина</h2>
				<button
					class="w-13 h-13 relative bg-gray-4 rounded-full cursor-pointer transition duration-300 ease hover:opacity-80"
					@click="cartStore.closeCart()"
				>
					<span
						class="w-5 h-[1.5px] absolute top-1/2 left-1/2 -translate-1/2 -rotate-45 bg-black rounded-full"
					></span>
					<span
						class="w-5 h-[1.5px] absolute top-1/2 left-1/2 -translate-1/2 rotate-45 bg-black rounded-full"
					></span>
				</button>
			</div>
			<div v-if="totalPriceRef === 0" class="max-w-100 text-xl">
				Ваша корзина пуста, чтобы оформить заказ - добавьте чего-нибудь
				вкусненького в корзину =)
			</div>
			<div v-if="totalPriceRef !== 0" class="flex-1 flex flex-col gap-8">
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
			<div
				v-if="totalPriceRef !== 0"
				class="flex flex-col gap-10 mt-auto pt-8 border-t border-gray-4"
			>
				<div class="flex items-center justify-between">
					<span class="text-4xl font-semibold">Общая цена</span>
					<span class="text-4xl font-semibold"
						>₽{{ Math.round(displayedPrice) }}</span
					>
				</div>
				<AppButton content="Оформить заказ" />
			</div>
		</div>
	</Transition>
</template>
