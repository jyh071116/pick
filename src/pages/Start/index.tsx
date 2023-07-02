import StartNavbar from "../../components/Navbar/StartNavbar";
import * as S from "./style";
import imgMarker from "../../assets/marker.svg";
import imgAirplain from "../../assets/airplain.svg";

import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <S.StartPage>
      <StartNavbar />
      <S.StartMainContent>
        Pick에서,
        <br />
        지도로 여행을 떠나다.
      </S.StartMainContent>
      <S.StartButton>
        <Link to="/main">
          <S.StartButtonItem>
            <S.StartMarker src={imgMarker} alt="marker" />
            <span>시작하기</span>
          </S.StartButtonItem>
        </Link>
      </S.StartButton>
      <S.Airplain src={imgAirplain} alt="airplain" />
    </S.StartPage>
  );
};

export default Start;
