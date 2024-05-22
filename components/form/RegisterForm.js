"use client";
import Button from "@/ui/buttons/Button";
import InputElement from "@/ui/elements/InputElement";
import React from "react";

const RegisterForm = () => {
  return (
    <>
      <form action="" className="space-y-6">
        <div className="flex flex-col gap-5">
          <InputElement
            type={"text"}
            placeholder={"Name"}
            htmlFor={"name"}
            width="w-full"
          />
          <InputElement
            type={"email"}
            placeholder={"Email"}
            htmlFor={"Email"}
            width="w-full"
          />

          <InputElement
            type={"number"}
            placeholder={"Phone"}
            htmlFor={"Phone"}
            width="w-full"
          />

          <InputElement
            type={"password"}
            placeholder={"Password"}
            htmlFor={"Password"}
            width="w-full"
          />
        </div>

        {/* Sign in Button */}
        <Button text={"Sing Up"} type="submit" css={"w-full"} />
      </form>
    </>
  );
};

export default RegisterForm;