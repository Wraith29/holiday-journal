import "./Index.css";
import type { ReactNode } from "react";
import overviews from "@/../tmp/overviews.json";
import HolidayCard from "@/components/HolidayCard/HolidayCard";
import type { HolidayOverview } from "@/types/holiday";

export default function Index(): ReactNode {
	const holidays = overviews as HolidayOverview[];

	return (
		<div id="index-page">
			<p className="page-title">Holiday Journal</p>

			<ol className="holidays-list">
				{holidays.map((holiday) => (
					<li className="holiday-list-entry" key={holiday.id}>
						<HolidayCard holiday={holiday} />
					</li>
				))}
			</ol>
		</div>
	);
}
