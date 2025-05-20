
// email: badruchi@gmail.com
// pass:  @6!hmgu56 
// ₹

import React, { useRef, useState } from 'react'
import uberMaps from '../assets/uber_maps.jpeg';
import uberLogo from "../assets/uber-logo.png"

import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  const confirmRidePopUpPanelRef = useRef(null)
  const ridePopUpPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUpPanel])

  return (
    <div className="h-screen ">
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src={uberLogo} alt="uber user logo" />
        <Link to="/captain-home" className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-extrabold ri-logout-box-r-line'></i>
        </Link >
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src={uberMaps}
          alt="uber maps img"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef}  className="fixed z-10 bottom-0 w-full translate-y-full bg-white py-6 pt-12 ">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopUpPanelRef}  className="fixed z-10 bottom-0 w-full translate-y-full h-screen bg-white py-6 pt-12 ">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome



// email: badruchi@gmail.com
// pass:  @6!hmgu56