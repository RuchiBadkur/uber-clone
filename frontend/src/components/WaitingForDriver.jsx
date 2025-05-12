import React from 'react'
import uberCar from "../assets/uberCar.webp"
// import uberBike from "../assets/uberBike.webp"
// import uberAuto from "../assets/uberAuto.webp"

const WaitingForDriver = ({waitingForDriver, setWaitingForDriver}) => {
  return (
    <div className='w-[90%] m-auto'>
      <h5 
            className=' absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white  w-[90%] m-auto'
            onClick={()=>setWaitingForDriver(false)}
          >
            <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        
        <div className='flex items-center justify-between'>
            <img className='h-30' src={uberCar} alt="ubercar" />
            <div className='text-right'>
              <h2 className='text-lg font-medium'>Ruchi</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP05 XZ 6222</h4>
              <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
        </div>

        <div className='flex gap-2 justify-between items-center flex-col'>
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

          <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
        </div>
    </div>
  )
}

export default WaitingForDriver