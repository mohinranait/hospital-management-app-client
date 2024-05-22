import Appoinment from "@/components/appoinments/Appoinment";
import Button from "@/ui/buttons/Button";
import DoctorAvailable from "@/ui/cards/DoctorAvailable";
import InputElement from "@/ui/elements/InputElement";
import React from "react";

const CreateNewAppoinment = () => {
  return (
    <div>
      <div
        className="h-[120px] flex items-center justify-center bg-cover rounded-md overflow-hidden relative"
        style={{ backgroundImage: `url('/banner-shap.jpg')` }}
      >
        <div className="w-full h-full absolute bg-black opacity-55"></div>
        <div className="relative">
          <div className="text-[40px] font-semibold text-white ">
            Create new Appoinment
          </div>
        </div>
      </div>

      <Appoinment />
    </div>
  );
};

export default CreateNewAppoinment;
