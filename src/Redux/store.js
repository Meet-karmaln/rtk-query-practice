import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./Slice/sliceOne";
import { productsApi } from "./dataFetching/apiSlice";

const store = configureStore({
	reducer: {
		counter: counterReducers,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
