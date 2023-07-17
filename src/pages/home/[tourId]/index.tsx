import { toursData } from "@/ constants/tours";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const TourDetails = () => {
  const router = useRouter();
  let nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const { tourId } = router.query as {
    tourId: string;
  };
  const currentTourData = toursData.filter((item) => {
    return item._id === tourId;
  })[0];
  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    const data = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      tourName: currentTourData.name,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        //@ts-ignore
        nameRef.current.value = "";
        //@ts-ignore
        emailRef.current.value = "";
      }
    });
  };
  return (
    <>
      {currentTourData && (
        <div className="grid grid-cols-1 gap-y-8 text-black">
          <h2 className="text-[24px] font-[600] ">{currentTourData.name}</h2>
          <h4>{currentTourData.description}</h4>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {currentTourData.images.map((item, i) => {
              return (
                <div key={i}>
                  <img
                    src={`/img/tours/${item}`}
                    alt="tour-image"
                    className="rounded-[12px]"
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-12 gap-y-6 ">
            <div className="col-start-4 col-end-10">
              <form
                onSubmit={(e) => formSubmitHandler(e)}
                className="flex flex-col gap-y-4"
                name="contact"
              >
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white rounded-[6px]  p-[8px] focus:outline-[0.5px] focus:outline-black"
                  ref={nameRef}
                />
                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="bg-white rounded-[6px]  p-[8px] focus:outline-[0.5px] focus:outline-black"
                  ref={emailRef}
                />

                {/* <label htmlFor="Phone">Phone:</label>
                <input
                  type="tel"
                  name="Phone"
                  id="phone"
                  className="bg-white rounded-[6px] broder-[1px] border-solid border-black p-[8px]"
                />
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                /> */}

                <button
                  className="p-[8px] bg-[#55c57a] text-white rounded-[24px] hover:-translate-y-1c hover:shadow-xl"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

TourDetails.PageLayout = Layout;
export default TourDetails;
