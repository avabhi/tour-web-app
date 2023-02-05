import { toursData } from "@/ constants/tours";
import Layout from "@/components/Layout/Layout";
import React from "react";

type TLocataion = {
  _id: string;
  description: string;
  type: string;
  coordinates: number[];
  day: number;
};

type TToursDataItem = {
  startLocation: {
    description: string;
    type: string;
    coordinates: number[];
    address: string;
  };
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  startDates: string[];
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  guides: string[];
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: TLocataion[];
};

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {toursData.map((item: TToursDataItem) => {
        return (
          <div
            key={item._id}
            className="flex flex-col rounded-[4px] bg-white text-black"
          >
            <div className="relative">
              <div className="relative" id="tour-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tour.jpeg"
                  alt="tour-image"
                  className=" w-[100%] object-cover"
                />
              </div>
              <h3 className="absolute bottom-[1rem] right-[1rem] text-right text-white font-[300] uppercase  z-10  w-[70%]">
                <span className="px-[1.5rem] py-[1rem] box-decoration-clone bg-gradient-to-r from-[#7dd56fd9] to-[#28b487d9] text-right">
                  {item.name}
                </span>
              </h3>
            </div>
            <div className="px-[8px]">{item.name}</div>
            <div className="px-[8px]">
              <button>Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Home.PageLayout = Layout;
export default Home;
