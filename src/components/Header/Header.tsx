import { useRouter } from "next/router";
import React, { useState } from "react";

interface IHeaderProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between px-[24px] bg-[#444] py-[16px] sticky w-full">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        >
          Your Tour
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center justify-between gap-x-6">
            <li>Login</li>
            <li className="border-[1px] border-solid rounded-[16px] p-[8px]">
              SignUp
            </li>
          </ul>
        </div>
        {!props.open && (
          <div className=" flex md:hidden" onClick={() => props.setOpen(true)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hamburger.png"
              alt="hamburger"
              className="w-[32px] h-[32px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
