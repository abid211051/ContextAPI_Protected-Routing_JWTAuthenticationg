import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Profile = () => {
  
  return (
    <>
      <Navbar/>
      <h1 className='text-6xl font-bold text-center mt-44'> Welcome To the Profile Route</h1>
      <h1 className='text-xl font-bold text-center mt-10'> This Route is Private. And can be used by only authorized user</h1>
    </>
  )
}

export default Profile
