import React from "react";

const DoctorAvailable = () => {
  return (
    <>
      <div className="flex gap-4 p-2 shadow overflow-hidden rounded">
        <div className="w-[120px]">
          <img
            className="w-full object-cover rounded h-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
            alt="Avater"
          />
        </div>
        <div className="">
          <p className="text-[15px] font-semibold text-gray-700">
            Mahir Shikder
          </p>
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
      </div>
    </>
  );
};

export default DoctorAvailable;
