import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[24px] bg-[#444] py-[16px] sticky w-full">
      <div>Your Tour</div>
      <div>
        <ul className="flex items-center justify-between gap-x-6">
          <li>Login</li>
          <li className="border-[1px] border-solid rounded-[16px] p-[8px]">
            SignUp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
