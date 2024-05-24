import NotAuthRoute from "@/providers/NotAuthRoute";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <NotAuthRoute>
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    </NotAuthRoute>
  );
};

export default AuthLayout;
