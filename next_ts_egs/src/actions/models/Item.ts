import mongoose, { Document, Schema } from "mongoose";


// Document/Table: Item
export interface ItemInter extends Document {
	name: string;
	quantity: number;
	description: string;
	category: string;
	picture: string;
}
const productSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	}
});
console.log(mongoose.models);


// Both do same work 2nd is more TS clear
// const Item = mongoose.models["item_next_js"] || mongoose.models.item_next_js || mongoose.model<ItemInter>('item_next_js', productSchema)
const Item =
	mongoose.models?.['item_next_js'] as mongoose.Model<ItemInter> ||
	mongoose.model<ItemInter>('item_next_js', productSchema);
export default Item;