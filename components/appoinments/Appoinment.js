"use client";
import Button from "@/ui/buttons/Button";
import DoctorAvailable from "@/ui/cards/DoctorAvailable";
import InputElement from "@/ui/elements/InputElement";
import SelectElement from "@/ui/elements/SelectElement";
import React, { useState } from "react";

const Appoinment = () => {
  const [current, setCurrent] = useState(0);
  const [countrys, setCountrys] = useState([
    {
      value: "BD",
      title: "BD",
    },
    {
      value: "US",
      title: "US",
    },
    {
      value: "CA",
      title: "CA",
    },
  ]);
  const handleNextButton = (val) => {
    console.log(val);
    setCurrent(val + 1);
  };

  const handlePrevButton = (val) => {
    setCurrent(val - 1);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-4">
        <div className="col-span-8">
          <div className="bg-white shadow  rounded-md overflow-hidden px-5 py-5">
            <form>
              {current == 0 ? (
                <div>
                  <p className="text-base font-semibold">Patient Information</p>
                  <div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">NID Number</span>
                      </div>
                      <div className="col-span-10">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="">
                            <InputElement
                              type={"number"}
                              placeholder={"NID number"}
                              htmlFor={"NID number"}
                              width="w-full"
                              value=""
                              onChange={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">
                          Patient Name
                        </span>
                      </div>
                      <div className="col-span-10">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="">
                            <InputElement
                              type={"text"}
                              placeholder={"First name"}
                              htmlFor={"firstName"}
                              width="w-full"
                            />
                          </div>

                          <div className="">
                            <div className="relative w-full rounded-lg">
                              <InputElement
                                type={"text"}
                                placeholder={"Last name..."}
                                htmlFor={"LastName"}
                                width="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">
                          Patient Email
                        </span>
                      </div>
                      <div className="col-span-10">
                        <div className="relative w-full rounded-lg">
                          <InputElement
                            type={"email"}
                            placeholder={"Email"}
                            htmlFor={"Email"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">
                          Patient Phone
                        </span>
                      </div>
                      <div className="col-span-10">
                        <div className="relative rounded-lg">
                          <InputElement
                            type={"text"}
                            placeholder={"Phone"}
                            htmlFor={"phoneNumber"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : current == 1 ? (
                <div>
                  <p className="text-base font-semibold">Patient Information</p>
                  <div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">
                          Date of Birth
                        </span>
                      </div>
                      <div className="col-span-10">
                        <div className="relative  rounded-lg">
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="date"
                            placeholder=""
                            id="DateOfBirth"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">Gender</span>
                      </div>
                      <div className="col-span-10 flex gap-3 items-center">
                        <label htmlFor="male" className="relative  rounded-lg">
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="radio"
                            name="gender"
                            placeholder=""
                            id="male"
                          />{" "}
                          Male
                        </label>
                        <label
                          htmlFor="female"
                          className="relative  rounded-lg"
                        >
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="radio"
                            name="gender"
                            placeholder=""
                            id="female"
                          />{" "}
                          Female
                        </label>
                        <label
                          htmlFor="others"
                          className="relative  rounded-lg"
                        >
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="radio"
                            name="gender"
                            placeholder=""
                            id="others"
                          />{" "}
                          Others
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">Nationality</span>
                      </div>
                      <div className="col-span-10">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="">
                            <SelectElement
                              values={countrys}
                              placeholder="Select Nationality"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">
                          Ticket Price
                        </span>
                      </div>
                      <div className="col-span-10">
                        <div className="col-span-10 flex gap-3 items-center">
                          <label
                            htmlFor="Paid"
                            className="relative  rounded-lg"
                          >
                            <input
                              className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                              type="radio"
                              name="price"
                              placeholder=""
                              id="Paid"
                            />{" "}
                            Paid
                          </label>
                          <label
                            htmlFor="unpaid"
                            className="relative  rounded-lg"
                          >
                            <input
                              className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                              type="radio"
                              name="price"
                              placeholder=""
                              id="unpaid"
                            />{" "}
                            Unpaid
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">Married</span>
                      </div>
                      <div className="col-span-10 flex gap-3 items-center">
                        <label
                          htmlFor="married"
                          className="relative  rounded-lg"
                        >
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="radio"
                            name="married"
                            placeholder=""
                            id="married"
                          />{" "}
                          Married
                        </label>
                        <label
                          htmlFor="unMarried"
                          className="relative  rounded-lg"
                        >
                          <input
                            className="peer  rounded-lg border border-primary bg-transparent px-4 py-2 text-[#333] focus:outline-none"
                            type="radio"
                            name="married"
                            placeholder=""
                            id="unMarried"
                          />{" "}
                          Unmarried
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-2">
                        <span className="text-sm font-normal">Blood Group</span>
                      </div>
                      <div className="col-span-10 flex gap-3 items-center">
                        <SelectElement placeholder="Select boold group" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>2</>
              )}

              <div className="flex justify-between items-center mt-6">
                <div>
                  {current > 0 && (
                    <Button
                      text={"Previous"}
                      onClick={() => handlePrevButton(current)}
                      type={"button"}
                    />
                  )}
                </div>
                <div>
                  {current == 2 ? (
                    <Button text={"Submit"} type={"button"} />
                  ) : (
                    <Button
                      text={"Next"}
                      onClick={() => handleNextButton(current)}
                      type={"button"}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-4">
          <div className="px-4  py-4 rounded-md bg-white shadow h-[380px] overflow-y-auto">
            <div className="flex gap-3">
              <InputElement
                type={"search"}
                placeholder={"Search doctor"}
                htmlFor={"Search"}
                width="w-full"
              />
              <Button type={"button"} text={"Search"} />
            </div>
            <div className="flex flex-col gap-3">
              <DoctorAvailable />
              <DoctorAvailable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
