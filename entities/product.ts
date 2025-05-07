export type Product = {
	id: number;
	category?: string;
	name: string;
	price: number;
	weight?: number;
	description?: string;
	isPopular?: boolean;
	isUnique?: boolean;
	imgSrc?: string;
};

export type ProductInCart = Product & {
	quantity: number;
};
