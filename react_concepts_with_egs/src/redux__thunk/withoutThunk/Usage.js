import { useEffect } from "react";
import { RESOLVE_QUERY } from "./ProcessInComponent";
import { useDispatch } from "react-redux";

// Check project health_companion > file HealthCompanion.jsx

function Usage() {

	// dispatcher passed value is a callback function.
	const dispatcher = useDispatch();

	useEffect(() => {
		dispatcher(RESOLVE_QUERY("Who are are you?"));
	}, []);

	return (
		<div>Usage</div>
	)
}

export default Usage