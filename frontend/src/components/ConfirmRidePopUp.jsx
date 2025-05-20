import React, { useState } from 'react';
import uberDriverProfile from '../assets/uber-driver-profile.jpeg';
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = ({ setConfirmRidePopUpPanel, setRidePopUpPanel }) => {

  const [otp, setOtp] = useState("")

  function submitHandler(e){
    e.preventDefault()
  }


  return (
    <div className="h-[80%]">
      <h5
        className=" absolute top-0 text-center text-gray-500 font-extrabold text-lg bg-white  w-full mx-auto "
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">
        Confirm this ride to Start
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
          <form onSubmit={(e) => {submitHandler(e)}}>
            <input 
            onChange={(e)=> setOtp(e.target.value)}
            value={otp}
            type="text"  
            placeholder='Enter OTP'
            className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3"
            />
            <Link
              to="/captain-riding"
              onClick={() => {
                setConfirmRidePopUpPanel(true);
              }}
              className="w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                setConfirmRidePopUpPanel(false);
                setRidePopUpPanel(false);
              }}
              className="w-full bg-red-500 text-white  font-semibold p-2 rounded-lg mt-1"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
