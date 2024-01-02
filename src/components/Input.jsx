import React from "react";

const Input = ({ onChange, type, value, label, placeholder }) => {
  return (
    <div className='relative w-full '>
      <label>{label}</label>
      <input
        className={`
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    rounded-md
                    border-2
                    outline-none
                    transition
                `}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
