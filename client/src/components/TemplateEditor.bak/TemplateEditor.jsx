import React, { useState, useEffect } from "react";
import api from "../../api.js";
import TemplateSideBar from "./TemplateSideBar.jsx";

export default function Template({templateid}) {
	const [template, setTemplate] = useState(undefined);
    const [saved, isSaved] = useState(true);
	const _api = new api();

    let updateTemplate = (newTemplate) => {
        setTemplate(newTemplate);
    }

    let updateNode = (nodeID, newNode) => {
        let findNode = (template) => {
            for (const node in template) {
                if (node.nodeID === nodeID) {
                    return node;
                }
                else {
                    let result = findNode(nodeID, node);
                    if (result !== null) { return result; }
                }
            }
        }
        let node = findNode(nodeID, template);
        if (node === null) { return false; }
        else {
            // FIX: Reference semantics mean this won't work
            console.log(`${node} theoretically being set to ${newNode}.`);
            node = newNode;
        }
    }

	useEffect(() => {
		_api.getTemplate(templateid)
			.then((res) => {
				setTemplate(res);
			})
			.catch((rej) => {
				console.error("Help! Couldn't fetch template");
				console.error(rej);
			});
	}, [templateid]);

	return (
		<div>
			<h1>Templates</h1>
			<p>This page is incomplete.</p>
			<TemplateSideBar></TemplateSideBar>
		</div>
	);
}
