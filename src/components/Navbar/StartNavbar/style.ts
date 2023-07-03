import styled from "styled-components";

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

export const IntroduceButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 400;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
