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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {toursData.map((item: TToursDataItem, i: number) => {
        return (
          <div
            key={item._id}
            className="flex flex-col  rounded-[12px] border-[1px] shadow-inner bg-white text-black"
          >
            <div className="relative ">
              <div className="relative" id="tour-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/img/tours/tour-${i + 1}-cover.jpg`}
                  alt="tour-image"
                  className=" w-[100%] h-[100%] object-cover rounded-[12px]"
                />
              </div>

              <h3 className="absolute bottom-[1rem] right-[1rem] text-right text-[1.25rem] text-white font-[300] uppercase  z-10  w-[70%] leading-[40px]">
                <span className="px-[1.5rem] py-[1rem] box-decoration-clone bg-gradient-to-r from-[#7dd56fd9] to-[#28b487d9] text-right">
                  {item.name}
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-x-[16px] gap-y-[16px] p-[16px]">
              <div className="uppercase text-[10px] font-[600] leading-[16px]">
                {`${item.difficulty} ${item.duration}-day tour`}
              </div>
              <div className="text-[16px] italic font-[200] leading-[16px]">
                {item.summary}
              </div>
              <div className="grid grid-cols-2 grid-rows-2 text-[12px] font-[200] leading-[12px] gap-y-[12px]">
                <div>
                  {/* <svg
                    aria-hidden="true"
                    className="position: absolute; width: 0; height: 0; overflow: hidden;"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <symbol id="icon-clock" viewBox="0 0 24 24">
                      <title>clock</title>
                      <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"></path>
                      <path d="M16.4 13.1l-3.4-1.7v-5.4c0-0.6-0.4-1-1-1s-1 0.4-1 1v6c0 0.4 0.2 0.7 0.6 0.9l4 2c0.1 0.1 0.2 0.1 0.4 0.1 0.4 0 0.7-0.2 0.9-0.6s0-1-0.5-1.3z"></path>
                    </symbol>
                  </svg> */}
                  {item.startLocation.description}
                </div>
                <div>{`${new Date(
                  `${item.startDates?.[0]}`
                ).getFullYear()}`}</div>
                <div>{item.locations.length}</div>
                <div>{item.maxGroupSize}</div>
              </div>
            </div>
            <div className="p-[16px] grid grid-flow-col gap-6 bg-[#f7f7f7] rounded-b-[12px]">
              <div>
                {" "}
                <p>
                  <span className="font-[400] text-[14px]">
                    $ {item.price}{" "}
                  </span>
                  <span className="text-[#999] text-[12px]">per person</span>
                </p>
                <p>
                  <span className="font-[400] text-[14px]">
                    {item.ratingsAverage}
                  </span>
                  <span className="text-[#999] text-[12px]">
                    {" "}
                    ratings({item.ratingsQuantity})
                  </span>
                </p>
              </div>

              <button className="p-[8px] bg-[#55c57a] text-white rounded-[24px] hover:-translate-y-1 hover:shadow-xl">
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Home.PageLayout = Layout;
export default Home;
