import React, { useState } from 'react'
import uberDriverLogo from "../assets/uber-driver-logo.svg"
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      captainname: {
        firstname: firstname,
        lastname: lastname
      },
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
              <img className='w-16 mb-10' src={uberDriverLogo} alt="uber-logo" />
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
              >Sign up</button>
    
            </form>
              <p className='text-center'>Already have a account? <Link className='text-blue-600' to="/captain-login">Login here</Link>
              </p>
          </div>
          <div>
          <p className='text-xs text-[#514f4f] leading-tight'>Our guidelines were developed to help make every experience feel safe, respectful, and positive.
          Everyone who signs up for an Uber account across all of our apps is expected to follow the guidelines. </p>
          </div>
        </div>
  )
}

export default CaptainSignup