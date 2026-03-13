import React, { useState } from "react";
import { camelCaseToTitle } from '../../../common.js';
import { Attributes, Types, Directions } from '../../../jsonSpec.js';

export function PropertyGeneric({ propName, node, updateNode }) {
    const [prop, setProp] = useState(node[propName]);

    const propNameDisplay = camelCaseToTitle(propName);

    const formUpdateNode = (e) => {
        if (e !== undefined) e.preventDefault();
        node[propName] = prop;
        console.log(`node.${propName} being set to ${prop}`)
        updateNode();
    }

    return <div>
        <form onSubmit={formUpdateNode}>
            <label htmlFor={`${node.id}-${propName}`}>{`${propNameDisplay}:`}</label>
            <PropertyInput node={node} prop={prop} setProp={setProp} updateProp={setProp} formUpdateNode={formUpdateNode} propName={propName} />
            <input type="submit" style={{display:"none"}} />
        </form>
    </div>;
}

function PropertyInput({ node, prop, setProp, formUpdateNode, propName }) {
    const onChange = e => { setProp(e.target.value); };
    const onBlur = e => { formUpdateNode(e); };
    const name = `${node[Attributes.Id]}-${propName}`;
    let selectedIndex = -1;
    switch (propName) {
        case Attributes.Name:
        case Attributes.Id:
        case Attributes.DefaultValueText:
            return <input
                value={prop}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={name}
                type="text"
            />;
        case Attributes.Type:
            return <select
                value={prop}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={name}
            >
                { Object.keys(Types).map((k) => <option value={Types[k]} key={k}>{camelCaseToTitle(k)}</option>) }
            </select>;
        case Attributes.Direction:
            return <select
                value={prop}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={name}
            >
                { Directions.map((v) => <option value={v} key={v}>{camelCaseToTitle(v)}</option>) }
            </select>;
        case Attributes.SizeRatio:
            return <input
                value={prop}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={name}
                type="number"
                />
        case Attributes.AllowFloat:
            return <input
                checked={prop}
                onChange={e => setProp(e.target.checked) /* Need to grab checked, not value */}
                onBlur={onBlur}
                name={name}
                id={name}
                type="checkbox"
                />
        // case Attributes
    }

    return <span>Invalid</span>;
}
