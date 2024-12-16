import React, { useState } from "react";

import EditIcon from "@rsuite/icons/Edit";
import PlusIcon from "@rsuite/icons/Plus";
import TrashIcon from '@rsuite/icons/Trash';
import ConfirmIcon from '@rsuite/icons/Check';
import CancelIcon from '@rsuite/icons/Block';
import { IconButton } from "rsuite";

export default function SidebarTreeNodeLabel({ node, alertModified }) {
    const nodeName = node.name;

	const [displayIcons, setDisplayIcons] = useState(false);
	const [editing, setEditing] = useState(false);
	const [formData, setFormData] = useState(node.name);

    const updateName = () => {
        node.name = formData;
        setEditing(false);
        alertModified();
    };

    const resetName = () => {
        setEditing(false);
        setFormData(node.name);
    };

    const Icons = () => {
        if (displayIcons) {
            if (editing) {
                return <>
                    <IconButton onClick={updateName} icon={<ConfirmIcon />}/>
                    <IconButton onClick={resetName} icon={<CancelIcon />} />
                </>;
            }
            else {
                return <>
                    <IconButton onClick={ ()=>{setEditing(true)} } icon={<EditIcon />} />
                    <IconButton icon={<PlusIcon />} />
                    <IconButton icon={<TrashIcon />} />
                </>;
            }
        }
        else {
            return <></>;
        }
    };

    const NameDisplay = () => {
        return <span
            className="node-name"
            style={{ margin: "10px" }} >
            {nodeName}
        </span>;
    };


    return <div
        onMouseEnter={() => {
            setDisplayIcons(true)
        }}
        onMouseLeave={() => {
            setDisplayIcons(false)
        }}
        style={{ display: "flex", margin: "10px" }}
        key={node.id}>
        { editing
            ? <NameEdit node={node} updateName={updateName}
                formData={formData} setFormData={setFormData} />
            : <NameDisplay /> }
        <Icons />
    </div>;
}

// Must be declared *outside of* function soas to avoid rerendering
const NameEdit = ({ node, formData, setFormData, updateName }) => {
    const formUpdateName = (e) => {
        e.preventDefault();
        updateName();
    }
    return <form onSubmit={formUpdateName}>
        <input
            style={{ margin: "10px" }}
            value={formData}
            onChange={e => setFormData(e.target.value) }
            name={node.id}
            autoFocus
        />
        <input type="submit" style={{display:"none"}} />
    </form>;
}
