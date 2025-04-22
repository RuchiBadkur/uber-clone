import React from 'react'
import uberlogo from "../assets/uber-logo.png"
import uberOnboarding from "../assets/uber-onboarding-light.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div 
        style={{backgroundImage: `url(${uberOnboarding})`}}
        className=" h-screen flex justify-between flex-col w-full bg-[#8c9fa8] pt-8 bg-cover bg-center">
            <img className='w-16 ml-8' src={uberlogo} alt="uberlogo" />
            <div className='bg-white py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link 
                to="/login"
                className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 pb-7'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home