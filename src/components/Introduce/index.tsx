import * as S from "./style";

import React from "react";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { changeState } from "../../store/partialFullpage";

interface StartNavbarProps {
  partialFullpage: boolean;
  waitScroll: boolean;
}

const Introduce = (props: StartNavbarProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <S.Intro
      partialFullpage={props.partialFullpage}
      waitScroll={props.waitScroll}
      onWheel={() => {
        if (window.scrollY === 0) {
          dispatch(changeState(false));
        }
      }}
    >
      <S.KeyworldContent top={7.5}>지도</S.KeyworldContent>
      <S.MainContent top={9}>
        3사 지도를
        <br />한 웹사이트에서
      </S.MainContent>
    </S.Intro>
  );
};

export default Introduce;
