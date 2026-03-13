import React, { useState } from "react";
import { PropertyGeneric } from './Property.jsx';

export default function PropertyEditor({ currentNode, updateNode }) {
    let component = null;
    if (currentNode.type == 'container') {
        component = Container;
    }
    return <div className="property-editor">
        
        {component({ currentNode: currentNode, updateNode: updateNode })}
    </div>;
}

function Container({ currentNode, updateNode }) {
    return <>
        <PropertyGeneric propName='type' node={currentNode} updateNode={updateNode} />
        <PropertyGeneric propName='name' node={currentNode} updateNode={updateNode} />
        <PropertyGeneric propName='id' node={currentNode} updateNode={updateNode} />
        <PropertyGeneric propName='direction' node={currentNode} updateNode={updateNode} />
        <PropertyGeneric propName='sizeRatio' node={currentNode} updateNode={updateNode} />
        <PropertyGeneric propName='allowFloat' node={currentNode} updateNode={updateNode} />
    </>;
}
