import Link from 'next/link'
import React from 'react'

const BusOffer = () => {
   
   const  buses=[
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
            {
                img:'/assets/of1.png',
                head:'DomFlight',
                title:'Find the best Flight for your next booking',
                sub:'with our Stamp-That-Passport Sale!',
                code:'T CN Apply',
                src:'www.facebook.com'
            },
          
        ]
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 md:gap-10  px-6  rounded-xl py-10'>
        {buses.map((bus,i)=>{
            return(
                <div key={i} className="flex flex-col gap-3 bg-white px-4 py-4 rounded-xl">
                <img className="w-full h-44 object-cover rounded-xl" src={bus.img} alt="offer1" />
                <div className="flex flex-col gap-2">
                    <p className="text-gray-500 text-lg font-medium">{bus.head}</p>
                    <p className="text-2xl font-semibold">{bus.title}</p>
                    <p className="text-gray-500">{bus.sub}</p>
                    <div className="flex items-center justify-between pt-5">
                    <p className="text-red-400 font-medium text-xl">{bus.code}</p>
                    <Link href={bus.src} className="btn btn-primary  rounded-full">Book Now</Link>
                    </div>
                  
                </div>
            </div>
            )
        })}

    </div>
  )
}

export default BusOffer