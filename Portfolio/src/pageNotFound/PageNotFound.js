import useDocumentTitle from "../assets/useDocumentTitle"

function PageNotFound() {
	useDocumentTitle("Page Not Found")

	return (
		<div>
			PageNotFound <br />
			<a href="/">Get to home</a>
		</div>
	)
}

export default PageNotFound