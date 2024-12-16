import React, { useState } from "react";
import SidebarTreeNodeLabel from "./SidebarTreeNodeLabel.jsx";

export default function SidebarTreeNode({ node, alertModified }) {
    let hasChildren = node["children"] !== undefined;

    let children = [];
    if (hasChildren) {
        for (const child of node["children"]) {
            children.push(
                <SidebarTreeNode node={child}
                    alertModified={alertModified} key={child.id} />
            );
        }
    }

    return <>
        <li 
            className="sidebar-tree-node" >
            <SidebarTreeNodeLabel node={node} alertModified={alertModified} key={node.id}/>
            {hasChildren ? 
                <ul
                >{children}</ul>
                : ""}
        </li>
    </>;
}

