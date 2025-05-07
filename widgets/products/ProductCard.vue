<script setup lang="ts">
import ArrowTopRightIconSVG from '../../assets/icons/ArrowTopRightIconSVG.svg';
import type { Product } from '../../entities/product';
import { useCartStore } from '../../features/cart/store/useCartStore';
import FireIcon from './FireIcon.vue';
defineProps<Product>();

const cartStore = useCartStore();
</script>

<template>
	<li
		class="flex items-center justify-between gap-8 relative p-5 bg-dim rounded-3xl"
	>
		<div class="flex flex-col gap-4">
			<div class="flex gap-4">
				<div
					v-if="isPopular"
					class="flex items-center p-4 border-2 border-accent rounded-full gap-1 font-medium"
				>
					<FireIcon fill="#EF3E1C" />
					Популярное
				</div>
				<div
					v-if="isUnique"
					class="flex items-center p-4 border-2 border-secondary-accent rounded-full gap-1 font-medium"
				>
					<FireIcon fill="#741CEF" />
					Эксклюзив
				</div>
			</div>
			<span class="text-[1.75rem] font-medium"
				>{{ name }}
				<span class="text-base text-gray-3 font-medium"
					>{{ weight }}г</span
				></span
			>
			<p>{{ description }}</p>
			<span class="text-[1.75rem] font-medium">₽{{ price }}</span>
		</div>
		<div class="min-w-80 h-80 bg-accent rounded-3xl"></div>
		<button
			class="flex items-center gap-4 absolute bottom-10 right-10 px-3 py-2 pl-6 bg-glass rounded-full cursor-pointer text-primary group tranistion duration-300 ease hover:gap-6"
			@click="
				cartStore.addProductToCart({
					id,
					category,
					name,
					price,
					weight,
					description,
					isPopular,
					isUnique,
					imgSrc,
				})
			"
		>
			В корзину
			<div
				class="w-13 h-13 flex items-center justify-center bg-primary rounded-full"
			>
				<ArrowTopRightIconSVG
					class="tranistion duration-300 ease group-hover:-translate-y-1 group-hover:translate-x-1"
				/>
			</div>
		</button>
	</li>
</template>
