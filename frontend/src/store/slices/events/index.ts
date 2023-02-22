import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDataBaseEventsState, IEvents } from "../../interfaces/IEvents";

const INITIAL_STATE: IDataBaseEventsState = {
  isLoading: false,
  events: [
    {
      center: [{ hour: "", local: "", title: "" }],
      north: [{ hour: "", local: "", title: "" }],
      south: [{ hour: "", local: "", title: "" }],
      east: [{ hour: "", local: "", title: "" }],
      west: [{ hour: "", local: "", title: "" }],
      data: new Date(),
      title: "",
    },
  ],
};

export const slice = createSlice({
  name: "events",
  initialState: INITIAL_STATE,
  reducers: {
    getEventsSuccess(state, { payload }: PayloadAction<IEvents[]>) {
      return { ...state, isLoading: false, events: payload };
    },
    clearEvents(state) {
      return { ...state, isLoading: false };
    },
  },
});

export const { getEventsSuccess, clearEvents } = slice.actions;

export const selectEvents = (state: IDataBaseEventsState) => state;

export const eventsReducer = slice.reducer;
