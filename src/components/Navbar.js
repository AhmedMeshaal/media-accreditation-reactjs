import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/notFound'>Not Found</NavLink>
        </li>
    </ul>
)


export default Navbar;