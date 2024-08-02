import React, { useState, useEffect } from 'react';
import api from '../api.js';

export default function Templates() {
    const [templates, setTemplates] = useState(undefined);
    const [loadTemplates, setLoadTemplates] = useState(0);
    const _api = new api();
    useEffect(() => {
        _api.getTemplates().then((res) => {
            setTemplates(res);
        }).catch((rej) => {
            console.error("Help! Couldn't fetch templates");
            console.error(rej);
        });
    }, [loadTemplates])

    function createDummyTemplate() {
        _api.postTemplate('Dummy Template', 'A fake template for testing purposes', 
            {'type':'container', 'direction':'vertical','sizeRatio':1,'children':[]}
        )
        .then(() => {
            setTemplates(undefined);
            setLoadTemplates(loadTemplates+1);
        });
    }

	return (
		<div>
			<h1>Templates</h1>
            <p>
                This page is incomplete.
            </p>
            {templates !== undefined
            ? <ul>
                    {templates.map((temp) => 
                    <li><a href={`/templates/${temp.id}`}>{temp.name}</a></li>
                    )}
            </ul>
            :"Fetching templates" }
            <button onClick={createDummyTemplate}>Click here to create dummy template</button>
		</div>
	);
}
