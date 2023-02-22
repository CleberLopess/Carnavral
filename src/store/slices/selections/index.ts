import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent, ISelectionsState } from "../../interfaces/ISelections";

const INITIAL_STATE: ISelectionsState = {
  isLoading: false,
  selections: [
    {
      hour: "",
      local: "",
      title: "",
    },
  ],
};

export const slice = createSlice({
  name: "selections",
  initialState: INITIAL_STATE,
  reducers: {
    getSelectionsSuccess(state, { payload }: PayloadAction<IEvent[]>) {
      return { ...state, isLoading: false, selections: payload };
    },
    clearSelections(state) {
      return { ...state, isLoading: false };
    },
  },
});

export const { getSelectionsSuccess, clearSelections } = slice.actions;

export const selectSelections = (state: ISelectionsState) => state;

export const selectionsReducer = slice.reducer;
