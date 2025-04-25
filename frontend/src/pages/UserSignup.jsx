import React, { useContext, useState } from 'react'
import uberLogo from "../assets/uber-logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from "../context/UserContext"

const UserSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email, 
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <Link to='/'>
          <img className='w-16 mb-10' src={uberLogo} alt="uber-logo" />
        </Link>
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-7'>
            <input 
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required 
              className='bg-[#ededed]  rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
              type="text" 
              placeholder='First name' 
            />
            <input 
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              required 
              className='w-1/2 bg-[#ededed]  rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text" 
              placeholder='Last name' 
            />
          </div>
          <h3 className='text-base font-medium mb-2'>What's your email?</h3>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required 
            className='bg-[#ededed] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="email" 
            placeholder='email@example.com' 
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='bg-[#ededed] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="password" 
            placeholder='password'
          />
          
          <button
          className='bg-[#000000] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Account</button>

        </form>
          <p className='text-center'>Already have a account? <Link className='text-blue-600' to="/login">Login here</Link>
          </p>
      </div>
      <div>
      <p className='text-xs text-[#514f4f] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup