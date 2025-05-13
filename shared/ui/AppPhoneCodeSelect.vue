<script setup lang="ts">
import ArrowBottomLittleIconSVG from '../../assets/icons/ArrowBottomLittleIconSVG.svg';
</script>

<template>
	<div class="w-30 p-2.5 bg-glass rounded-full cursor-pointer">
		<div
			class="w-full h-full flex items-center justify-center gap-2.5 bg-primary rounded-full"
		>
			<img src="~/assets/images/rus-flag.png" alt="Флаг" />
			<span class="text-xl font-semibold">+7</span>
			<ArrowBottomLittleIconSVG class="relative top-0.5" />
		</div>
	</div>
</template>
