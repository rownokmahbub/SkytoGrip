import React from 'react'
import {MdTimelapse} from 'react-icons/md'
const Service = () => {
  return (
    <div className='bg-gradient-to-t from-red-50 to-cyan-50 py-5'>
        <p className='text-4xl font-semibold text-center'>Why Book Flight with SkytoGrip</p>
        <p className='text-xl my-2 text-center text-gray-500'>Book Flight Tickets Online. Save Time and Money!</p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 py-10">
            <div className=" flex flex-col gap-4 justify-center items-center">
                <MdTimelapse className='text-5xl text-primary'/>
                <p className='text-2xl font-semibold'>Flexable Time</p>
                <p className='text-gray-600 text-center text-lg'>No hidden charges, no payment fees, and free
customer service. So you get the best deal every time!</p>
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center">
                <MdTimelapse className='text-5xl text-primary'/>
                <p className='text-2xl font-semibold'>Flexable Time</p>
                <p className='text-gray-600 text-center text-lg'>No hidden charges, no payment fees, and free
customer service. So you get the best deal every time!</p>
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center">
                <MdTimelapse className='text-5xl text-primary'/>
                <p className='text-2xl font-semibold'>Flexable Time</p>
                <p className='text-gray-600 text-center text-lg'>No hidden charges, no payment fees, and free
customer service. So you get the best deal every time!</p>
            </div>
        </div>
    </div>
  )
}

export default Service