import React, { useContext, useState } from 'react'
import uberDriverLogo from "../assets/uber-driver-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [vehicleColor, setVehicleColor] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")
  const [vehicleType, setVehicleType] = useState("")

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email, 
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate("/captain-home")
    }

    setEmail("")
    setPassword("")
    setFirstname("")
    setLastname("")
    setVehicleColor("")
    setVehiclePlate("")
    setVehicleCapacity("")
    setVehicleType("")

  }


  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
          <div>

            <Link to='/'>
              <img className='w-16 mb-10' src={uberDriverLogo} alt="uber-logo" />
            </Link>
            <form onSubmit={(e)=>{submitHandler(e)}}>
              <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
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
              <h3 className='text-base font-medium mb-2'>What's our Captain's email?</h3>
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
              

              <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
              <div className='flex gap-4 mb-7'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="text"
                  placeholder='Vehicle Color'
                  value={vehicleColor}
                  onChange={(e) => {
                    setVehicleColor(e.target.value)
                  }}
                />
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="text"
                  placeholder='Vehicle Plate'
                  value={vehiclePlate}
                  onChange={(e) => {
                    setVehiclePlate(e.target.value)
                  }}
                />
              </div>
              <div className='flex gap-4 mb-7'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="number"
                  placeholder='Vehicle Capacity'
                  value={vehicleCapacity}
                  onChange={(e) => {
                    setVehicleCapacity(e.target.value)
                  }}
                />
                <select
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value)
                  }}
                >
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                </select>
              </div>


              <button
              className='bg-[#000000] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
              >Create Captain Account</button>
    
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