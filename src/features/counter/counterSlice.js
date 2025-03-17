import { createSlice } from "@reduxjs/toolkit";

// Initial state of the counter
const initialState = {
    value: 0,
}

// Create slice for counter actions
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;  // Increment by 1
        },
        decrement: (state) => {
            state.value -= 1;  // Decrement by 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;  // Increment by specified amount
        }
    }
})

// Export actions for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;
