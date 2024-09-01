import React, { useState } from "react";
import "./Templates.css";
import EditIcon from "@rsuite/icons/Edit";
import PlusIcon from "@rsuite/icons/Plus";
import TrashIcon from '@rsuite/icons/Trash';
import { IconButton } from "rsuite";

export default function TemplateSideBar() {
	const treeData = [
		{
			type: "container",
			name: "Template Name",
			children: [
				{
					type: "container",
					name: "Name Container",
					children: [
						{
							type: "label",
							name: "Name Label",
						},
						{
							type: "input",
							name: "Name Input",
						},
					],
				},
				{
					type: "container",
					name: "Level Container",
					children: [
						{
							type: "label",
							name: "Level Label",
						},
						{
							type: "input",
							name: "Level Input",
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
	//if leaf doesnt have children, return to avoid errors
	if (!treeData) {
		return;
	}

	return (
		<ul>
			{items}
			{treeData.map((node, index) => (
				<TreeNode node={node} key={index} />
			))}
		</ul>
	);
}

function TreeNode({ node }) {
	const { children, name } = node;
	const [display, setDisplay] = useState(false);
	const [editing, setEditing] = useState(false);
	const [items, setItems] = useState([]);

	const handleEdit = () => {
		setEditing(!editing);
	};

	const addItem = () => {
		const newItem = React.createElement("input");
		setItems((items) => [...items, newItem]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEditing(!editing);
        console.log(editing, 'editing should change')
	};

	const showIcons = (e) => {
		e.preventDefault();
		setDisplay(!display);
	};

	const hideIcons = (e) => {
		e.preventDefault();
		setDisplay(!display);
	};
	return (
		<>
			<div
				onMouseEnter={(e) => {
					showIcons(e);
				}}
				onMouseLeave={(e) => {
					hideIcons(e);
				}}
				style={{ display: "flex", margin: "10px" }}
			>
				{editing ? (
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="test"/>
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
		</>
	);
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
