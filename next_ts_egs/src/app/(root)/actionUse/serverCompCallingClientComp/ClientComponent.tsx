"use client";

interface ClientComponentProps {
	createItemAction: (formData: FormData) => void | Promise<void>;
}
export default function ClientComponent({ createItemAction }: ClientComponentProps) {
	console.log("Client component");
	
	return (
		<form action={createItemAction}>
			<input name="item" />
			<button type="submit">Create</button>
		</form>
	);
}