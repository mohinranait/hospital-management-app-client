import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div
        className="h-[120px] flex items-center justify-center bg-cover rounded-md overflow-hidden relative"
        style={{ backgroundImage: `url('/banner-shap.jpg')` }}
      >
        <div className="w-full h-full absolute bg-black opacity-55"></div>
        <div className="relative">
          <div className="text-[40px] font-semibold text-white ">Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
