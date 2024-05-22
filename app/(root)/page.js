import InputElement from "@/ui/elements/InputElement";
import React from "react";

const HomaPage = () => {
  return (
    <div className="p-10">
      <div className="relative w-full rounded-lg">
        <InputElement type={"email"} placeholder={"Email"} htmlFor={"Email"} />
      </div>
    </div>
  );
};

export default HomaPage;
