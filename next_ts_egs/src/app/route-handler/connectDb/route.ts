// Just an example -- not working
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import mongoose from 'mongoose';

// // GET request on /route-handler/connectDb
// export async function GET() {
// 	return NextResponse.json({ message: 'is db connected: ' });
// }


export async function GET() {
	try {
		await dbConnect(); // Connect to the database
		const isConnected = mongoose.connection.readyState === 1; // Check connection status
		return NextResponse.json({ message: `Is DB connected: ${isConnected}` });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({ message: "Failed to connect to the database" }, { status: 500 });
	}
}