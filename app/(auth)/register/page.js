import RegisterForm from "@/components/form/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="min-w-[300px] w-[500px]  p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        {/* <h1 className="text-3xl font-bold text-center text-primary">R</h1> */}
        {/* Input fields and the form started */}
        <RegisterForm />
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          I have an account?
          <Link href="/login" className="underline hover:text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
