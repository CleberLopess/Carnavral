import { useEffect, useState } from "react";
import * as S from "./styles";

import { CardEvent } from "components/cardEvent";

import { useSelector } from "store";
import { formatExcluingYear } from "utils/formatDate";
import { IEvents } from "store/interfaces/IEvents";
import { useDispatch } from "react-redux";
import { setShowEventsSuccess } from "store/slices/showEvents";

export const ContentEvents = () => {
  const dispatch = useDispatch();
  const currentDate = formatExcluingYear(new Date().toDateString());
  const { events, showEvents } = useSelector((state) => state);

  useEffect(() => {
    const itemEvent = events.events.filter(
      (item: IEvents) => item.data === currentDate
    );

    if (!!itemEvent.length) {
      dispatch(setShowEventsSuccess(itemEvent));
    } else {
      dispatch(setShowEventsSuccess(events.events));
    }
  }, [currentDate, dispatch, events.events]);

  return (
    <S.Wrapper>
      {showEvents?.showEvents.map((item, index) => {
        return (
          <S.ContentSectionsEvents key={index}>
            <S.Title>{item.title}</S.Title>

            {!!item?.centro && (
              <>
                <S.Divider />
                <S.ZoneName>Centro</S.ZoneName>
                <S.Content>
                  {item?.centro?.map((itemCentro, indexCentro) => {
                    return (
                      <CardEvent
                        key={indexCentro}
                        hour={itemCentro.hour}
                        local={itemCentro.local}
                        title={itemCentro.title}
                        img={itemCentro.image}
                      ></CardEvent>
                    );
                  })}
                </S.Content>
              </>
            )}

            {!!item?.zonanorte && (
              <>
                <S.Divider />
                <S.ZoneName>Zona Norte</S.ZoneName>
                <S.Content>
                  {item?.zonanorte?.map((itemNorte, indexNorte) => {
                    return (
                      <CardEvent
                        key={indexNorte}
                        hour={itemNorte.hour}
                        local={itemNorte.local}
                        title={itemNorte.title}
                        img={itemNorte.image}
                      ></CardEvent>
                    );
                  })}
                </S.Content>
              </>
            )}

            {!!item?.zonasul && (
              <>
                <S.Divider />
                <S.ZoneName>Zona Sul</S.ZoneName>
                <S.Content>
                  {item?.zonasul?.map((itemSul, indexSul) => {
                    return (
                      <CardEvent
                        key={indexSul}
                        hour={itemSul.hour}
                        local={itemSul.local}
                        title={itemSul.title}
                        img={itemSul.image}
                      ></CardEvent>
                    );
                  })}
                </S.Content>
              </>
            )}

            {!!item?.zonaleste && (
              <>
                <S.Divider />
                <S.ZoneName>Zona Leste</S.ZoneName>
                <S.Content>
                  {item?.zonaleste?.map((itemLeste, indexLeste) => {
                    return (
                      <CardEvent
                        key={indexLeste}
                        hour={itemLeste.hour}
                        local={itemLeste.local}
                        title={itemLeste.title}
                        img={itemLeste.image}
                      ></CardEvent>
                    );
                  })}
                </S.Content>
              </>
            )}

            {!!item?.zonaoeste && (
              <>
                <S.Divider />
                <S.ZoneName>Zona Oeste</S.ZoneName>
                <S.Content>
                  {item?.zonaoeste?.map((itemOeste, indexOeste) => {
                    return (
                      <CardEvent
                        key={indexOeste}
                        hour={itemOeste.hour}
                        local={itemOeste.local}
                        title={itemOeste.title}
                        img={itemOeste.image}
                      ></CardEvent>
                    );
                  })}
                </S.Content>
              </>
            )}
          </S.ContentSectionsEvents>
        );
      })}
    </S.Wrapper>
  );
};
