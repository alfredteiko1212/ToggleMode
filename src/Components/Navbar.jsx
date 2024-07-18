import React from 'react';
import logo from '../assets/reactjs-icon.png';

export default function Navbar(props) {
  console.log(props.darkmode)
  return (

    <nav className={props.toggleMode ? "for-darkMode nav_block" : "for-lightMode nav_block"}>
      <img src={logo} alt="logo" className='logo'/>
      <h3 className="logoName">{props.title}</h3>
      
      <div 
      onClick={()=> props.setToggleMode((ourDark)=> !ourDark)}
      className="toggleSwitch">
        <p>Dark</p>
        <div className="toggle-circle">
          <span className="toggle-icon"></span>
        </div>
        <p>Light</p>
      </div>
      <h4 className={ !props.toggleMode ? 'for-lightMode':'right_nav_descrip'}>
        ReactCourse-{" "}
        </h4>
      <h5 className={ !props.toggleMode ? 'for-lightMode':'right_nav_descrip_sub'}>
        Project 1
        </h5>
    </nav>
  )
}
