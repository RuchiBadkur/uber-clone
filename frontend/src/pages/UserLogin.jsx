import React, { useState } from 'react'
import uberLogo from "../assets/uber-logo.png"
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
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
          <img className='w-16 mb-10' src={uberLogo} alt="uber-logo" />
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
          <p className='text-center'>New here? <Link className='text-blue-600' to="/signup">Create new account</Link>
          </p>
      </div>
      <div>
      <Link
          to="/captain-login"
          className='flex items-center justify-center bg-[#bee1fa] text-[black] font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as capatain</Link>
      </div>
    </div>
  )
}

export default UserLogin