import React from 'react'
import uberCar from "../assets/uberCar.webp"
import uberBike from "../assets/uberBike.webp"
import uberAuto from "../assets/uberAuto.webp"

const VehiclePanel = ({setVehiclePanelOpen, setConformRidePanel}) => {
  return (
    <div>
        <h5 
            className=' absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white w-full'
            onClick={()=>setVehiclePanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <div className="p-3">
          <h3 className='text-2xl font-semibold mb-5 '>Choose a Vehicle</h3>
          <div onClick={() => { 
            setConformRidePanel(true)
          }} className="flex items-center justify-between w-full p-3  border-2 active:border-black bg-gray-100 rounded-xl mb-2">
            <img className='h-15 mx-6' src={uberCar} alt="ubercar" />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm'>UberGo 
                <span>
                <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-grey'>Affordable, compact rides</p>
            </div>
            <h2 className='xl font-semibold'> ₹193.20</h2> 
          </div>
          <div onClick={() => { 
            setConformRidePanel(true)
          }} className="flex items-center justify-between w-full p-3  border-2 active:border-black bg-gray-100 rounded-xl mb-2">
            <img className='h-15' src={uberBike} alt="uberbike" />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm'>UberMoto 
                <span>
                <i className="ri-user-3-fill"></i>1
                </span>
              </h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-grey'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='xl font-semibold'> ₹68</h2> 
          </div>
          <div onClick={() => { 
            setConformRidePanel(true)
          }} className="flex items-center justify-between w-full p-3  border-2 active:border-black bg-gray-100 rounded-xl mb-2 ">
            <img className='h-15' src={uberAuto} alt="ubercar" />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm'>UberAuto 
                <span>
                <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-grey'>Affordable, Auto rides</p>
            </div>
            <h2 className='xl font-semibold'> ₹140</h2> 
          </div>
        </div>
    </div>
  )
}

export default VehiclePanel