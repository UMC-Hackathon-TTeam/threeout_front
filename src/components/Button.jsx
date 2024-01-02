import React from "react";

const Button = ({ onClick, disabled, label }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      disabled={disabled}
      className='relative w-full py-3 transition rounded-lg bg-slate-800 border-slate-800 disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 '
    >
      <p className='font-semibold text-white text-md'>{label}</p>
    </button>
  );
};

export default Button;
