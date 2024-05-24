"use client";
import useAxios from "@/hooks/useAxios";
import Button from "@/ui/buttons/Button";
import InputElement from "@/ui/elements/InputElement";
import SelectElement from "@/ui/elements/SelectElement";
import LoadingSpinner from "@/ui/spinners/LoadingSpinner";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateUserMember = ({ user }) => {
  const [formValue, setFormValue] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const axios = useAxios();
  const handleOnChange = (e, field) => {
    setFormValue({ ...formValue, [field]: e });
  };

  useEffect(() => {
    setFormValue((prev) => ({ ...prev, ...user }));
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `/member/update/${user?._id}`,
        formValue
      );
      if (data?.success) {
        setIsLoading(false);
        toast.success("Updated");
      } else {
        toast.error("Somthing wrong");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-7">
            <div className="flex  gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Name
              </p>
              <InputElement
                htmlFor={"name"}
                placeholder={"Name"}
                type={"text"}
                value={formValue?.name}
                onChange={(e) => handleOnChange(e, "name")}
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Email
              </p>
              <InputElement
                htmlFor={"email"}
                placeholder={"Email"}
                type={"email"}
                value={formValue?.email}
                onChange={(e) => handleOnChange(e, "email")}
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Phone
              </p>
              <InputElement
                htmlFor={"phone_number"}
                placeholder={"Phone"}
                type={"number"}
                value={formValue?.phone_number}
                onChange={(e) => handleOnChange(e, "phone_number")}
              />
            </div>

            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Gender
              </p>
              <SelectElement
                placeholder="Select gender"
                values={[
                  { title: "Male", value: "Male" },
                  { title: "Female", value: "Female" },
                  { title: "Others", value: "Others" },
                ]}
                value={formValue?.gender}
                onChange={(e) => handleOnChange(e, "gender")}
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Member role
              </p>
              <SelectElement
                placeholder="Select role"
                values={[
                  { title: "Admin", value: "Admin" },
                  { title: "Doctor", value: "Doctor" },
                  { title: "Clener", value: "Clener" },
                  { title: "Patient", value: "Patient" },
                ]}
                value={formValue?.role}
                onChange={(e) => handleOnChange(e, "role")}
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Married status
              </p>
              <label htmlFor="Married">
                <input
                  type="radio"
                  id="Married"
                  value={"Married"}
                  onChange={(e) => handleOnChange(true, "isMarried")}
                  name="married"
                  checked={formValue?.isMarried === true}
                />{" "}
                Married
              </label>
              <label htmlFor="unMarried">
                <input
                  type="radio"
                  id="unMarried"
                  value={"Unmarried"}
                  name="married"
                  checked={formValue?.isMarried === false}
                  onChange={(e) => handleOnChange(false, "isMarried")}
                />{" "}
                Unmarried
              </label>
            </div>
            <div className="flex gap-8">
              <Button
                type="submit"
                disable={isLoading}
                text={
                  isLoading ? (
                    <>
                      <LoadingSpinner />
                    </>
                  ) : (
                    "Save"
                  )
                }
              ></Button>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Doctor visite
              </p>
              <InputElement
                htmlFor={"visite"}
                placeholder={"Price"}
                type={"number"}
                value={formValue?.visite?.amount}
                onChange={(e) =>
                  handleOnChange({ amount: Number(e) }, "visite")
                }
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Chember
              </p>
              <InputElement
                htmlFor={"chamber_no"}
                placeholder={"Room no"}
                type={"text"}
                value={formValue?.chamber_no}
                onChange={(e) => handleOnChange(e, "chamber_no")}
              />
            </div>
            <div className="flex gap-8">
              <p className="text-sm font-medium text-gray-500 w-[100px]">
                Specialist
              </p>
              <InputElement
                htmlFor={"specialist"}
                placeholder={"Specialist"}
                type={"text"}
                value={formValue?.specialist}
                onChange={(e) => handleOnChange(e, "specialist")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserMember;
