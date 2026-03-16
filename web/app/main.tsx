import "./main.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "@/pages/Index";
import Holiday from "./pages/Holiday";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
	<div id="main">
		<BrowserRouter>
			<Routes>
				<Route index element={<Index />} />
				<Route path="/:sort-name" element={<Holiday />} />
			</Routes>
		</BrowserRouter>
	</div>,
);
