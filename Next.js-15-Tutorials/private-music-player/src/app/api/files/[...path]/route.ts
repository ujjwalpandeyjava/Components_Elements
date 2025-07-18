import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { stat, createReadStream } from "fs";
import { promisify } from "util";
import mime from "mime";

const statAsync = promisify(stat);

// /api/files/uploads/filename
export async function GET(
	req: NextRequest,
	{ params }: { params: { path: string[] } }
) {
	// Security: prevent directory traversal
	if (!params.path) return new NextResponse("Not found", { status: 404 });
	const safePath = params.path.filter((p) => !p.startsWith("..") && !p.includes("/"));
	const filePath = join(process.cwd(), "ourFiles", ...safePath);

	try {
		const fstat = await statAsync(filePath);
		if (!fstat.isFile()) throw new Error("Not file");

		const stream = createReadStream(filePath);
		const contentType = mime.getType(filePath) || "application/octet-stream";
		return new NextResponse(stream as any, {
			headers: { "Content-Type": contentType }
		});
	} catch {
		return new NextResponse("Not found", { status: 404 });
	}
}
