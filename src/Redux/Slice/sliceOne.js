import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counterSlice",
	initialState: { number: 0 },
	reducers: {
		decrease: (state) => {
			state.number--;
		},
		increase: (state) => {
			state.number++;
		},
	},
});

export const counterAction = counterSlice.actions;
export const counterReducers = counterSlice.reducer;
