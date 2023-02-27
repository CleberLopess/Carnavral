import styled from "styled-components";
import { MediaQueries } from "utils/mediaQueries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentSectionsEvents = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ZoneName = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
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
  margin: 50px 0 80px;
`;
