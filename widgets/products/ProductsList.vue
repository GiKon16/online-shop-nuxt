<script setup lang="ts">
import type { Product } from '@entities/product';
import ProductCard from './ProductCard.vue';

type ProductsListProps = {
	filteredProducts: Product[];
};

defineProps<ProductsListProps>();
</script>

<template>
	<TransitionGroup
		name="list"
		tag="ul"
		class="grid grid-cols-2 gap-8 relative transition-all"
	>
		<ProductCard
			v-for="{
				id,
				category,
				name,
				price,
				weight,
				description,
				isPopular,
				isUnique,
				imgSrc,
			} in filteredProducts"
			:key="id"
			:id="id"
			:category="category"
			:name="name"
			:price="price"
			:weight="weight"
			:description="description"
			:isPopular="isPopular"
			:isUnique="isUnique"
			:imgSrc="imgSrc"
		/>
	</TransitionGroup>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
}

.list-leave-active {
	display: none;
}
</style>
