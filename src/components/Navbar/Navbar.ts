import styled, { css } from "styled-components";

export const StartNavLogo = styled.img`
  height: 30px;
`;

export const StartNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  div {
    &:nth-child(1) {
      flex-basis: 50%;
      position: relative;
      right: 20%;
    }
    a {
      font-weight: 400;
    }
  }
`;

export const Navbar = styled.nav<{ partialFullpage: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 2;
  ${(props) =>
    props.partialFullpage &&
    css`
      background-color: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    `}
`;
