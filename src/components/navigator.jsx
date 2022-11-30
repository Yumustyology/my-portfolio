import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/navigator.css";

function Navigator() {
  const [active,setActive] = useState("/")
  return (
    <div>
      <div className="app-name">Yusuf Mustahan</div>
        <div className='nav-link'>
            <NavLink to="/" className={({isActive})=> `${isActive && "active"}`} end><div>_home</div></NavLink>
            <NavLink to="/about" className={({isActive})=> `${isActive && "active"}`} end><div>_about</div></NavLink>
            <NavLink to="/experience" className={({isActive})=> `${isActive && "active"}`} end><div>_experience</div></NavLink>
            <NavLink to="/projects" className={({isActive})=> `${isActive && "active"}`} end><div>_project</div></NavLink>
            <NavLink to="/contact" className={({isActive})=> `${isActive && "active"}`} end><div>_contact me</div></NavLink>
        </div>
    </div>
  )
}

export default Navigator