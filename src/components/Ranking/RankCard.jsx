import React from "react";

const RankCard = ({ img, nickname, relation }) => {
  return (
    <div className='flex items-center justify-between border rounded-md px-2 py-4 w-[287px] shadow-xl'>
      <div className='flex items-center gap-2'>
        <img
          className='w-12 h-12 object-fit rounded-full '
          src={img}
          alt=''
        />
        <p className='font-bold text-lg'>{nickname}</p>
      </div>
      <p className='text-gray-300 font-semibold text-sm'>{relation}</p>
    </div>
  );
};

export default RankCard;
