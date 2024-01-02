import React from "react";

const FriendProfile = ({ img, nickname, relation }) => {
  return (
    <div className='flex items-center w-full gap-2'>
      <img
        className='w-16 h-16 rounded-full object-fit'
        src={img}
        alt='bueno-img'
      />
      <p className='font-bold'>{nickname}</p>
      <p className='w-32 px-2 py-1 ml-20 bg-gray-300 border rounded-md'>
        {relation}
      </p>
    </div>
  );
};

export default FriendProfile;
