"use server";


// In these the directive is at top
export async function updateItem(formData: FormData) {
	console.log("updateItem...")
	console.log(formData)

	const rawFormData = {
		item: formData.get('item'),
		amount: formData.get('amount')
	}
	console.log(rawFormData)

	// Add validation and more
	// server-side logic here -- Do CRUD or more
}