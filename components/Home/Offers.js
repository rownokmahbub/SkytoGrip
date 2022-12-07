import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Offers = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
      };
  return (
    <div className="container mx-auto">
      <p className="text-4xl font-semibold">Offers</p>
      <div className="md:h-screen">
      <Tab.Group>
        <Tab.List className="flex gap-5 my-10 ">
          <Tab
            className={({ selected }) =>
              classNames(
                " rounded-full  px-4 text-sm font-medium  text-white py-2",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-primary    shadow"
                  : "text-black hover:bg-white/[0.12]"
              )
            }
          >
            One Way
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " rounded-full  px-4 text-sm font-medium  text-white py-2",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-primary    shadow"
                  : "text-black hover:bg-white/[0.12]"
              )
            }
          >
            Bank Offer
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " rounded-full  px-4 text-sm font-medium  text-white py-2",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-primary    shadow"
                  : "text-black hover:bg-white/[0.12]"
              )
            }
          >
            Flights
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " rounded-full  px-4 text-sm font-medium  text-white py-2",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-primary shadow"
                  : "text-black hover:bg-white/[0.12]"
              )
            }
          >
            Hotels
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " rounded-full  px-4 text-sm font-medium  text-white py-2",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-primary    shadow"
                  : "text-black hover:bg-white/[0.12]"
              )
            }
          >
            Cabs
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 md:gap-16 bg-gray-50 px-6 py-6 rounded-xl md:h-screen">
                <div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-xl">
                    <img className="w-full h-44 object-cover rounded-xl" src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-xl">
                    <img className="w-full h-44 object-cover rounded-xl" src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-xl">
                    <img className="w-full h-44 object-cover rounded-xl" src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-xl">
                    <img className="w-full h-44 object-cover rounded-xl" src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 bg-gray-50 px-6 py-6 rounded-xl">
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 bg-gray-50 px-6 py-6 rounded-xl">
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 bg-gray-50 px-6 py-6 rounded-xl">
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 bg-gray-50 px-6 py-6 rounded-xl">
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
                <div className="flex gap-5 bg-white px-4 py-4 rounded-xl">
                    <img src="/assets/of1.png" alt="offer1" />
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-lg font-medium">DomFlight</p>
                        <p className="text-2xl font-semibold">Find the best Flight for your next booking</p>
                        <p className="text-gray-500">with our Stamp-That-Passport Sale!</p>
                        <div className="flex items-center justify-between pt-5">
                        <p className="text-red-400 font-medium text-xl">T Cs Apply</p>
                        <button className="btn btn-primary  rounded-full">Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Tab.Panel>
          
        </Tab.Panels>
      </Tab.Group>
      </div>
    
    </div>
  );
};

export default Offers;
