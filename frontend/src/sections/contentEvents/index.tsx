import { useCallback } from "react";
import * as S from "./styles";

import { CardEvent } from "components/cardEvent";

import { useSelector } from "store";

export const ContentEvents = () => {
  const { selections, events } = useSelector((state) => state);

  console.log(events);

  return (
    <S.Wrapper>
      <S.Title>{events.events[0].title}</S.Title>

      <S.Content>
        {selections.selections.map((item, index) => {
          return (
            <CardEvent
              key={index}
              hour={item.hour}
              local={item.local}
              title={item.title}
              img={item.image}
            ></CardEvent>
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};
