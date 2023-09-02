import * as S from "./style";
import * as N from "../Navbar";
import imgLogo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeState } from "../../../store/partialFullpage";

interface StartNavbarProps {
  partialFullpage: boolean;
}

const StartNavbar = (props: StartNavbarProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <N.Navbar partialFullpage={props.partialFullpage}>
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
          <S.IntroduceButton
            onClick={() => {
              dispatch(changeState(true));
            }}
          >
            소개
          </S.IntroduceButton>
        </div>
        <div>
          <Link to="/main">시작</Link>
        </div>
        <div>
          <Link to="/today">오늘의 추천</Link>
        </div>
      </N.StartNav>
    </N.Navbar>
  );
};

export default StartNavbar;
