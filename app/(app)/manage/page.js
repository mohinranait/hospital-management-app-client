import InputElement from "@/ui/elements/InputElement";
import React from "react";

const ManageAppoinment = () => {
  return (
    <>
      <div className="relative w-full rounded-lg">
        <InputElement type={"email"} placeholder={"Email"} htmlFor={"Email"} />
      </div>
    </>
  );
};

export default ManageAppoinment;
