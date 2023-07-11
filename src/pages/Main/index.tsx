import * as S from "./style";

import React, { useState, useRef } from "react";
import useGeoLocation from "../../hooks/useGeoLocation";

import MainNavbar from "../../components/Navbar/MainNavbar";
import GoogleMaps from "../../components/Maps/GoogleMaps";
import KakaoMaps from "../../components/Maps/KakaoMaps";
import NaverMaps from "../../components/Maps/NaverMaps";

const Main = () => {
  const [whatMap, setWhatMap] = useState<number>(0);
  const location = useGeoLocation();
  const nowLocation = location.coordinates;

  return (
    <>
      <MainNavbar />
      <S.TodayPick>
        오늘의 <span style={{ color: "white" }}>Pick</span>
      </S.TodayPick>
      <S.SelectMaps
        onClick={() => {
          setWhatMap(0);
        }}
      >
        Kakao
      </S.SelectMaps>
      <S.SelectMaps
        onClick={() => {
          setWhatMap(1);
        }}
      >
        Naver
      </S.SelectMaps>
      <S.SelectMaps
        onClick={() => {
          setWhatMap(2);
        }}
      >
        Google
      </S.SelectMaps>
      
      {whatMap === 0 && nowLocation ? (
        <KakaoMaps location={nowLocation} />
      ) : null}
      {whatMap === 1 && nowLocation ? (
        <NaverMaps location={nowLocation} />
      ) : null}
      {whatMap === 2 && nowLocation ? (
        <GoogleMaps location={nowLocation} />
      ) : null}
    </>
  );
};

export default Main;
