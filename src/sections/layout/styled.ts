import { MediaQueries } from "utils/mediaQueries";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  section {
    width: calc(100% - 15px);
    max-width: 1200px;
    margin: 0 auto;

    ${MediaQueries.mobileMiddle} {
      width: calc(100% - 100px);
    }

    ${MediaQueries.tablet} {
      width: 90%;
    }

    ${MediaQueries.tabletMiddle} {
    }

    ${MediaQueries.desktop} {
    }
  }
`;
