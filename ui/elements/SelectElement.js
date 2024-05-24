import React from "react";

const SelectElement = ({
  placeholder = "Select",
  values = [],
  value = "",
  onChange,
}) => {
  return (
    <>
      <select
        id=""
        htmlFor=""
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        className="peer rounded-lg border border-primary bg-transparent px-4 py-2 text-[#19191a] focus:outline-none"
      >
        <option value={""}>{placeholder}</option>

        {values?.map((x, i) => (
          <option key={i} value={x.value} selected={x.value == value}>
            {x.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectElement;
