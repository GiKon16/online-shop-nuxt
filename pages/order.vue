<script setup lang="ts">
import { confirmOrder } from '../features/cart/confirmOrder';
import { useCartStore } from '../features/cart/useCartStore';
import AppInput from '../shared/ui/AppInput.vue';
import AppTabs from '../shared/ui/AppTabs.vue';
import AppOrderCart from '../widgets/cart-order/AppOrderCart.vue';
const userData = ['Физическое лицо', 'Юридическое лицо'];
const orderVariant = ['Доставка', 'Пункт выдачи '];
const activeUserData = ref('Физическое лицо');
const activeOrderVariant = ref('Доставка');
const cartStore = useCartStore();

const orderData = reactive({
	phone: '',
	email: '',
	city: '',
	street: '',
	comment: '',
});
</script>

<template>
	<div v-if="cartStore.productsInCart.length" class="flex gap-8">
		<div class="basis-1/2 flex flex-col gap-8">
			<div class="flex flex-col gap-4 py-8 px-4 bg-glass rounded-3xl">
				<h2 class="text-2xl font-semibold">Данные покупателя</h2>
				<AppTabs :tabs="userData" v-model="activeUserData" />
				<div class="flex gap-2.5">
					<AppInput
						type="text"
						placeholder="Телефон*"
						v-model="orderData.phone"
					/>
					<AppInput
						type="text"
						placeholder="Email (необязательно)"
						v-model="orderData.email"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-4 py-8 px-4 bg-glass rounded-3xl">
				<h2 class="text-2xl font-semibold">Способ получения</h2>
				<AppTabs :tabs="orderVariant" v-model="activeOrderVariant" />
				<div class="flex flex-wrap gap-2.5">
					<AppInput type="text" placeholder="Город*" v-model="orderData.city" />
					<AppInput
						type="text"
						placeholder="Улица, дом*"
						v-model="orderData.street"
					/>
					<AppInput
						type="text"
						placeholder="Комментарий (необязательно)"
						v-model="orderData.comment"
						class="basis-full"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-4 py-8 px-4 bg-glass rounded-3xl">
				<h2 class="text-2xl font-semibold">Способ оплаты</h2>
				<div
					class="w-60 h-30 flex items-center justify-center bg-primary border border-accent rounded-4xl"
				>
					<img src="/images/sbp.png" alt="СБП" />
				</div>
			</div>
		</div>
		<AppOrderCart
			class="basis-1/2 self-start"
			:onConfirm="() => confirmOrder(orderData)"
		/>
	</div>
	<div
		v-if="!cartStore.productsInCart.length"
		class="flex flex-col gap-4 py-8 px-4 bg-glass rounded-3xl"
	>
		<h2 class="text-2xl font-semibold">
			Вы еще не добавили продуктов в корзину для оформления заказа :)
		</h2>
	</div>
</template>
