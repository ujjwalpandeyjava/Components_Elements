"use server"

import mongoose, { Schema } from "mongoose";
import dbConnect from '@/lib/dbConnect';
import { ProductInter } from '../actions_Interface';

// Document/Table: Product
const productSchema: Schema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: false },
	picture: { type: String, required: false }
});

// Cause OverwriteModelError, if the file is imported multiple times or hot-reloaded. 
const Product =
	(mongoose.models?.['product'] as mongoose.Model<ProductInter>) ||
	mongoose.model<ProductInter>('product', productSchema)
export default Product;



// Create
async function addProduct(name: string, price: number, description: string, category?: string, picture?: string): Promise<ProductInter> {
	// console.log("Reached the addProduct in actions/models/Product.ts");
	await dbConnect();
	const doc = await Product.create({ name, price, description, category, picture });
	return {	// Plain object
		name: doc.get("name"),
		price: doc.price,
		description: doc.description,
		category: doc.category,
		picture: doc.picture
	} as ProductInter;
}
export { addProduct };