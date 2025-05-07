import type { Product, ProductInCart } from '@entities/product';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', () => {
	const isCartOpen = ref<boolean>(false);
	const productsInCart = useLocalStorage<ProductInCart[]>('cart', []);

	const openCart = () => {
		isCartOpen.value = true;
	};

	const closeCart = () => {
		isCartOpen.value = false;
	};

	const addProductToCart = (newProduct: Product) => {
		const existingProductIndex = productsInCart.value.findIndex(
			product => product.id === newProduct.id
		);
		if (existingProductIndex !== -1) {
			if (!productsInCart.value[existingProductIndex].quantity) {
				productsInCart.value[existingProductIndex].quantity = 1;
			}
			productsInCart.value[existingProductIndex].quantity! += 1;
		} else {
			productsInCart.value.push({
				...newProduct,
				quantity: 1,
			});
		}
	};

	const updateProductQuantity = (productId: number, isAdditional: boolean) => {
		const productIndex = productsInCart.value.findIndex(
			product => product.id === productId
		);
		if (productIndex === -1) return;
		const product = productsInCart.value[productIndex];
		let newQuantity: number;
		if (isAdditional) {
			newQuantity = product.quantity + 1;
		} else {
			newQuantity = product.quantity - 1;
		}
		if (newQuantity < 1) {
			productsInCart.value.splice(productIndex, 1);
		} else {
			product.quantity = newQuantity;
		}
	};

	const totalPrice = computed(() => {
		return productsInCart.value.reduce((total, product) => {
			return total + product.price * (product.quantity || 1);
		}, 0);
	});

	return {
		isCartOpen,
		productsInCart,
		openCart,
		closeCart,
		addProductToCart,
		updateProductQuantity,
		totalPrice,
	};
});
