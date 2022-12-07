import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Hero = () => {

  return (
    <div className="">
    <div className="bg-gradient-to-t from-cyan-50 to-red-50">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto px-4 md:px-10 lg:max-w-5xl md:mb-12 bg-gray-50 rounded-xl drop-shadow-xl">
        <div className="w-full max-w-md px-10 py-4 sm:px-0">
        <Tab.Group>
      <Tab.List className='flex gap-5'>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-2.5 text-sm font-medium  text-primary',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-primary hover:bg-white/[0.12]'
                )
              }>One Way</Tab>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-2.5 text-sm font-medium  text-primary',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-primary hover:bg-white/[0.12]'
                )
              }>Round Trip</Tab>
       
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
           <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 flex-wrap lg:flex-nowrap items-center py-5">
            <div className="flex  flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300">
                <p className='text-lg font-medium'>From</p>
                <input className='bg-white w-[280px] md:w-[180px]  py-2 focus:outline-none' type="text" placeholder='Delhi..' />
             
            </div>

            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300">
                <p className='text-lg font-medium'>To</p>
             
                <input className='bg-white w-[280px] md:w-[180px]  py-2 focus:outline-none' type="text" placeholder='Bengaluru..' />
               
            </div>

            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300">
                <p className='text-lg font-medium'>Departure</p>
                <input className='bg-white w-[280px] md:w-[180px] py-2 focus:outline-none' type="date" placeholder='5 Dec 22' />
            
            </div>

            <div className="flex  flex-col gap-1  bg-white px-4 py-4 rounded-xl border border-gray-300">
                <p className='text-lg font-medium capitalize'>travellers & Class</p>
                <select className='w-[280px] md:w-[180px]' name="select" id="">
                    <option value="1 traveler">1 traveler</option>
                    <option value="2 traveler">2 traveler</option>
                    <option value="3 traveler">3 traveler</option>
                    <option value="4 traveler">4 traveler</option>
                </select>
            </div>
           </div>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      
      </Tab.Panels>
    </Tab.Group>
    </div>
        </div>
        
      </div>
    </div>
    <div className="relative px-4 sm:px-0 bg-gradient-to-t from-green-100 to-cyan-100">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-50 to-cyan-50 drop h-1/2" />
      <div className="relative grid mx-auto overflow-hidden bg-white drop-shadow-xl divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-lg">
        <div className="inline-block p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="font-bold tracking-wide text-gray-800">
            Make it better
          </p>
        </div>
        <div className="inline-block p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="font-bold tracking-wide text-gray-800">
            Do it faster
          </p>
        </div>
        <div className="inline-block p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="font-bold tracking-wide text-gray-800">
            Working harder
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero