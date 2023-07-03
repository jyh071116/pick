import styled, { css } from "styled-components";

export const Navbar = styled.nav<{ partialFullpage: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  ${(props) =>
    props.partialFullpage &&
    css`
      transform: translateY(100vh);
    `}
`;
