import styled from "styled-components";
import { MediaQueries } from "utils/mediaQueries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ZoneName = styled.h3`
  font-size: 2rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  background-color: #c41efb;
  width: 100%;
  height: 2px;
  border-radius: 10px;
`;
