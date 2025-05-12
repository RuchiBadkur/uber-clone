import React from 'react'
import uberCar from "../assets/uberCar.webp"
// import uberBike from "../assets/uberBike.webp"
// import uberAuto from "../assets/uberAuto.webp"

const LookingForDriver = ({setVehicleFound}) => {
  return (
    <div className='w-[90%] m-auto'>
      <h5 
            className=' absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white  w-[90%] m-auto'
            onClick={()=>setVehicleFound(false)}
          >
            <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5 '>Looking For a Driver</h3>

        <div className='flex gap-2 justify-between items-center flex-col'>
          <img className='h-30' src={uberCar} alt="ubercar" />

          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>210/78-B</h3>
                <p className='text-sm text-gray-600 -mt-1'>Life Care Hospital, Indore</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>210/78-B</h3>
                <p className='text-sm text-gray-600 -mt-1'>Life Care Hospital, Indore</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className='text-lg font-medium'>₹ 193.20</h3>
                <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
              </div>
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default LookingForDriver

