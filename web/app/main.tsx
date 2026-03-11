import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<App />} />
		</Routes>
	</BrowserRouter>,
);
