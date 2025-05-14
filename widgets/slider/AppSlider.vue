<script setup lang="ts">
import ArrowRightIconSVG from '../../assets/icons/ArrowRightIconSVG.svg';
import { MAIN_PAGE_IMAGES } from '../../features/slider/constants';

const currentSlide = ref(0);

const nextSlide = () => {
	if (currentSlide.value < MAIN_PAGE_IMAGES.length - 1) {
		currentSlide.value++;
	}
};

const prevSlide = () => {
	if (currentSlide.value > 0) {
		currentSlide.value--;
	}
};
</script>

<template>
	<div class="relative overflow-hidden rounded-3xl">
		<div
			class="w-full h-150 flex transition-transform duration-500 ease-in-out"
			:style="{ transform: `translateX(-${currentSlide * 100}%)` }"
		>
			<div
				v-for="({ bg, src }, index) in MAIN_PAGE_IMAGES"
				:key="index"
				class="min-w-full h-full"
			>
				<img
					class="w-full h-full object-cover"
					:class="bg"
					:src="src"
					:alt="`Slide ${index + 1}`"
				/>
			</div>
		</div>
		<div
			class="flex items-center gap-15 absolute bottom-8 left-1/2 -translate-x-1/2 p-2.5 bg-glass rounded-full backdrop-blur-3xl"
		>
			<button
				class="w-13 h-13 flex items-center justify-center bg-primary rounded-full rotate-180 cursor-pointer group tranistion duration-300 ease disabled:opacity-50"
				:disabled="currentSlide === 0"
				@click="prevSlide"
			>
				<ArrowRightIconSVG
					:class="
						currentSlide !== 0 &&
						'tranistion duration-300 ease group-hover:translate-x-1'
					"
				/>
			</button>
			<span class="font-medium text-primary">Листайте влево и вправо</span>
			<button
				class="w-13 h-13 flex items-center justify-center bg-primary rounded-full cursor-pointer group tranistion duration-300 ease disabled:opacity-50"
				:disabled="currentSlide === MAIN_PAGE_IMAGES.length - 1"
				@click="nextSlide"
			>
				<ArrowRightIconSVG
					:class="
						currentSlide !== MAIN_PAGE_IMAGES.length - 1 &&
						'tranistion duration-300 ease group-hover:translate-x-1'
					"
				/>
			</button>
		</div>
	</div>
</template>
