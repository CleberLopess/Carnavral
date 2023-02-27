import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IModalFormState } from "../../interfaces/IModalForm";

const INITIAL_STATE: IModalFormState = {
  isLoading: false,
  showModal: false,
};

export const slice = createSlice({
  name: "modalForm",
  initialState: INITIAL_STATE,
  reducers: {
    setModalForm(state, { payload }: PayloadAction<boolean>) {
      return { ...state, isLoading: false, showModal: payload };
    },
    clearModalForm(state) {
      return { ...state, isLoading: false };
    },
  },
});

export const { setModalForm, clearModalForm } = slice.actions;

export const selectModalForm = (state: IModalFormState) => state;

export const modalFormReducer = slice.reducer;
