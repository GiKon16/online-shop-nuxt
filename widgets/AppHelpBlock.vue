<script setup lang="ts">
import AppButton from '../shared/ui/AppButton.vue';
</script>

<template>
	<div class="flex flex-col gap-8 p-8 bg-dim rounded-2xl">
		<div class="flex flex-col gap-2.5">
			<h2 class="text-4xl font-semibold">Помощь</h2>
			<p class="text-gray-1 font-medium">
				Оставьте заявку и наш менеджер свяжется с вами в течение 5 минут, чтобы
				ответить на все вопросы
			</p>
		</div>
		<div class="flex gap-2.5">
			<div class="w-30 p-2.5 bg-glass rounded-full">
				<div class="w-full h-full bg-primary rounded-full"></div>
			</div>
			<input
				class="flex-1 p-6 bg-glass rounded-full outline-accent text-xl font-medium placeholder:text-red"
				type="text"
				placeholder="Номер телефона"
			/>
		</div>
		<div class="flex flex-col gap-4">
			<AppButton content="Свяжитесь со мной" />
			<p class="text-center text-gray-1 font-medium">
				Нажимая на кнопку, Вы соглашаетесь с условиями обработки персональных
				данных и нашей
				<span class="text-black font-semibold"
					>политикой конфиденциальности.</span
				>
			</p>
		</div>
	</div>
</template>
