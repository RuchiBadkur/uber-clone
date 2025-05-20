import React, { useRef, useState } from 'react'
import uberMaps from '../assets/uber_maps.jpeg';
import uberLogo from "../assets/uber-logo.png"

import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from './FinishRide';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef()

    useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className="h-screen ">
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src={uberLogo} alt="uber user logo" />
        <Link to="/captain-home" className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-extrabold ri-logout-box-r-line'></i>
        </Link >
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src={uberMaps}
          alt="uber maps img"
        />
      </div>
      <div 
      className="h-1/5 py-4 flex relative justify-between items-center bg-yellow-400 "
      onClick={() => {setFinishRidePanel(true)}}
      >
      <h5
        className="absolute top-0 text-center text-black-500 font-extrabold text-lg bg-yellow-400  w-full m-auto"
        onClick={() => {
        }}
      >
        <i className="ri-arrow-up-wide-fill"></i>
      </h5>
        <h4 className='text-xl ml-5 font-semibold'>4 KM away</h4>
        <button
            className=" bg-green-600 text-white font-semibold p-4 rounded-lg mr-5"
        >
            Complete Ride 
          </button>
      </div>

      <div ref={finishRidePanelRef}  className="fixed z-10 bottom-0 w-full translate-y-full bg-white py-6 pt-12 ">
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>

    </div>
  )
}

export default CaptainRiding