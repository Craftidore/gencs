import React, { useState } from "react";
import SidebarTree from "./SidebarTree.jsx";

export default function TemplateEditor({ templateid }) {
    const [treeData, updateTreeData] = useState(getDummyTreeData());

    return <>
        <SidebarTree template={treeData} updateTemplate={updateTreeData} />
        <div><strong>Name: {treeData.name}</strong></div>
    </>
}

function getDummyTreeData() {
	const treeData = {
        type: "container",
        name: "Template Name",
        id: 'a1',
        children: [
            {
                type: "container",
                name: "Name Container",
                id: 'b1',
                children: [
                    {
                        type: "label",
                        name: "Name Label",
                        id: 'c1',
                    },
                    {
                        type: "input",
                        name: "Name Input",
                        id: 'c2',
                    },
                ],
            },
            {
                type: "container",
                name: "Level Container",
                id: 'b2',
                children: [
                    {
                        type: "label",
                        name: "Level Label",
                        id: 'd1',
                    },
                    {
                        type: "input",
                        name: "Level Input",
                        id: 'd2',
                    },
                ],
            },
        ],
    };
    return treeData;
}

