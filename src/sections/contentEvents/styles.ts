import styled from "styled-components";
import { MediaQueries } from "utils/mediaQueries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  ${MediaQueries.tabletMiddle} {
    justify-content: space-between;
  }
`;
