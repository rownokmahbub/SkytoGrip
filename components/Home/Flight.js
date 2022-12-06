import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";

const Flight = () => {
  const ctg = [
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
      src: "https://tailwindcss.com/docs/grid-column",
    },
    {
      title: "Delhi to Mumbai DEBBOM",
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
        <div className=" col-span-2 bg-gray-50 px-10 py-7 rounded-xl  gap-5">
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
        <div className="bg-gray-50 px-6 py-6 rounded-xl">
          <div className="flex flex-col gap-5 bg-white rounded-xl px-6 py-4">
            <p className="text-xl font-semibold">Federal Bank Limited</p>
            <p className="text-lg ">
              Get up to 15% off on Flights with Federal Bank Cards.
            </p>
            <div className="flex gap-4 items-center">
            <p className="text-xl capitalize">coupon Code</p>
            <button className="btn btn-sm btn-outline btn-primary">RMDET445</button>
            </div>
            <p className="text-lg text-primary cursor-pointer hover:underline">know more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
