import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const PageLoader = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default PageLoader;
