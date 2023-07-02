import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {UserContext, UserDispatchContext} from './ContextProvider'

const Home = () => {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  console.log(userDetails.username);
  return (
    <>
      <Navbar />
      <h1 className='text-6xl font-bold text-center mt-44'> Welcome To the Home Route</h1>
      <h1 className='text-xl font-bold text-center mt-10'> This Route is Public. And can be used by any end user</h1>
    </>
  );
}

export default Home;
