// The server-action async function here or in another file/module.
// Form action with server side component

const Page = () => {
	console.log("Server component (page)");

	// Can be in a different file
	async function addItem(formData: FormData) {
		"use server";
		console.log("addItem");
		console.log(formData);
		// Add validation and more
		// server-side logic here -- Do CRUD or more
	}

	return (
		<>
			<h2>Server Component</h2>
			<form action={addItem}>
				<input name="item" placeholder="Item" />
				<button type="submit">Add</button>
			</form>
		</>
	);
}
export default Page