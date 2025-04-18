import { Document } from 'mongoose';


export interface ProductInter {
	name: string;
	price: number;
	description: string;
	category?: string;
	picture?: string;
};
export interface ProductInterDoc extends Document, ProductInter { }

// Create
export type ProductCreate = {	// RequestModal
	data: ProductInter | null;
	errors: ProductErrors;
	success: boolean
}
// Create
export type ProductErrors = {	// Validation
	title?: string;
	price?: string;
	description?: string;
}
export const defaultCreateFormState: ProductCreate = {	// Default
	data: null,
	errors: {},
	success: false
}
