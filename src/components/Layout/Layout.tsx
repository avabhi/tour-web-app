import React, { ReactNode } from "react";
import Header from "../Header/Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="py-[5rem] px-[6rem] relative bg-[#f7f7f7]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
