import React from "react";

const SelectElement = ({ placeholder = "Select", values }) => {
  return (
    <>
      <select
        id=""
        htmlFor=""
        className="peer rounded-lg border border-primary bg-transparent px-4 py-2 text-[#19191a] focus:outline-none"
      >
        <option value={""}>{placeholder}</option>

        {values?.map((x, i) => (
          <option key={i} value={x.value}>
            {x.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectElement;
