<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppCart from './cart/AppCart.vue';
</script>

<template>
	<div>
		<AppHeader />
		<main class="pt-12.5">
			<AppCart />
			<slot />
		</main>
	</div>
</template>
