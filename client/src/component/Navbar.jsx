import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const auth = localStorage.getItem('authToken');
    const roles = localStorage.getItem('roles');
    const login = localStorage.getItem('islogedin');
    const cleardata = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('islogedin');
        localStorage.removeItem('roles');
    }
    return (
        <>
            <nav className='flex gap-5 justify-center items-center font-medium'>
                <Link to={'/'}>Home</Link>
                <Link to={'/private/profile'}>Profile</Link>
                {login === 'yes' ? (<Link to={'/private/manageuser'}>ManageUser</Link>) : ('')}
                {login === 'yes' ? ('') : (<Link to={'/register'}>Register</Link>)}
                {login === 'yes' ? ('') : (<Link to={'/login'}>Login</Link>)}
                <Link to={'/'}>
                    <p onClick={cleardata}>Log Out</p>
                </Link>
            </nav>
        </>
    )
}

export default Navbar