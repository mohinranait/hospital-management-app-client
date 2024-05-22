import React from "react";

const InputElement = ({ htmlFor, type, placeholder, width = "" }) => {
  return (
    <div className={`relative  rounded-lg ${width}`}>
      <input
        className={`peer rounded-lg border border-primary bg-transparent px-4 py-2 text-[#19191a] focus:outline-none ${width}`}
        type={type}
        placeholder=""
        id={htmlFor}
        style={{}}
      />
      <label
        className="absolute -top-2 left-[10px] rounded-md px-2 text-xs bg-primary text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-primary peer-focus:text-xs peer-focus:text-white "
        htmlFor={htmlFor}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputElement;
