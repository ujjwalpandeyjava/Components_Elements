import { useEffect } from 'react';

export default function useDocumentTitle(newTitle) {
	useEffect(() => {
		const oldTitle = document.title; // Store the old title
		document.title = "My Portfolio | " + newTitle; // Set the new title

		// Cleanup function to restore the old title
		return () => document.title = oldTitle;
	}, [newTitle])

	return (<></>)
}