import { useState } from "react";
import "./Templates.css";
import PlusIcon from "@rsuite/icons/Plus";
import MinusIcon from "@rsuite/icons/Minus";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
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

function Tree({ treeData }) {
	return (
		<ul>
			{treeData.map((node, index) => (
				<TreeNode node={node} key={index} />
			))}
		</ul>
	);
}

function TreeNode({ node }) {
	const { children, name } = node;
	const [showChildren, setShowChildren] = useState(false);
	const [display, setDisplay] = useState(false);

	const showIcons = (e) => {
		e.preventDefault();
		setDisplay(!display);
	};

	const hideIcons = (e) => {
		e.preventDefault();
		setDisplay(!display);
	};
	const handleClick = () => {
		if (!children) {
			return;
		}
		setShowChildren(!showChildren);
	};
	return (
		<>
			<div
				onClick={handleClick}
				onMouseEnter={(e) => {
					showIcons(e);
				}}
				onMouseLeave={(e) => {
					hideIcons(e);
				}}
				style={{ marginBottom: "10px" }}
			>
				<span>{name}</span>
				{display && <Footer />}
			</div>
			<div>
				<ul
					style={{
						paddingLeft: "10px",
						borderLeft: "1px solid black",
					}}
				>
					{showChildren && <Tree treeData={children} />}
				</ul>
			</div>
		</>
	);
}

function Footer() {
	return (
		<>
			<IconButton icon={<PlusIcon />} />
			<IconButton icon={<MinusIcon />} />
			<IconButton
				icon={<ArrowLeftLineIcon />}
				appearance="primary"
				size="lg"
			/>
			<IconButton icon={<ArrowRightLineIcon />} size="lg" />
		</>
	);
}
