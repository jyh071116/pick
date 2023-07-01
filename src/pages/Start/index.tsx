import StartNavbar from "../../components/Navbar/StartNavbar";
import { StartMainContent, StartPage } from "./style";

import React from "react";

const Start = () => {
  return (
    <StartPage>
      <StartNavbar />
      <StartMainContent>Pick에서,<br/>지도로 여행을 떠나다.</StartMainContent>
    </StartPage>
  );
};

export default Start;
