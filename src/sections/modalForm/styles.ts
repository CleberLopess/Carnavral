import styled, { keyframes } from "styled-components";

export const showAnimation = keyframes`
0% {opacity: 0.0;}
50% {opacity: 0.5;}
100% {opacity: 1;}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  animation: ${showAnimation} 1s linear;
`;

export const Content = styled.div`
  background-image: url("images/palmas.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  max-width: 500px;
  width: 80%;
  height: 70vh;
  border-radius: 10px;
  justify-content: flex-start;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  font-size: 2rem;
  display: flex;
  margin: 0 0 0 auto;
`;

export const ContentLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 60px auto;
`;

export const Title = styled.h2`
  font-size: 4rem;
  color: #c41efb;
`;

export const Description = styled.p`
  font-size: 2rem;
  color: #640e80;
`;

export const ButtonCTA = styled.button`
  background-color: #c41efb;
  font-size: 2rem;
  padding: 10px;
  border-radius: 10px;
  color: #ffff;

  :hover {
    background: #9e18cb;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
