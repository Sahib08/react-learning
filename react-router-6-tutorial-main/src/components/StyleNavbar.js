import React from 'react'
import { NavLink } from 'react-router-dom';

const StyleNavbar = () => {
  return (
    <nav className='navbar'>
    {/* <NavLink to='/' style={(isActive) => {
        return {color: isActive ? 'red' : 'grey'}
    }}>Home</NavLink> */}

    <NavLink to='/' className={({isActive}) => {
        return isActive ? 'link active' : 'link'
    }}>Home</NavLink>

    <NavLink to='/about' className={({isActive}) => {
        return isActive ? 'link active' : 'link'
    }}>About</NavLink>

    <NavLink to='/products' className={({isActive}) => {
        return isActive ? 'link active' : 'link'
    }}>Products</NavLink>
    </nav>
  )
}

export default StyleNavbar
