import "./Holiday.css";
import { House, Pencil } from "lucide-react";
import type { ReactNode } from "react";
import type { HolidayDetails } from "@/types/holiday";
import data from "../../tmp/japan-2025.json";

export default function Holiday(): ReactNode {
	const details = data as HolidayDetails;

	return (
		<div id={`holiday-${details.sortName}`}>
			<div className="header">
				<House className="header-button" />
				<Pencil className="header-button" />
				<p className="header-title">{details.name}</p>
			</div>

			<div className="body"></div>
		</div>
	);
}
