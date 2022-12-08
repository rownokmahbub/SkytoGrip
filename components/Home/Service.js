import React from 'react'
import {MdTimelapse} from 'react-icons/md'
import {IoMdPricetags} from 'react-icons/io'
import {RiRefundFill} from 'react-icons/ri'
const Service = () => {
  return (
    <div className='bg-gradient-to-t from-red-50 to-cyan-50 py-4 px-2 md:px-4'>
        <p className='text-xl md:text-3xl font-semibold text-center'>Why Book Flight with SkytoGrip</p>
        <p className='text-lg md:text-xl my-2 text-center text-gray-500'>Book Flight Tickets Online. Save Time and Money!</p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 py-2">
            <div className=" flex flex-col gap-2 justify-center items-center">
                <MdTimelapse className='text-3xl text-primary'/>
                <p className='text-lg md:text-xl font-semibold'>Fast Booking</p>
                <p className='text-gray-600 text-center text-sm md:text-base'>Easy Fast Booking Services</p>
            </div>
            <div className=" flex flex-col gap-2 justify-center items-center">
                <IoMdPricetags className='text-3xl text-primary'/>
                <p className='text-lg md:text-xl font-semibold'>Cheapest Price</p>
                <p className='text-gray-600 text-center text-sm md:text-base'>Get the lowest Price Instead</p>
            </div>
            <div className=" flex flex-col gap-2 justify-center items-center">
                <RiRefundFill className='text-3xl text-primary'/>
                <p className='text-lg md:text-xl font-semibold'>Easy cancelation And Refund</p>
                <p className='text-gray-600 text-center text-sm md:text-base'>Easy Cancel system and money Back!</p>
            </div>
        </div>
    </div>
  )
}

export default Service