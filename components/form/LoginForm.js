"use client";

import useAxios from "@/hooks/useAxios";
import Button from "@/ui/buttons/Button";
import InputElement from "@/ui/elements/InputElement";
import { SERVER_URL } from "@/ui/envSecure";
import LoadingSpinner from "@/ui/spinners/LoadingSpinner";
// import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    phone_number: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    phone_number: "",
    password: "",
  });

  // collect input field data
  const handleChange = (e, field) => {
    setData({ ...data, [field]: e });
  };

  // submit form method
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation

    if (!data.email) setError({ ...error, email: "Email is required" });
    else setError({ ...error, email: "" });

    if (!data.password)
      setError({ ...error, password: "Password is required" });
    else setError({ ...error, password: "" });

    try {
      setLoading(true);
      const res = await axios.post(`/user/login`, data);
      console.log(res.data);
      if (res?.data?.success) {
        toast.success("Login successfull");
        const role = res?.data?.user?.role;
        if (role == "Patient") {
          router.push("/");
        } else if (role === "Support") {
          router.push("/manage");
        } else if (role === "Admin") {
          router.push("/admin/dashboard");
        } else if (role === "Doctor") {
          router.push("/doctor/dashboard");
        }
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

  return (
    <>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="flex flex-col gap-5">
          <InputElement
            type={"email"}
            placeholder={"Email"}
            htmlFor={"Email"}
            width="w-full"
            defaultValue={data?.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <InputElement
            type={"password"}
            placeholder={"Password"}
            htmlFor={"Password"}
            width="w-full"
            defaultValue={data?.password}
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
              "Sign In"
            )
          }
          type="submit"
          css={"w-full"}
        />
      </form>
    </>
  );
};

export default LoginForm;
