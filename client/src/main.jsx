import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line no-unused-vars, react/no-deprecated

// import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider } from "./context/SocketContext.jsx";
import "./index.css";
// <React.StrictMode>
// </React.StrictMode>
ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
// eslint-disable-next-line react/no-deprecated
// ReactDOM.render(
// 	<ContextProvider>
// 		<App />
// 	</ContextProvider>,
// 	document.getElementById("root")
// );
