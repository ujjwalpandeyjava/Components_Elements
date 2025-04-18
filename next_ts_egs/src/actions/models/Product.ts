"use server"

import mongoose, { Document, Schema } from "mongoose";
import dbConnect from '@/lib/dbConnect';

// Document/Table: Product
export interface ProductInter {
	name: string;
	price: number;
	description: string;
	category?: string;
	picture?: string;
};
export interface ProductInterDoc extends Document, ProductInter { }
const productSchema: Schema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: false },
	picture: { type: String, required: false }
});

// console.log("mongoose.models", mongoose.models);
// Cause OverwriteModelError, if the file is imported multiple times or hot-reloaded. 
// This is because Mongoose does not allow redefining a model with the same name once it has been compiled
const Product =
	(mongoose.models?.['product'] as mongoose.Model<ProductInter>) ||
	mongoose.model<ProductInter>('product', productSchema)
export default Product;



async function addProduct(name: string, price: number, description: string, category?: string, picture?: string): Promise<ProductInter> {
	// console.log("Reached the addProduct in actions/models/Product.ts");
	await dbConnect();
	const doc = await Product.create({ name, price, description, category, picture });
	console.log(Product.find().lean())
	// Return as plain object
	return {
		name: doc.get("name"),
		price: doc.price,
		description: doc.description,
		category: doc.category,
		picture: doc.picture
	} as ProductInter;
}
export { addProduct };