import { Fragment } from "react";
import useFetch, { paraWithoutJSON, paraWithoutJSONs } from "./useFetch";

function CustomHookEx() {
	const { data: slideImages, isPending, isErrorState } = useFetch({ url: "https://picsum.photos/v2/list?page=1&limit=10" });
	const allReturn = paraWithoutJSON("The values");
	const allReturn2 = paraWithoutJSONs("The values 2");
	console.log("allReturn:", allReturn, allReturn2);
	return (
		<Fragment>
			<h1>CustomHookEx</h1>
			<hr />
			<div>
				Pending: {isPending && <span>Loading...</span>}
			</div>
			<div>
				Pending: {isPending ? <span>Loading...</span> : <span>Loaded</span>}
			</div>

			<hr />
			<div>
				Data:
				{slideImages?.map((item, index) => (
					<div key={index + 1}>{item.id}). url: <i>{item.url}</i></div>
				))}
			</div>
			<div>
				Data: {!slideImages ? <span>No data</span> :
					slideImages?.map((item, index) => (
						<div key={index + 1}>{item.id}). url: <i>{item.url}</i></div>
					))}
			</div>

			<hr />
			<div>
				Error: {isErrorState && <span>{isErrorState}</span>}
			</div>
			<div>
				Error: {isErrorState ? <span>{isErrorState}</span> : <span>No error</span>}
			</div>
			<hr />
		</Fragment>
	)
}

export { CustomHookEx };