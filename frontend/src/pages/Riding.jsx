import React from 'react';
import uberMaps from '../assets/uber_maps.jpeg';
import uberCar from '../assets/uberCar.webp';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className='fixed block h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2'>
        <i className='text-lg font-extrabold ri-home-5-line'></i>
      </Link >
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src={uberMaps}
          alt="uber maps img"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-15" src={uberCar} alt="ubercar" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ruchi</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP05 XZ 6222</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
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
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹ 193.20</h3>
                <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
