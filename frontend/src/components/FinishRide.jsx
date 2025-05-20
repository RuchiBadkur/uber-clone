import React from 'react'
import uberDriverProfile from '../assets/uber-driver-profile.jpeg';
import { Link } from 'react-router-dom';


const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div className="h-[80%]">
      <h5
        className=" absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white  w-full mx-auto "
        onClick={() => {
          setFinishRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">
        Finish this Ride
      </h3>
      <div className="flex items-center justify-between bg-yellow-400 p-3 rounded-lg ">
        <div className="flex items-center gap-3">
          <img
            src={uberDriverProfile}
            alt="driver profile image"
            className="h-15 w-15 rounded-full object-cover"
          />
          <h2 className="text-xl font-medium">Ruchi Badkur</h2>
        </div>
        <h5>2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">210/78-B</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Life Care Hospital, Indore
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">210/78-B</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Life Care Hospital, Indore
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹ 193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          
            <Link
              to="/captain-home"
              className="w-full flex justify-center bg-green-600 text-lg text-white font-semibold p-2 rounded-lg mt-5"
            >
              Finish Ride
            </Link>
            <p className='text-red-500 mt-10 text-xs'>click on finish ride button if you have completed the payment.</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRide