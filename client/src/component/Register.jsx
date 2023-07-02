import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Register = () => {
  const navigate = useNavigate();
  const handleformdata = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      name,
      email,
      password
    }
    fetch(`http://localhost:5000/api/register`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(user)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.success){
        navigate('/login');
      }
    })
    .catch((err)=>console.log(err))
    
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  }
  return (
    <>
      <Navbar/>
      <h1 className='text-6xl font-bold text-center mt-24'>
        Welcome To the Register Route
      </h1>
      <div className='flex justify-center items-center mt-12 max-w-[100vw]'>
        <form onSubmit={handleformdata} 
        className='flex flex-col justify-center items-center gap-6 w-full'>
          <input type="text"
            placeholder='Name'
            name='name'
            required 
            className='border-[1px] border-black w-2/5 p-2'/>
          <input type="email"
            placeholder='email'
            name='email'
            required
            className='border-[1px] border-black w-2/5 p-2'/>
          <input type="text"
            placeholder='Password'
            name='password'
            required
            className='border-[1px] border-black w-2/5 p-2'/>
          <button type='submit'
          className='border-[1px] border-black p-3'>
            Register
          </button>
        </form>
      </div>

    </>
  )
}


export default Register
