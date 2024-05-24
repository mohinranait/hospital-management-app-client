"use client";
import { addUser, authLoading } from "@/features/auth/authSlice";
import useAxios from "@/hooks/useAxios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        dispatch(authLoading(true));
        const response = await axios.get("/auth");
        dispatch(addUser(response?.data));
        dispatch(authLoading(false));
      } catch (error) {
        dispatch(authLoading(false));
        console.log(error.message);
      } finally {
        dispatch(authLoading(false));
      }
    })();
  }, []);
  return <>{children}</>;
};

export default AuthProvider;
