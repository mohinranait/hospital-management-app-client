import React from "react";

const Button = ({
  text,
  type = "button",
  onClick,
  css,
  varient = "bg-primary",
  disable = false,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={() => {
          if (type === "button" && onClick) {
            onClick();
          }
        }}
        disabled={disable}
        className={`rounded-lg flex justify-center items-center  px-4 py-1 text-lg text-white duration-300 active:scale-95 ${varient} ${css} `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
