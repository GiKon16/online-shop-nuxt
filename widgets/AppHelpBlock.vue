<script setup lang="ts">
import AppButton from '../shared/ui/AppButton.vue';
import AppInput from '../shared/ui/AppInput.vue';
import AppPhoneCodeSelect from '../shared/ui/AppPhoneCodeSelect.vue';

type AppHelpBlockProps = {
	withBg?: boolean;
};

defineProps<AppHelpBlockProps>();

const phone = ref('');

const sendPhone = () => {};
</script>

<template>
	<div class="flex flex-col gap-8 p-8 rounded-2xl" :class="withBg && 'bg-dim'">
		<div class="flex flex-col gap-2.5">
			<h2 class="text-4xl font-semibold">Помощь</h2>
			<p class="text-gray-1 font-medium">
				Оставьте заявку и наш менеджер свяжется с вами в течение 5 минут, чтобы
				ответить на все вопросы
			</p>
		</div>
		<div class="flex gap-2.5">
			<AppPhoneCodeSelect />
			<AppInput
				type="text"
				placeholder="Номер телефона"
				v-model="phone"
				size="big"
			/>
		</div>
		<div class="flex flex-col gap-4">
			<AppButton content="Свяжитесь со мной" @click="sendPhone" />
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
