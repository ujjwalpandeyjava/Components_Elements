import mongoose from "mongoose";

const connection: { isConnected?: number } = {}

async function dbConnect() {
	if (connection.isConnected) {
		console.log("Using existing database connection");
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI!);
		connection.isConnected = db.connections[0].readyState; // 1 means connected
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection failed:", error);
		// throw new Error("Failed to connect to the database");
	}
}
export default dbConnect;