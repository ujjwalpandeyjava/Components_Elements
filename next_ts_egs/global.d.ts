// global.d.ts
declare global {
	// Add your custom property to the NodeJS.Global interface
	var mongooseConnection: { isConnected?: number };
}

export { };
