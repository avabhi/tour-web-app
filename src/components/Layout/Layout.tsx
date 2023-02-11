import React, { ReactNode, useState } from "react";
import Header from "../Header/Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <Header setOpen={setOpen} open={open} />

        <div className="py-[5rem] px-[6rem] relative bg-[#f7f7f7]">
          {children}
        </div>
      </div>
      {open && (
        <div className="md:hidden absolute w-[200px] top-0 right-0 h-full  bg-green-600 z-10 ease-linear duration-75 transition">
          <ul className="flex flex-col items-center justify-between gap-y-[24px] text-black p-[16px]">
            <li>Login</li>
            <li>SignUp</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Layout;
