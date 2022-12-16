import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./Redux/dataFetching/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApiProvider api={productsApi}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApiProvider>
	</React.StrictMode>
);
