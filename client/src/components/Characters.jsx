import React, { useState, useEffect } from 'react';
import api from '../api.js';
export default function Characters() {
    const [ chars, setChars ] = useState(undefined);
    const _api = new api();
    useEffect(() => {
        _api.getCharacters().then((res) => {
            console.log(res)
            setChars(res);
        }).catch((rej) => {
            console.error("Help! Failed to acquire chars");
            console.error(rej);
        });
        return () => {

        }
    }, []);
	return (
		<div>
			<h1>Characters</h1>
            <p>
                This page is incomplete.
            </p>
            {chars !== undefined
            ?   <ul>{chars.map(element => {
                    return <li><a href={`/characters/${element.id}`}>{element.name}</a> - {element.summary}</li>
                })}</ul>
            :   <>Fetching characters</>}
		</div>
	);
}
