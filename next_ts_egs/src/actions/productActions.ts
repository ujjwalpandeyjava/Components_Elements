import { ProductInter, addProduct } from '@/actions/models/Product';

export type ProductCreate = {
	data: ProductInter | null;
	errors: ProductErrors;
	success: boolean
}
export type ProductErrors = {
	title?: string;
	price?: string;
	description?: string;
}
export const defaultCreateFormState: ProductCreate = {
	data: null,
	errors: {},
	success: false
}
export async function createProduct(prevState: ProductCreate, formData: FormData): Promise<ProductCreate> {
	console.log("Reached the createProduct in actions/productActions.ts");

	const title = formData.get("title") as string;
	const price = parseInt(formData.get("price") as string);
	const description = formData.get("description") as string;


	// Validation
	const errors: ProductErrors = {};
	if (!title) {
		errors.title = "Title is required";
	}
	if (!price) {
		errors.price = "Price is required";
	}
	if (!description) {
		errors.description = "Description is required";
	}
	if (Object.keys(errors).length > 0) {
		prevState.errors = errors
		return prevState;
	}

	// Real action
	prevState.data = await addProduct(title, price, description, "", "");
	prevState.success = true
	// redirect("./home")
	return prevState;
}