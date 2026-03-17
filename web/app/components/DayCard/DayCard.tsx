import "./DayCard.css";
import { formatDate } from "date-fns";
import type { ReactNode } from "react";
import type { Day } from "@/types/holiday";

const DATE_FMT = "iii, do 'of' MMM yyyy";

type Props = {
	day: Day;
};

export default function DayCard({ day }: Props): ReactNode {
	const sortedActivities = day.activities.toSorted((a, b) => a.order - b.order);

	return (
		<div id={`day-${day.id}`} className="day">
			<p className="date">{formatDate(day.date, DATE_FMT)}</p>

			<div className="day-contents">
				<div className="activities">
					<p className="activities-title">Activities</p>

					<ol className="activity-list">
						{sortedActivities.map((act) => (
							<li key={act.id} className="activity">
								<input type="checkbox" checked={act.completed} />
								<p className="activity-description">{act.description}</p>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}
