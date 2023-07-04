import styled, { css } from "styled-components";

export const Intro = styled.div<{
  partialFullpage: boolean;
  waitScroll: boolean;
}>`
  text-align: center;
  width: 100%;
  height: 200vh;
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
  font-size: 2rem;
  letter-spacing: 2.5px;
`;

export const MainContent = styled.div<{top?: number}>`
  position: relative;
  top: ${(props) => props.top}%;
  color: black;
  font-size: 3.5rem;
  letter-spacing: 2.5px;
`
