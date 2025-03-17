import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Create Redux store and set the counter reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Optional: If you’re using TypeScript, you can export the store's types for type safety
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
