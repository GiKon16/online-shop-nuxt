<script setup lang="ts">
import CartIconSVG from '@assets/icons/CartIconSVG.svg';
import { useCartStore } from '../features/cart/useCartStore';

const cartStore = useCartStore();
const route = useRoute();
</script>

<template>
	<header class="flex justify-between items-center">
		<NuxtLink to="/">
			<div class="py-4 px-9 bg-accent rounded-full text-primary">Логотип</div>
		</NuxtLink>
		<nav class="flex items-center gap-15 py-4 px-7 bg-glass rounded-full">
			<NuxtLink to="/delivery-payment" class="text-gray-2 font-medium"
				>Доставка и оплата</NuxtLink
			>
			<NuxtLink to="/about-products" class="text-gray-2 font-medium"
				>О продукции</NuxtLink
			>
			<NuxtLink to="/about-us" class="text-gray-2 font-medium">О нас</NuxtLink>
			<NuxtLink to="/contacts" class="text-gray-2 font-medium"
				>Контакты</NuxtLink
			>
		</nav>
		<div class="flex items-center gap-2.5">
			<button
				class="flex items-center gap-1.5 py-4 px-5 bg-glass rounded-full cursor-pointer text-black font-medium tranistion-all duration-300"
				:class="route.path === '/order' && '-translate-y-30'"
				@click="cartStore.openCart()"
			>
				<CartIconSVG />
				Корзина
			</button>
			<!-- <div
				class="w-13 h-13 flex items-center justify-center bg-accent rounded-full"
			>
				<UserIconSVG />
			</div> -->
		</div>
	</header>
</template>
