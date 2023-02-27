import { useEffect, useRef } from "react";
import * as S from "./styles";

export const GiffInitial = () => {
  const wrapper = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTimeout(() => {
      wrapper.current!.style!.display = "none";
    }, 2000);
  }, [wrapper]);

  return (
    <S.Wrapper ref={wrapper}>
      <S.Content src="movie/openSite.gif"></S.Content>
    </S.Wrapper>
  );
};
