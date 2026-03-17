import "./DayList.css";
import type { ReactNode } from "react";
import DayCard from "@/components/DayCard/DayCard";
import type { Day } from "@/types/holiday";

type Props = {
	days: Day[];
};

export default function DayList({ days }: Props): ReactNode {
	const sortedDays = days.toSorted(
		(a, b) => Date.parse(a.date) - Date.parse(b.date),
	);

	return (
		<div className="days">
			<p className="days-title">Days</p>

			<ol className="day-list">
				{sortedDays.map((day) => (
					<li key={day.id}>
						<DayCard day={day} />
					</li>
				))}
			</ol>
		</div>
	);
}
