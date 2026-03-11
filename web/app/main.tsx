import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "@/App";
import HolidayDetailsPage from "@/pages/HolidayDetailsPage";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<App />} />
			<Route path="/holiday-details/:id" element={<HolidayDetailsPage />} />
		</Routes>
	</BrowserRouter>,
);
