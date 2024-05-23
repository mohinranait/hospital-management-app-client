"use client";
import DoctorAvailable from "@/ui/cards/DoctorAvailable";
import InputElement from "@/ui/elements/InputElement";
import SelectElement from "@/ui/elements/SelectElement";
import React, { useState } from "react";

const types = [
  {
    value: "Doctor",
    title: "Doctor",
  },
  {
    value: "Nurcy",
    title: "Nurcy",
  },
  {
    value: "Lab ",
    title: "Lab ",
  },
  {
    value: "Manager",
    title: "Manager",
  },
  {
    value: "Admin",
    title: "Admin",
  },
];

const AllUsersManagement = () => {
  const [userTypes, setUserTypes] = useState(types);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="px-4 py-4 bg-white mb-5 shadow rounded">
        <div className="flex items-center gap-5">
          <SelectElement values={userTypes} placeholder="Select type" />
          <InputElement type={"search"} placeholder={"Name or title"} />
          <InputElement type={"date"} placeholder={"Vacation"} />
          <div className="flex gap-3 items-center">
            <span>Today</span>
            <button
              onClick={() => setToggle((prev) => !prev)}
              className={`flex h-fit w-8 items-center rounded-sm border border-sky-400 ${
                toggle ? "bg-sky-400/50 duration-500" : "duration-300"
              }`}
            >
              <div
                className={`size-4 rounded-sm bg-sky-400 duration-300 ${
                  toggle ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
        <DoctorAvailable />
      </div>
    </div>
  );
};

export default AllUsersManagement;
