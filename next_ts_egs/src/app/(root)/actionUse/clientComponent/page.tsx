"use client"

// import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { updateItem } from '@/actions/itemActions';
import { SubmitButton } from './SubmitButton';

export default function ClientComponent() {
	console.log("Client component (Page)");
	const da = useFormStatus()
	// const uas = useActionState()
	// console.log(uas);


	console.log("pending", da);

	return (
		<>
			<h2>Client component</h2>
			{da.pending.toString()}
			<form action={updateItem}>
				<input name="item" />
				<SubmitButton />
				<br />
				{/* 'useFormStatus' will not work without another component the submission can */}
				{/* <button type="submit" disabled={da.pending}>{da.pending ? 'Submitting...' : 'Submit'}</button> */}
			</form>
		</>
	)
}

