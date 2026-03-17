import "./Holiday.css";
import { House, Pencil } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import DayList from "@/components/DayList/DayList";
import type { HolidayDetails } from "@/types/holiday";
import data from "../../tmp/japan-2025.json";

export default function Holiday(): ReactNode {
	const details = data as HolidayDetails;

	return (
		<div id={`holiday-${details.sortName}`} className="holiday-page">
			<div className="header">
				<Link to="/" className="header-button">
					<House />
				</Link>
				<Pencil className="header-button" />
				<p className="header-title">{details.name}</p>
			</div>

			<div className="body">
				<DayList days={details.days} />
			</div>
		</div>
	);
}
