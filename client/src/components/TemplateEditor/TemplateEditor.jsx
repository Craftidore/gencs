import React, { useState } from "react";
import SidebarTree from "./SidebarTree.jsx";
import PropertyEditor from "./PropertyEditor/PropertyEditor.jsx";

export default function TemplateEditor({ templateid }) {
    const [treeData, updateTreeData] = useState(getDummyTreeData());
    const [currentNode, setCurrentNode] = useState(treeData);

    const updateNode = () => {
        updateTreeData({ ...treeData });
    }

    return <>
        <SidebarTree template={treeData} updateTemplate={updateTreeData} />
        <div><strong>Name: {treeData.name}</strong></div>
        <PropertyEditor currentNode={treeData} updateNode={updateNode} />
    </>
}

function getDummyTreeData() {
	const treeData = {
        type: "container",
        name: "Template Name",
        direction: 'vertical',
        sizeRatio: 1,
        allowFloat: false,
        id: 'a1',
        children: [
            {
                type: "container",
                name: "Name Container",
                direction: 'vertical',
                sizeRatio: '1',
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
                direction: 'vertical',
                sizeRatio: '1',
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

