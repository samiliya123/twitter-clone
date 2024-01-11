import React from 'react'
import './sidebarOption.css'

const SidebarOption = ({ active, Icon, text}) => {
  return (
     <div className={`sidebarOption ${active && "sidebarOption__active"}`}  >
      <Icon />
      <h2>{text}</h2>
     </div>
  )
}

export default SidebarOption