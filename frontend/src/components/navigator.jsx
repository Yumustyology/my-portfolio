import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/navigator.css";
import { Twirl as Hamburger } from 'hamburger-react'

function Navigator() {
  const [active,setActive] = useState("/")
  const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <div>
      <div className="app-name"><p className='text-3xl font-bold underline'>Yusuf Mustahan</p><p className="toggle-bar"><Hamburger onToggle={()=>setSidebarOpen(!sidebarOpen)} toggled={sidebarOpen}/></p></div>
        <div className='nav-link'>
          {/* <span> */}
            <NavLink to="/" className={({isActive})=> `${isActive && "active"}`} end><div>_home</div></NavLink>
            <NavLink to="/about" className={({isActive})=> `${isActive && "active"}`} end><div>_about</div></NavLink>
            <NavLink to="/experience" className={({isActive})=> `${isActive && "active"}`} end><div>_experience</div></NavLink>
            <NavLink to="/projects" className={({isActive})=> `${isActive && "active"}`} end><div>_project</div></NavLink>
            <NavLink to="/contact" className={({isActive})=> `${isActive && "active"}`} end><div>_contact me</div></NavLink>
            <NavLink to="/dashboard" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>dashb</div></NavLink>
            {/* </span> */}
        </div>
        <div className={`navigator-sidebar ${sidebarOpen ? 'open-sidebar' : 'closed-sidebar'}`}>
        <div className='link'>
          {/* <span> */}
            <NavLink to="/" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>_home</div></NavLink>
            <NavLink to="/about" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>_about</div></NavLink>
            <NavLink to="/experience" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>_experience</div></NavLink>
            <NavLink to="/projects" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>_project</div></NavLink>
            <vNavLink to="/contact" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>_contact me</div></vNavLink>
            <NavLink to="/dashboard" className={({isActive})=> `${isActive && "active"}`} end><div onClick={()=>setSidebarOpen(!sidebarOpen)}>dashb</div></NavLink>
            {/* </span> */}
        </div>
        </div>
    </div>
  )
}

export default Navigator