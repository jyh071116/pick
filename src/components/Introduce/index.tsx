import * as S from "./style";
import imgMaps from "../../assets/maps.svg";
import imgExample from "../../assets/example.svg"
import imgToday from "../../assets/Today.svg"

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
      onWheel={(e : any) => {
        if (e.deltaY < 0 && window.scrollY === 0) {
          dispatch(changeState(false));
        }
      }}
    >
      <S.KeyworldContent top={3}>지도</S.KeyworldContent>
      <S.MainContent top={4}>
        3사 지도를
        <br />한 웹사이트에서
      </S.MainContent>
      <S.MapsImg src={imgMaps} />

      <S.SubContent top={7.5}>
        Pick으로 각 지도별 정보를 확인하세요.
        <br />
        위치에 따른 추천 지도, 해당 지도의 정보량,
        <br />
        날씨까지 한 번에 볼 수 있어요.
      </S.SubContent>

      <S.KeyworldContent top={18.5}>관광명소 · 맛집</S.KeyworldContent>
      <S.MainContent top={19.5}>모든 도시 정보를 한눈에</S.MainContent>
      <S.ExampleImg src={imgExample} />
      <S.SubContent top={21}>
        해당 도시의 위치, 관광명소, 맛집을
        <br />
        따로 검색할 필요 없이
        <br />
        도시만 검색해서 찾아보세요.
      </S.SubContent>
      <S.KeyworldContent top={33.5}>추천</S.KeyworldContent>
      <S.MainContent top={34.5}>Pick만의 특별한 추천</S.MainContent>
      <S.TodayImg src={imgToday} />
      <S.SubContent top={38.5}>
        Pick이 가기 좋은
        <br />
        도시와 여행 코스를 매일매일 추천해드려요.
      </S.SubContent>
    </S.Intro>
  );
};

export default Introduce;
