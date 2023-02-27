import styled from "styled-components";

export const Content = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 15px 0px black;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  max-width: 350px;

  text-align: center;
`;

export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 300px;
  width: 100%;
  height: 100%;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Local = styled.p`
  font-size: 1.5rem;
`;

export const Hour = styled.p`
  font-size: 1.5rem;
`;
