import React from "react";
import HeadCover from "./headcover";
import MyProfile from "./profile";
import Introduce from "./introduce";
import Activity from "./activity";
import Footer from "./footer";

function App() {
  return (
    <div>
      <HeadCover name='Chaeri'/>
      <MyProfile/>
      <Introduce/>
      <Activity/>
      <Footer/>
    </div>
  );
}

export default App;