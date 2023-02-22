import * as S from "./styles";

import { CardShare } from "components/cardShare";
import { useCallback, useState } from "react";
import { useSelector } from "store";
import { IEvents } from "store/interfaces/IEvents";
import { useDispatch } from "react-redux";
import { formatExcluingYear } from "utils/formatDate";
import { setShowEventsSuccess } from "store/slices/showEvents";

export const HeroBanner = () => {
  const dispatch = useDispatch();

  const [selectZone, setSelectZone] = useState("");
  // const [eventsList, setEventList] = useState<IEvents[]>();
  const { events, selections } = useSelector((state) => state);

  const getValuesToFilter = useCallback(
    (year: string, labelZone: string) => {
      const itemEvent = events.events.filter((item: IEvents) => {
        return item.data === formatExcluingYear(year);
      });

      dispatch(setShowEventsSuccess(itemEvent));

      // const eventForZone = itemEvent.filter((item) => selectZone);

      // dispatch(setEventsSuccess(itemEvent));
    },
    [dispatch, events.events]
  );

  const list = [
    {
      title: "Centro",
      value: "centro",
    },
    {
      title: "Zona Norte",
      value: "zonanorte",
    },
    {
      title: "Zona Sul",
      value: "zonasul",
    },
    {
      title: "Zona Leste",
      value: "zonaleste",
    },
    {
      title: "Zona Oeste",
      value: "zonaoeste",
    },
  ];

  return (
    <S.Wrapper>
      <S.Content>
        <CardShare optionsListZone={list} showValues={getValuesToFilter} />
      </S.Content>
    </S.Wrapper>
  );
};
