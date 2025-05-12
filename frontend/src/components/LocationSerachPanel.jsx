import React from 'react'

const LocationSerachPanel = ({vehiclePanelOpen, setVehiclePanelOpen, panelOpen, setPanelOpen}) => {

    const locations = [
        '78, The Hub by Chug Group, Vijyanagar Indore',
        '78, The Hub by Chug Group, Vijyanagar Indore',
        '78, The Hub by Chug Group, Vijyanagar Indore',
        '78, The Hub by Chug Group, Vijyanagar Indore',
        
    ]

  return (
    <div className='mt-6'>
        {/* sample data */}
        {
            locations.map((elem, index) => {
                return (
                    <div 
                        onClick={() => {
                            setVehiclePanelOpen(true)
                            setPanelOpen(false)
                        }}
                        key={index} 
                        className="flex gap-4 border-2 border-gray-100 active:border-gray-300 p-3 rounded-2xl items-center justify-start mb-4"
                    >
                        <h2 className="bg-[#eee] flex items-center justify-center h-10 w-12 rouded-full ">
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default LocationSerachPanel