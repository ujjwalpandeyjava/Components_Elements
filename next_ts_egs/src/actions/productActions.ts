// This all is client side
"use client"

import { ProductErrors, ProductCreate } from './actions_Interface';
import { addProduct } from "@/actions/models/Product"


export async function createProduct(prevState: ProductCreate, formData: FormData): Promise<ProductCreate> {
	console.log("Reached the createProduct in actions/productActions.ts");

	const title = formData.get("title") as string;
	const price = parseInt(formData.get("price") as string);
	const description = formData.get("description") as string;


	// Validation
	const errors: ProductErrors = {};
	if (!title)
		errors.title = "Title is required";
	if (!price)
		errors.price = "Price is required";
	if (!description)
		errors.description = "Description is required";
	if (Object.keys(errors).length > 0) {
		prevState.errors = errors
		prevState.success = false
		return prevState;
	}


	// Real action (why this as the db actions must be server side)
	prevState.data = await addProduct(title, price, description, "", "");
	prevState.success = true
	prevState.errors = {}
	return prevState;
}