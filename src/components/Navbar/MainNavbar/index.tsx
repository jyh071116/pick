import React, { useRef } from "react";
import * as N from "../Navbar";
import imgLogo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeState } from "../../../store/partialFullpage";
import { changeSearchVal } from "../../../store/searchVal";

const MainNavbar = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const inputVal = useRef<string>();

  return (
    <N.Navbar partialFullpage={true}>
      <N.StartNav>
        <div>
          <Link
            to="/"
            onClick={() => {
              dispatch(changeState(false));
            }}
          >
            <N.StartNavLogo src={imgLogo} alt="logo" />
          </Link>
        </div>
        <div>
          <input
            style={{ width: "100%" }}
            placeholder="Search"
            type="text"
            onInput={(e) => {
              inputVal.current = e.currentTarget.value;
            }}
            onKeyPress={(e) => {
              if (inputVal.current && e.key === "Enter"){
              dispatch(changeSearchVal(inputVal.current));
              }
            }}
          />
        </div>
        <div>지도</div>
        <div>맛집</div>
        <div>관광명소</div>
      </N.StartNav>
    </N.Navbar>
  );
};

export default MainNavbar;
