import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../api.js";

export default function Template() {
	const [template, setTemplate] = useState(undefined);
	const { templateid } = useParams();
	const _api = new api();
	useEffect(() => {
		_api.getTemplate(templateid)
			.then((res) => {
				console.log("acquired template");
				console.log(res);
				setTemplate(res);
			})
			.catch((rej) => {
				console.error(rej);
			});
		return () => {};
	}, [templateid]);

	return (
		<div className="template">
			{template !== undefined ? (
				<>
					<h1>{template.name}</h1>
					<p>{template.summary}</p>
				</>
			) : (
				"Fetching Template"
			)}
		</div>
	);
}
