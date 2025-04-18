import mongoose from "mongoose";
import { MONGODB_URI } from '@/utils/Constants';


// Use a typed global variable directly to persist connection status across hot reloads in development
const connection = global.mongooseConnection || (global.mongooseConnection = {});

if (!global.mongooseConnection)
	global.mongooseConnection = connection;

async function dbConnect() {
	if (!MONGODB_URI) {
		throw new Error("Please define the MONGODB_URI environment variable");
	}

	if (connection.isConnected) {
		console.log("Using existing database connection");
		return;
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState;

		if (connection.isConnected === 1) {
			console.log("Using existing mongoose connection");
			return;
		}

		// If not connected, close previous connections
		await mongoose.disconnect();
	}


	try {
		const db = await mongoose.connect(MONGODB_URI);
		connection.isConnected = db.connections[0].readyState;	// 1 means connected
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection failed:", error);
		throw error;
	}
}
export default dbConnect;