import styled, { css } from "styled-components";

export const Intro = styled.div<{
  partialFullpage: boolean;
  waitScroll: boolean;
}>`
  text-align: center;
  width: 100%;
  height: 400vh;
  position: fixed;
  top: 100vh;
  ${(props) =>
    props.partialFullpage &&
    css`
      transform: translateY(-100vh);
    `}
  ${(props) =>
    props.waitScroll &&
    css`
      position: relative;
    `}
`;

export const KeyworldContent = styled.div<{top?: number}>`
  position: relative;
  top: ${(props) => props.top}%;
  color: #130ede;
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: 1.5px;
`;

export const MainContent = styled.div<{top?: number}>`
  position: relative;
  top: ${(props) => props.top}%;
  color: black;
  font-size: 3rem;
  letter-spacing: 0.5px;
  font-weight: 700;
`

export const SubContent = styled.div<{top?: number}>`
  position: relative;
  font-size: 1.5rem;
  top: ${(props) => props.top}%;
  
`

export const MapsImg = styled.img`
  width: 900px;
  position: relative;
  top: 5.5%;
`

export const ExampleImg = styled.img`
  width: 850px;
  position: relative;
  top: 20.5%;
`

export const TodayImg = styled.img`
  width: 700px;
  position: relative;
  top: 37.5%;
`