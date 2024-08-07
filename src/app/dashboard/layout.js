"use client";
import { useContext } from "react";
import Navbar from "../component/Navbar";
import { CustomContext, useAppContext } from "../store/context";

export default function layout({ children }) {

  return (
    <CustomContext>
      <div className="bg-[#F8F8FB] overflow-x-hidden min-h-screen sm:h-screen w-screen sm:flex">
        <Navbar />
        {children}
      </div>
    </CustomContext>
  );
}
