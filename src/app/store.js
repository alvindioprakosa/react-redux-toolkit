import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// TypeScript helpers (optional)
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
