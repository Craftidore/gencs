import React, { useState, useEffect } from "react";
import SidebarTree from './SidebarTree.jsx';

export default function Sidebar({ template, updateTemplate }) {
    return <SidebarTree template={template} updateTemplate={updateTemplate} />
}
