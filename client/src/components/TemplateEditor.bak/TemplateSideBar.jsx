import React, { useState } from "react";
import "./TemplateEditor.css";
import EditIcon from "@rsuite/icons/Edit";
import PlusIcon from "@rsuite/icons/Plus";
import TrashIcon from '@rsuite/icons/Trash';
import { IconButton } from "rsuite";

export default function TemplateSideBar() {
	const treeData = [
		{
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
		},
	];

	return (
		<>
			<Tree treeData={treeData} />
		</>
	);
}

function Tree({ treeData, items }) {
	// console.log(treeData, 'treedata')
	// if leaf doesnt have children, return to avoid errors
	if (!treeData) {
		return;
	}

	return (
		<ul>
			{items}
			{treeData.map((node, index) => (
				<TreeNode node={node} key={index} treeData={treeData}/>
			))}
		</ul>
	);
}

function TreeNode({ treeData, node }) {
	const { children, name } = node;
	const [display, setDisplay] = useState(false);
	const [editing, setEditing] = useState(false);
	const [items, setItems] = useState([]);
	const [formData, setFormData] = useState(node.name);

	console.log(formData, 'formdata')

	const handleEdit = () => {
		setEditing(!editing);
	};

	const addItem = () => {
		const newItem = React.createElement("input");
		setItems((items) => [...items, newItem]);
	};

	const handleChange = (e) => {
		setFormData(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
        node.name = formData;
		setEditing(!editing);
	};
	
	return <>
			<div
				onMouseEnter={() => {
					setDisplay(true)
				}}
				onMouseLeave={() => {
					setDisplay(false)
				}}
				style={{ display: "flex", margin: "10px" }}
			>
				{editing ? (
					<form onSubmit={(e) => {handleSubmit(e)}}>
						<input type="text" onChange={handleChange}/>
					</form>
				) : (
					<span>{name}</span>
				)}
				{display && (
					<IconBar handleEdit={handleEdit} addItem={addItem} />
				)}
			</div>
			<div>
				<ul
					style={{
						paddingLeft: "10px",
						borderLeft: "1px solid black",
					}}
				>
					<Tree treeData={children} items={items} />
				</ul>
			</div>
		</>;
}

function IconBar({ handleEdit, addItem }) {
	return (
		<>
			<IconButton onClick={handleEdit} icon={<EditIcon />} />
			<IconButton onClick={addItem} icon={<PlusIcon />} />
			<IconButton icon={<TrashIcon />} />
		</>
	);
}
