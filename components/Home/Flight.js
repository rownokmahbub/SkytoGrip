import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import Slider from "react-slick";
const Flight = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

      };
      const offers=[
        {
            title:'Federal Bank Limited',
            sub:'Get up to 15% off on Flights with Federal Bank Cards.',
            code:"RMDDFF23"
        },
        {
            title:'Federal Bank Limited',
            sub:'Get up to 15% off on Flights with Federal Bank Cards.',
            code:"RMDDFF23"
        },
        {
            title:'Federal Bank Limited',
            sub:'Get up to 15% off on Flights with Federal Bank Cards.',
            code:"RMDDFF23"
        },
        {
            title:'Federal Bank Limited',
            sub:'Get up to 15% off on Flights with Federal Bank Cards.',
            code:"RMDDFF23"
        },
      ]
  const ctg = [
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai ",
      src: "https://tailwindcss.com/docs/grid-column",
    },
  ];
  return (
    <div className="container mx-auto md:h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-3 ">
        <p className="text-3xl font-medium my-10 col-span-2">
          Top Flight Routes
        </p>
        <p className="text-3xl font-medium my-10 ">New Offer</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className=" col-span-2 bg-gradient-to-r from-teal-50 to-cyan-50 px-10 py-7 rounded-xl  gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {ctg.map((ct, i) => {
              return (
                <div key={i} className="flex items-center gap-3">
                  <p className="text-lg font-medium text-gray-700">
                    {ct.title}
                  </p>
                  <Link
                    href={ct.src}
                    className="btn btn-outline btn-primary btn-sm capitalize rounded-full"
                  >
                    Search Flight
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50   px-6 py-6 rounded-xl">
        <Slider {...settings}>
            {offers.map((offer,i)=>{
                return(
                    <div key={i} className=" bg-white h-60 rounded-xl px-6 py-4">
                    <p className="text-xl font-semibold py-2">{offer.title}</p>
                    <p className="text-lg ">
                      {offer.sub}
                    </p>
                    <div className="flex gap-4 py-2 items-center">
                    <p className="text-xl capitalize">coupon Code</p>
                    <button className="btn btn-sm btn-outline btn-primary">{offer.code}</button>
                    </div>
                    <p className="text-lg text-primary cursor-pointer hover:underline pt-4">know more</p>
                  </div>
                )
            })}
      
        
       
       
         
        </Slider>
        
        </div>
      </div>
    </div>
  );
};

export default Flight;
