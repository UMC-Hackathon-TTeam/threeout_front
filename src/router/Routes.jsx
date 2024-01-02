import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Main from "./../pages/Home/Main";
import SetProfile from "../pages/auth/SetProfile";
import AddFriendProfile from "./../pages/Home/AddFriendProfile";
import FriendProfile from "./../pages/Home/FriendProfile";
import RecordSticker from "./../pages/Home/RecordSticker";
import RecordText from "./../pages/Home/RecordText";
import DetailRecord from "./../pages/Home/DetailRecord";
import Ranking from "./../pages/Ranking";

const Routes = () => {
  return (
    <>
      <ReactRouters>
        <Route path='/auth'>
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='signUp'
            element={<SignUp />}
          />
          <Route
            path='setProfile'
            element={<SetProfile />}
          />
        </Route>
      </ReactRouters>
      <ReactRouters>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/main'
          element={<Main />}
        />
        <Route
          path='/main/addFriendProfile'
          element={<AddFriendProfile />}
        />
        <Route
          path='/main/friendProfile/:id'
          element={<FriendProfile />}
        />
        <Route
          path='/main/friendProfile/sticker/:id'
          element={<RecordSticker />}
        />
        <Route
          path='/main/friendProfile/text/:id'
          element={<RecordText />}
        />
        <Route
          path='/main/friendProfile/detail/:id'
          element={<DetailRecord />}
        />
        <Route
          path='/ranking/:id'
          element={<Ranking />}
        />
      </ReactRouters>
    </>
  );
};

export default Routes;
