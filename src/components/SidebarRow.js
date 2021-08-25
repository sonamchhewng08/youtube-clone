import React from 'react'
import '../css/sidebarRow.css'
const SidebarRow = ({selected,title,Icon}) => {
    return (
        <div className={`sidebarRow ${selected && 'active'}`}>
            <Icon className="sidebarRow_icon"/>
            <h3 className="sidebarRow_title">{title}</h3>
        </div>
    )
}

export default SidebarRow
