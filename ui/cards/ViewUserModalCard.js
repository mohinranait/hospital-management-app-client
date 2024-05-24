import Link from "next/link";
import React from "react";

const ViewUserModalCard = ({ user }) => {
  return (
    <>
      <div className="">
        <div className="flex gap-5">
          <div className="w-[180px]">
            <img
              className="w-full object-cover rounded h-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
              alt="Avater"
            />
          </div>
          <div>
            <p className="text-lg text-gray-800 font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500 font-normal">{user?.email}</p>
          </div>
        </div>
      </div>
      <div>
        <Link href={`/admin/users/${user?._id}`}>Edit</Link>
      </div>
    </>
  );
};

export default ViewUserModalCard;
