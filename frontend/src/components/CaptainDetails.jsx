import React from 'react'
import uberDriverProfile from "../assets/uber-driver-profile.jpeg"

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex  items-center justify-between'>
                  <div className='flex items-center justify-between'>
                    <img className='h-20 w-20 rounded-full ' src={uberDriverProfile} alt="driver image" />
                    <h4 className='text-lg font-medium'>Ruchi Badkur</h4>
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold'>₹295</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                  </div>
                </div>
                <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                  <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>
                  <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>
                  <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>
                </div>
    </div>
  )
}

export default CaptainDetails