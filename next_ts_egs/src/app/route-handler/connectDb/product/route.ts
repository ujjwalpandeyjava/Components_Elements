import { NextResponse } from "next/server";
import dbConnect from '../../../../lib/dbConnect';
import Product from '../../../../models/Product';

export async function GET() {
	await dbConnect();
	try {
		const products = await Product.find({});
		return NextResponse.json(products);
	} catch (err: unknown) {
		console.error(err);
		return NextResponse.json({ error: "Error in finding product" });
	}
}

export async function POST(request: Request) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse JSON body
		const body = await request.json();

		// Validate required fields
		const { name, price, description, category, picture } = body;
		if (!name || !price || !description || !category || !picture) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Create a new product in the database
		const newProduct = await Product.create({
			name,
			price,
			description,
			category,
			picture,
		});

		return NextResponse.json(newProduct, { status: 201 });
	} catch (error) {
		console.error("Error creating product:", error);
		return NextResponse.json(
			{ error: "Failed to create product" },
			{ status: 500 }
		);
	}
}

