import styled, { css } from "styled-components";

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
