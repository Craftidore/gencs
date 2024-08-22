import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../api.js";

export default function Character() {
	const { charid } = useParams();
	const [char, setChar] = useState(undefined);
	const _api = new api();
	useEffect(() => {
		_api.getCharacter(charid)
			.then((res) => {
				setChar(res);
			})
			.catch((rej) => {
				console.error("Help! Failed to acquire character");
				console.error(rej);
			});
	}, [charid]);
	return (
		<div className="character">
			{char !== undefined ? (
				<>
					<h1>{char.name}</h1>
					<p>{char.summary}</p>
				</>
			) : (
				"Fetching character."
			)}
		</div>
	);
}
