import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ManageUser = () => {
  return (
    <>
      <Navbar/>
      <h1 className='text-6xl font-bold text-center mt-44'> Welcome To the User Management Route</h1>
      <h1 className='text-xl font-bold text-center mt-10'> This Route is Private. And can be used by only authorized Admin</h1>
    </>
  )
}

export default ManageUser
