import React from 'react'
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
const DownloadApp = () => {
  return (
    <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 lg:py-20 ">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Visit App</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
            Download App Now !
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-5">Get India 1 travel super app, join 100 Million+ happy travelers!</p>
            <div className="flex gap-10 items-center">
            <img src="/assets/qrcode.png" alt="" />
            <div className="flex items-center flex-col gap-6">
                <div className="flex items-center btn btn-primary gap-3">
                <FaGooglePlay className='text-xl'/>
                Google play
                </div>
        
                <div className="flex items-center btn btn-danger gap-3">
                <AiFillApple className='text-xl'/>
                Google play
                </div>
          </div>
            </div>
           
          </div>
        
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
       <img src="/assets/app.svg" alt="" />
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default DownloadApp