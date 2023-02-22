import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDataBaseEventsState, IEvents } from "../../interfaces/IShowEvents";

const INITIAL_STATE: IDataBaseEventsState = {
  isLoading: false,
  showEvents: [
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
  name: "showEvents",
  initialState: INITIAL_STATE,
  reducers: {
    setShowEventsSuccess(state, { payload }: PayloadAction<IEvents[]>) {
      return { ...state, isLoading: false, showEvents: payload };
    },
    clearEvents(state) {
      return { ...state, isLoading: false };
    },
  },
});

export const { setShowEventsSuccess, clearEvents } = slice.actions;

export const selectShowEvents = (state: IDataBaseEventsState) => state;

export const showEventsReducer = slice.reducer;
