"use client";
import Button from "@/ui/buttons/Button";
import InputElement from "@/ui/elements/InputElement";
import { SERVER_URL } from "@/ui/envSecure";
import LoadingSpinner from "@/ui/spinners/LoadingSpinner";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!data.name) setError({ ...error, name: "Name is required" });
    else setError({ ...error, name: "" });

    if (!data.email) setError({ ...error, email: "Email is required" });
    else setError({ ...error, email: "" });

    if (!data.phone_number)
      setError({ ...error, phone_number: "Phone is required" });
    else setError({ ...error, phone_number: "" });

    if (!data.password)
      setError({ ...error, password: "Password is required" });
    else setError({ ...error, password: "" });

    try {
      setLoading(true);
      const res = await axios.post(`${SERVER_URL}/user/register`, data);

      if (res?.data?.success) {
        toast.success("Register successfull");
        router.push("/login");
      } else {
        toast.error("Somthing wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, field) => {
    setData({ ...data, [field]: e });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-5">
          <InputElement
            type={"text"}
            placeholder={"Name"}
            htmlFor={"name"}
            width="w-full"
            value={data.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <InputElement
            type={"email"}
            placeholder={"Email"}
            htmlFor={"Email"}
            width="w-full"
            value={data.email}
            onChange={(e) => handleChange(e, "email")}
          />

          <InputElement
            type={"number"}
            placeholder={"Phone"}
            htmlFor={"Phone"}
            width="w-full"
            value={data.phone_number}
            onChange={(e) => handleChange(e, "phone_number")}
          />

          <InputElement
            type={"password"}
            placeholder={"Password"}
            htmlFor={"Password"}
            width="w-full"
            value={data.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>

        {/* Sign in Button */}
        <Button
          text={
            loading ? (
              <>
                <LoadingSpinner />
              </>
            ) : (
              "Sign Up"
            )
          }
          type="submit"
          css={"w-full"}
        />
      </form>
    </>
  );
};

export default RegisterForm;
