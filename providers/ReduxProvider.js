"use client";
import store from "@/features/store";
import React from "react";
import { Provider } from "react-redux";
import AuthProvider from "./AuthProvider";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default ReduxProvider;
