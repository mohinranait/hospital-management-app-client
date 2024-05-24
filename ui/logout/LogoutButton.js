"use client";
import React from "react";
import { useSelector } from "react-redux";

const LogoutButton = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return <span onClick={""}>{children}</span>;
};

export default LogoutButton;
