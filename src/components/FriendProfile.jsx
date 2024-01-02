import React from 'react'

const FriendProfile = ({
  img,
  nickname,
  relation
}) => {
  return (
    <div className='flex items-center gap-2 w-full'>
      <img className="w-16 h-16 object-fit rounded-full" src={img} alt="bueno-img"  />
      <p className='font-bold'>{nickname}</p>
      <p className='ml-20 px-2 py-1 border rounded-md bg-gray-300'>{relation}</p>
      
    </div>
  )
}

export default FriendProfile