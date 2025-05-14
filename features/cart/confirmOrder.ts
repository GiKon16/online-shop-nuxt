import type { Order } from '@entities/order';
import { useCartStore } from './useCartStore';

export const confirmOrder = (orderData: Order) => {
	const cartStore = useCartStore();
	const requiredFields: (keyof typeof orderData)[] = [
		'phone',
		'email',
		'city',
		'street',
	];
	const emptyFields = requiredFields.filter(field => !orderData[field].trim());

	if (emptyFields.length > 0) {
		alert('Заполните обязательные поля');
		return;
	} else {
		cartStore.clearCart();
		alert('Заказ успешно оформлен');
		navigateTo('/');
	}
};
