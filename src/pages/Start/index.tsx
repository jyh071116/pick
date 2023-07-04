import StartNavbar from "../../components/Navbar/StartNavbar";
import Introduce from "../../components/Introduce";
import * as S from "./style";
import imgMarker from "../../assets/marker.svg";
import imgAirplain from "../../assets/airplain.svg";
import imgDownButton from "../../assets/downButton.svg";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { changeState } from "../../store/partialFullpage";

const Start = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const partialFullpage = useSelector(
    (state: RootState) => state.partialFullpage,
  );
  const [waitScroll, setWaitScroll] = useState<boolean>(false);

  useEffect(() => {
    if (partialFullpage === true) {
      setTimeout(() => {
        setWaitScroll(true);
      }, 500);
    } else {
      setWaitScroll(false);
    }
  }, [partialFullpage]);

  return (
    <>
      <StartNavbar partialFullpage={partialFullpage} />
      <S.StartPage
        partialFullpage={partialFullpage}
        onWheel={() => dispatch(changeState(true))}
      >
        <S.StartMainContent>
          <span style={{color: "#130EDE"}}>Pick</span>에서,
          <br />
          지도로 여행을 떠나다.
        </S.StartMainContent>
        <S.StartButton
          onClick={() => {
            navigate("/main");
          }}
        >
          <S.StartButtonItem>
            <S.StartMarker src={imgMarker} alt="marker" />
            <span>시작하기</span>
          </S.StartButtonItem>
        </S.StartButton>
        <S.Airplain src={imgAirplain} alt="airplain" />
        <S.downButton
          src={imgDownButton}
          alt="downButton"
          onClick={() => {
            dispatch(changeState(true));
          }}
        />
      </S.StartPage>
      <Introduce partialFullpage={partialFullpage} waitScroll={waitScroll} />
    </>
  );
};

export default Start;