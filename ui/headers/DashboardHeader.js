"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="px-4 py-3 bg-white shadow flex justify-between">
        <div className="flex w-full gap-4 items-center">
          <div>
            <span className="w-10 h-10 rounded-full flex justify-center items-center border border-gray-500 p-2">
              {/* <FaUserLarge size={30} /> */}
            </span>
          </div>
          <div>
            <p className="text-gray-700 text-[14px] font-medium">
              {user?.name || ""}
            </p>
            <p className="text-gray-700 text-[11px] font-normal">
              {user?.email || ""}
            </p>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/manage/new-appoinment"}>
              <button className="group text-center relative z-10 h-10 rounded-md w-32 overflow-hidden bg-primary text-sm text-white">
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
                <span className="absolute left-2/4 block -translate-x-2/4 z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
                  Click
                </span>
                Appoinment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
