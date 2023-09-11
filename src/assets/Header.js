import React from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <div className='head'>
        <header className='header'>
        <h1>Gymnasium</h1>
        <nav>
            <ul className='list'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
        <div className='btn'>
            <NavLink to='/login'><button id='first'>Login</button></NavLink>
            <NavLink to='/signup'><button>Signup</button></NavLink>
        </div>
        
        </header>
    </div>
    
  )
}

export default Header;