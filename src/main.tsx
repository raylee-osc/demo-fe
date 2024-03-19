import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@styles/index.css";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
