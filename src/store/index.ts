import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

//reducers
import { eventsReducer } from "./slices/events";
import { selectionsReducer } from "./slices/selections";
import { showEventsReducer } from "./slices/showEvents";
import { modalFormReducer } from "./slices/modalForm";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    selections: selectionsReducer,
    showEvents: showEventsReducer,
    modalForm: modalFormReducer,
  },
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
