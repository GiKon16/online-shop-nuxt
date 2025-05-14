<!-- <script setup lang="ts">
import AppTabs from '../shared/ui/AppTabs.vue';
const categories = ['Все', 'Зефир', 'Рахат-Лукум', 'Конфеты'];
const activeCategory = ref('Все');
</script>

<template>
	<AppTabs
		:tabs="categories"
		:activeTab="activeCategory"
		@update:activeTab="newTab => (activeCategory = newTab)"
	/>
	{{ activeCategory }}
</template> -->

<script setup lang="ts">
import { CATEGORIES } from '../features/categories/constants';
import { PRODUCTS } from '../features/products/constants';
import AppTabs from '../shared/ui/AppTabs.vue';
import ProductsList from '../widgets/products/ProductsList.vue';
import AppSlider from '../widgets/slider/AppSlider.vue';
const activeCategory = ref('Все');
const filteredProducts = computed(() => {
	if (activeCategory.value === 'Все') {
		return PRODUCTS;
	}
	return PRODUCTS.filter(product => product.category === activeCategory.value);
});
</script>

<template>
	<div class="flex flex-col gap-15">
		<AppSlider />
		<div class="flex flex-col gap-8">
			<AppTabs :tabs="CATEGORIES" v-model="activeCategory" />
			<ProductsList :filteredProducts="filteredProducts" />
		</div>
	</div>
</template>
