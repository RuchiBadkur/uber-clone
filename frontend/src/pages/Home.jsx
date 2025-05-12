import React, { useRef, useState } from 'react'
import LocationSerachPanel from '../components/LocationSerachPanel'

import uberLogo from "../assets/uber-logo.png"
import uberMaps from "../assets/uber_maps.jpeg"

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import VehiclePanel from '../components/VehiclePanel'
import ConformRide from '../components/ConformRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {

  const [pickup,setPickup ] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const conformRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [ vehiclePanelOpen, setVehiclePanelOpen ] = useState(false)
  const [conformRidePanel, setConformRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else{
      gsap.to(panelRef.current, {
        height: '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function(){
    if(conformRidePanel){
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [conformRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])
  
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-35' src={uberLogo} alt="uber-logo" />

      {/* image for temporary use */}
      <div className='h-screen w-screen'>
        <img className='w-full h-full' src={uberMaps} alt="uber maps" />
      </div>

      {/* form plan your ride & locations panel*/}
      <div className=' flex flex-col justify-end absolute top-0 h-screen w-full '>
        <div className='h-[35%] p-6 bg-white  relative'>
          <h5 
            className='absolute top-0 right-3 font-extrabold text-3xl opacity-0'
            onClick={()=>setPanelOpen(false)}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Plan your ride</h4>
          <form onSubmit={(e)=>submitHandler(e)} className='pb-5'>
            <div className="line absolute h-10 w-1 top-[45%] left-8 rounded-full bg-[#595757]"></div>
            <input 
              type="text"
              placeholder='Pickup Location'
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              value={pickup}
              onChange={e => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input 
              type="text"
              placeholder='Where to?'
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              value={destination}
              onChange={e => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white mt-0 h-0 p-0'>
          <LocationSerachPanel 
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            panelOpen = {panelOpen} 
            setPanelOpen = {setPanelOpen}
          />
        </div>
      </div>
    
      {/* vehicle panel */}
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 w-full bg-white py-10 pt-12 translate-y-full">
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen}  setConformRidePanel={setConformRidePanel}/>
      </div>

      {/* ConformRide */}
      <div ref={conformRidePanelRef} className="fixed z-10 bottom-0 w-full bg-white py-6 pt-12  translate-y-full">
        <ConformRide setConformRidePanel={setConformRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

    {/* LookingForDriver */}
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 w-full bg-white py-6 pt-12  translate-y-full">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>


    {/* waiting for driver */}
    <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 w-full bg-white py-6 pt-12 ">
        <WaitingForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>

  )
}

export default Home

