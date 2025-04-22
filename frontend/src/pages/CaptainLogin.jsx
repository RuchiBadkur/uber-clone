import React, { useState } from 'react'
import uberDriverLogo from "../assets/uber-driver-logo.svg"
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email, 
      password: password,
    })
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