import styled, { keyframes } from "styled-components";

export const StartPage = styled.div`
  background: linear-gradient(to bottom, #ffffff, rgba(19, 14, 222, 0.3));
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const StartMainContent = styled.div`
  position: relative;
  top: 10%;
  letter-spacing: 0.25rem;
  font-weight: 600;
  font-size: 5rem;
`;

export const StartMarker = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export const StartButton = styled.div`
  position: relative;
  top: 20%;
  width: 135px;
  z-index:2;
`;

export const StartButtonItem = styled.button`
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 10px;
  font-size: 1.25rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const quadraticMotion = keyframes`
  0%{
    offset-distance: 0%
  }
  100%{
    offset-distance: 100%;
  }
`;

export const Airplain = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: -100px;
  offset: path('m.38,544.3S735.88-320.2,1268.88,130.8') auto;
  animation: ${quadraticMotion} 7.5s ease;
  offset-distance: 100%;
  &::after{
    content: url('../../assets/airplaneLine.svg');
    display: block;
  }
`;
