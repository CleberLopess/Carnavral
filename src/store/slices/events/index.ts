import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDataBaseEventsState, IEvents } from "../../interfaces/IEvents";

const INITIAL_STATE: IDataBaseEventsState = {
  isLoading: false,
  events: [
    {
      centro: [{ hour: "", local: "", title: "" }],
      zonanorte: [{ hour: "", local: "", title: "" }],
      zonasul: [{ hour: "", local: "", title: "" }],
      zonaleste: [{ hour: "", local: "", title: "" }],
      zonaoeste: [{ hour: "", local: "", title: "" }],
      data: "",
      title: "",
    },
  ],
};

export const slice = createSlice({
  name: "events",
  initialState: INITIAL_STATE,
  reducers: {
    setEventsSuccess(state, { payload }: PayloadAction<IEvents[]>) {
      return { ...state, isLoading: false, events: payload };
    },
    clearEvents(state) {
      return { ...state, isLoading: false };
    },
  },
});

export const { setEventsSuccess, clearEvents } = slice.actions;

export const selectEvents = (state: IDataBaseEventsState) => state;

export const eventsReducer = slice.reducer;
