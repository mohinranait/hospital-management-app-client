import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="min-w-[300px] w-[500px]  p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        {/* <h1 className="text-3xl font-bold text-center text-primary">Login</h1> */}
        {/* Input fields and the form started */}
        <LoginForm />
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <Link href="/register" className="underline hover:text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
