<script setup lang="ts">
type AppButtonProps = {
	content: string;
};
defineProps<AppButtonProps>();
</script>

<template>
	<button
		class="p-4 bg-accent rounded-full cursor-pointer text-primary transition duration-300 ease hover:opacity-80"
	>
		{{ content }}
	</button>
</template>
