import React from 'react'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {MdSupportAgent} from 'react-icons/md'
const Benifits = () => {
  return (
    <div className='bg-gradient-to-r from-green-500 via-teal-500 to-green-500 py-2 px-2 md:px-4'>
 
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 py-7">
        <div className=" flex flex-col gap-1 justify-center items-center">
            <RiSecurePaymentFill className='text-3xl text-white'/>
            <p className='text-lg md:text-xl text-white font-semibold'>100% Secure Payments</p>
            <p className='text-gray-100 text-center text-sm md:text-base'>Moving your card details to a much more secured place.</p>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
            <VscWorkspaceTrusted className='text-3xl text-white'/>
            <p className='text-lg md:text-xl text-white font-semibold'>Trust pay</p>
            <p className='text-gray-100 text-center text-sm md:text-base'>100% Payment Protection. Easy Return Policy</p>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
            <MdSupportAgent className='text-3xl text-white'/>
            <p className='text-lg md:text-xl text-white font-semibold'>24X7 Support</p>
            <p className='text-gray-100 text-center text-sm md:text-base'>We are here to help. Have a query and need help ? <span className='text-gray-200 cursor-pointer'>Click Here</span> </p>
        </div>
    </div>
</div>
  )
}

export default Benifits