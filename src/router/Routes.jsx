import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/auth/Login";
import SignUp from '../pages/auth/SignUp';
import SetProfile from "../pages/auth/SetProfile";
import HomePage from "../pages/Home/MainPage";
import AddFriendProfile from "./../pages/Home/AddFriendProfile";
import FriendProfile from "./../pages/Home/FriendProfile";
import RecordSticker from "./../pages/Home/RecordSticker";
import RecordText from "./../pages/Home/RecordText";
import DetailRecord from "./../pages/Home/DetailRecord";
import Ranking from "./../pages/Ranking";
import DangerPage from '../pages/danger/page';


const Routes = () => {
  return (
    <>
      <ReactRouters>
        <Route path='/auth'>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="setProfile" element={<SetProfile />} />
        </Route>
      </ReactRouters>

      <ReactRouters>
        
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/main/addFriendProfile" element={<AddFriendProfile />} />
        <Route path="/main/FriendProfile/:id" element={<FriendProfile />} />
        <Route
          path="/main/FriendProfile/Sticker/:id"
          element={<RecordSticker />}
        />
        <Route path="/main/FriendProfile/Text/:id" element={<RecordText />} />
        <Route
          path="/main/FriendProfile/Detail/:id"
          element={<DetailRecord />}
        />
        <Route path="/Ranking/:id" element={<Ranking />} />
        
      </ReactRouters>
      <ReactRouters>
        <Route path="/danger" element={<DangerPage />} />
      </ReactRouters>
    </>
  );
};

export default Routes;
