import { NextResponse } from 'next/server';

// GEt request on /routeHandler
export async function GET() {
	return NextResponse.json({ message: 'Hello from Route Handler!' });
}
