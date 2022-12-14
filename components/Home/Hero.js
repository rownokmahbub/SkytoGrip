import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {RiArrowLeftRightFill,RiArrowUpDownFill} from 'react-icons/ri'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
 
  const [from, setFrom] = useState({content:""});
  const [to, setTo] = useState({content:""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom((prev) => {
      return {
        ...prev,
        content:value
      };
    });
  };

  const handleToChange = (e) =>{
    const { value } = e.target;
    setTo((prev) => {
      return {
        ...prev,
        content:value,
      };
    });
  }
  const handleClick = () => {
    setFrom(to);
    setTo(from)
    
  }
  return (
    <div className="">
    <div className="bg-gradient-to-r from-red-400 to-cyan-400 py-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="max-w-xl mb-10 md:mx-auto px-2 lg:max-w-7xl md:mb-12 bg-gray-50 rounded-xl drop-shadow-xl">
    
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className='flex gap-5 w-full max-w-sm px-3 py-4 md:px-10 z-10'>
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
        
        <Tab.Panel className='flex flex-col'>
         <div className='w-full mx-auto flex flex-col lg:flex-row gap-5 lg:gap-5 items-center py-5 px-3 md:px-6'>
         <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>From</p>
             
                <input className='bg-white py-2 focus:outline-none' name='from' type="text" placeholder='Bengaluru..' onChange={handleChange} value={from.content}/>
               
            </div>
            <button onClick={handleClick}>
            <RiArrowLeftRightFill className='w-10 hidden lg:block'/>
            <RiArrowUpDownFill className='w-10 block lg:hidden'/>
            </button>
           
           
            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>To</p>
             
                <input className='bg-white py-2 focus:outline-none' name="to" type="text" placeholder='Bengaluru..' onChange={handleToChange}value={to.content}/>
               
            </div>

            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>Departure</p>
                <input className='bg-white  py-2 focus:outline-none' type="date" placeholder='5 Dec 22' />
            
            </div>
            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>Return</p>
                <input className='bg-white  py-2 focus:outline-none' type="date" placeholder='5 Dec 22' />
            
            </div>

            <div className="flex  flex-col gap-1  bg-white px-4 py-4 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium capitalize'>travellers & Class</p>
                <select className='' name="select" id="">
                    <option value="1 traveler">1 traveler</option>
                    <option value="2 traveler">2 traveler</option>
                    <option value="3 traveler">3 traveler</option>
                    <option value="4 traveler">4 traveler</option>
                </select>
            </div>
         </div>

            <button className='btn btn-primary flex justify-center items-center w-44 mx-auto rounded-full mb-3 capitalize'>Search Here</button>
       
        </Tab.Panel>
        <Tab.Panel className='flex flex-col'>
          <div className='w-full mx-auto flex flex-col lg:flex-row gap-5 lg:gap-5 items-center py-5 px-3 md:px-6'>
          <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>From</p>
             
                <input value={from.content } className='bg-white py-2 focus:outline-none' type="text" placeholder='Bengaluru..' />
               
            </div>
            <button onClick={handleClick}>
            <RiArrowLeftRightFill className='w-10 hidden lg:block'/>
            <RiArrowUpDownFill className='w-10 block lg:hidden'/>
            </button>
           
            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>To</p>
             
                <input value={to.content} className='bg-white py-2 focus:outline-none' type="text" placeholder='Bengaluru..' />
               
            </div>

            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>Departure</p>
                <input className='bg-white  py-2 focus:outline-none' type="date" placeholder='5 Dec 22' />
            
            </div>
            <div className="flex flex-col gap-1 bg-white px-4 py-2 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium'>Return</p>
                <input className='bg-white  py-2 focus:outline-none' type="date" placeholder='5 Dec 22' />
            
            </div>

            <div className="flex  flex-col gap-1  bg-white px-4 py-4 rounded-xl border border-gray-300 w-full md:w-44 xl:w-52">
                <p className='text-lg font-medium capitalize'>travellers & Class</p>
                <select className='bg-white' name="select" id="">
                    <option value="1 traveler">1 traveler</option>
                    <option value="2 traveler">2 traveler</option>
                    <option value="3 traveler">3 traveler</option>
                    <option value="4 traveler">4 traveler</option>
                </select>
            </div>
          </div>
          <button className='btn btn-primary flex justify-center items-center w-44 mx-auto rounded-full mb-3 capitalize'>Search Here</button>
       
        </Tab.Panel>
      
      </Tab.Panels>
    </Tab.Group>
 
        </div>
        
      </div>
    </div>
   
  </div>
  )
}

export default Hero