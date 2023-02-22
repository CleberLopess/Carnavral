import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

//reducers
import { eventsReducer } from "./slices/events";
import { selectionsReducer } from "./slices/selections";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    selections: selectionsReducer,
  },
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
