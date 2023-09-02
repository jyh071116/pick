import { useRef } from "react";
import * as N from "../Navbar";
import * as S from "./style";
import imgLogo from "../../../assets/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeState } from "../../../store/partialFullpage";
import { changeSearchVal } from "../../../store/searchVal";
import { changeS } from "../../../store/placeOrFood";

const MainNavbar = (props : {reload : any}): JSX.Element => {
  const navigate = useNavigate();
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
            style={{ width: "100%", border: "2px solid black", zIndex: "3", borderRadius: "5px"}}
            placeholder="Search"
            type="text"
            onInput={(e) => {
              inputVal.current = e.currentTarget.value;
            }}
            onKeyPress={(e) => {
              if (inputVal.current && e.key === "Enter") {
                dispatch(changeSearchVal(inputVal.current));
                props.reload();
              }
            }}
          />
        </div>
        <S.NavElement
          onClick={() => {
            navigate("/main");
            dispatch(changeS("both"));
          }}
        >
          지도
        </S.NavElement>
        <S.NavElement
          onClick={() => {
            dispatch(changeS("food"));
          }}
        >
          맛집
        </S.NavElement>
        <S.NavElement
          onClick={() => {
            dispatch(changeS("place"));
          }}
        >
          관광명소
        </S.NavElement>
      </N.StartNav>
    </N.Navbar>
  );
};

export default MainNavbar;
