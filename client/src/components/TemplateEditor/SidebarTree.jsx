import React, { useState } from "react";
import "./SidebarTree.css";
import SidebarTreeNode from "./SidebarTreeNode.jsx";

export default function SidebarTree({ template, updateTemplate }) {
    const alertModified = () => {
        updateTemplate({...template});
    };

    return <div className="sidebar-tree">
        <ul style={{ paddingLeft: "0px" }}>
            <SidebarTreeNode node={template} alertModified={alertModified} />
        </ul>
    </div>
}
