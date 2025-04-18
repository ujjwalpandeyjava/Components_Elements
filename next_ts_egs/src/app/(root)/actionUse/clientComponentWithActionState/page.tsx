"use client"

import { useActionState, useEffect, useRef } from 'react';
import { createProduct } from '@/actions/productActions';
import { ProductCreate, defaultCreateFormState } from '../../../../actions/actions_Interface';


const Page = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, action, pending] = useActionState<ProductCreate, FormData>(createProduct, defaultCreateFormState);

	console.log(state);
	function resetForm() {

		alert("Saved!!")
		formRef.current?.reset();
		state.data = null
		state.success = false
		state.errors = {}
	}
	useEffect(() => {
		if (pending === false && state.success === true)
			resetForm()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pending])


	return (
		<>
			<h2>Client Component With Action State</h2>
			<form ref={formRef} action={action}>
				<div>
					<input type="text" name="title" placeholder="Title" /><br />
					{state.errors?.title && <span>{state.errors.title}</span>}
				</div>
				<div>
					<input type="number" name="price" placeholder="Price" /><br />
					{state.errors?.price && <span>{state.errors.price}</span>}
				</div>
				<div>
					<textarea name="description" placeholder="Description" /><br />
					{state.errors?.description && <span>{state.errors.description}</span>}
				</div>
				{/* With useActionState we can directly use the pending in form, no need of extra component */}
				<button type="submit" disabled={pending}>{pending ? "Adding..." : "Add Product"}</button>
			</form>
		</>
	)
}
export default Page