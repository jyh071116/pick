import * as S from "./style";
import * as N from "../Navbar";
import imgLogo from "../../../assets/logo.svg";

import React from "react";
import { Link } from "react-router-dom";

const StartNavbar = () => {
  return (
    <N.Navbar>
      <S.StartNav>
        <div>
          <Link to="/">
            <S.StartNavLogo src={imgLogo} alt="logo" />
          </Link>
        </div>
        <div>
          <Link to="/introduce">소개</Link>
        </div>
        <div>
          <Link to="/main">시작</Link>
        </div>
        <div>
          <Link to="/today">오늘의 추천</Link>
        </div>
      </S.StartNav>
    </N.Navbar>
  );
};

export default StartNavbar;
