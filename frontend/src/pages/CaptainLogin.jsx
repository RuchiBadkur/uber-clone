import React, { useContext, useState } from 'react'
import uberDriverLogo from "../assets/uber-driver-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {captain, setCaptain} = useContext(CaptainDataContext)
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainlog = {
      email: email, 
      password
    }

    const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainlog)

    if(response.status === 200){
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate("/captain-home")
    }

    setEmail("")
    setPassword("")
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <Link to='/'>
          <img className='w-16 mb-10' src={uberDriverLogo} alt="uber-driver-logo" />
        </Link>
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required 
            className='bg-[#ededed] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com' 
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='bg-[#ededed] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password'
          />
          
          <button
          className='bg-[#000000] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
          <p className='text-center'>New here? <Link className='text-blue-600' to="/captain-signup">Create new account</Link>
          </p>
      </div>
      <div>
      <Link
          to="/login"
          className='flex items-center justify-center bg-[#bee1fa] text-[black] font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as user</Link>
      </div>
    </div>
  )
}

export default CaptainLogin