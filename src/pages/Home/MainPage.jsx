import EmptyFriend from '../../components/EmptyFriend';
import FriendProfile from "../../components/FriendProfile";
import { Button } from '../../styles/Common';

const DUMMY_MYPROFILE = {
  "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
  "nickname": "토미",
  "promise": "새 친구를 찾아보자"
}

const DUMMY_FREINDSLIST = [];

// const DUMMY_FREINDSLIST = [
//   {
//     "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
//     "nickname": "토미",
//     "relation": "엄마"
//   },
//   {
//     "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
//     "nickname": "토미",
//     "relation": "아빠"
//   },
//   {
//     "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
//     "nickname": "토미",
//     "relation": "누나"
//   },
//   {
//     "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
//     "nickname": "토미",
//     "relation": "형"
//   },
//   {
//     "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
//     "nickname": "토미",
//     "relation": "할머니"
//   }
// ]

const HomePage = () => {

  return (
    
    <div className='text-center'>
      <div className='flex items-center w-full gap-2 mt-20'>
        <img className="w-20 h-20 rounded-full object-fit" src={DUMMY_MYPROFILE.profile_img} alt="bueno-img"  />
        <div className='flex flex-col gap-2 text-start'>
          <p className='text-lg font-bold'>{DUMMY_MYPROFILE.nickname}</p>
          <p className='px-2 py-1 border border-black rounded-md'>{DUMMY_MYPROFILE.promise}</p>
        </div>
      </div>
      <Button color='rgba(113, 202, 204, 1)'>친구 추가</Button>
      <div className='px-2 my-10'>
        <p className='font-bold text-gray-400 text-start'>친구 목록</p>
        <div className='my-5' />
        {DUMMY_FREINDSLIST.length > 0 ? (
          DUMMY_FREINDSLIST.map((data, index) => (
            <>
              <FriendProfile 
                key={index}
                img={data.profile_img}
                nickname={data.nickname}
                relation={data.relation}
              />
              <div className='mb-5' />
            </>
          ))
        ) : (
          <EmptyFriend />
        )}
      </div>
    </div>
  
  );
}
export default HomePage;

