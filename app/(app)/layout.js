import ProtectRoute from "@/providers/ProtectRoute";
import DashboardHeader from "@/ui/headers/DashboardHeader";
import Link from "next/link";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

import {
  FaBars,
  FaDashcube,
  FaUser,
  FaUserDoctor,
  FaUserLarge,
} from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

const ApplicationLayout = ({ children }) => {
  return (
    <ProtectRoute>
      <div className="bg-bg">
        <DashboardHeader />
        <div className="flex gap-1 pt-1">
          <div className="bg-white shadow h-[calc(100vh-65px)] w-[80px]">
            <ul className="flex items-center flex-col mt-6 gap-8">
              <li>
                <Link
                  href={"/manage"}
                  className="cursor-pointer bg-primary text-white w-12 h-12 rounded-md flex justify-center items-center"
                >
                  <MdSpaceDashboard size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/manage"}
                  className="cursor-pointer bg-primary text-white w-12 h-12 rounded-md flex justify-center items-center"
                >
                  <FaUser size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/manage"}
                  className="cursor-pointer bg-primary text-white w-12 h-12 rounded-md flex justify-center items-center"
                >
                  <FaUserDoctor size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/manage"}
                  className="cursor-pointer bg-primary text-white w-12 h-12 rounded-md flex justify-center items-center"
                >
                  <AiOutlineLogout size={25} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-3 pl-4 pr-4 bg-bg w-full h-[calc(100vh-80px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </ProtectRoute>
  );
};

export default ApplicationLayout;
