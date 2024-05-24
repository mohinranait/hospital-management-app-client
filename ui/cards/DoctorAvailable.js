"use client";
import GlobalModal from "@/components/modals/GlobalModal";
import React, { useState } from "react";
import ViewUserModalCard from "./ViewUserModalCard";

const DoctorAvailable = ({ user }) => {
  const { name, email, role } = user || {};
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex gap-4 p-2 shadow bg-white overflow-hidden rounded"
      >
        <div className="w-[120px]">
          <img
            className="w-full object-cover rounded h-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
            alt="Avater"
          />
        </div>
        <div className="">
          <p className="text-[15px] font-semibold text-gray-700">{name}</p>
          <p className="text-[12px] font-normal text-gray-600">Giologist</p>
          <p className="text-[13px]">
            Today : <span>available</span>
          </p>
          <p className="text-[13px]">
            Books : <span className="">24 Patient</span>
          </p>
          <p className="text-[13px]">
            Time : <span className="">8:00 AM - 01:00 PM</span>
          </p>
        </div>
        <GlobalModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <ViewUserModalCard user={user} />
        </GlobalModal>
      </div>
    </>
  );
};

export default DoctorAvailable;
