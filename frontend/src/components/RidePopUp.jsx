import React from 'react';
import uberDriverProfile from '../assets/uber-driver-profile.jpeg';

const RidePopUp = ({ setRidePopUpPanel,setConfirmRidePopUpPanel }) => {
  return (
    <div className="w-[90%] m-auto">
      <h5
        className=" absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white  w-[90%] m-auto"
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">New Ride Available!</h3>
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

        <div className='flex items-center justify-between  mt-5 w-full'>
          <button
            onClick={() => {setConfirmRidePopUpPanel(true)}}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg mt-1"
          >
            Accept
          </button>
          <button
            onClick={() => {
              setRidePopUpPanel(false);
            }}
            className=" bg-gray-400 text-gray-700  font-semibold p-3 px-10 rounded-lg mt-1"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
