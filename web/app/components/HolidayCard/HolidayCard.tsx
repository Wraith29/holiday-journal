import "./HolidayCard.css";
import { formatDate } from "date-fns";
import type { ReactNode } from "react";
import { Link } from "react-router";
import type { HolidayOverview } from "@/types/holiday";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const DATE_FMT = "do 'of' MMMM yyyy";

type Props = {
	holiday: HolidayOverview;
};

export default function HolidayCard({ holiday }: Props): ReactNode {
	const start = formatDate(holiday.startDate, DATE_FMT);
	const end = formatDate(holiday.endDate, DATE_FMT);

	const dateRange = `${start} - ${end}`;

	return (
		<div id={`holiday-card-${holiday.sortName}`} className="holiday-card">
			<div className="left">
				<div className="top">
					<p className="holiday-name">{holiday.title}</p>
					<p className="date-range">{dateRange}</p>
				</div>

				<div className="bottom">
					<Link className="details-link" to={`/${holiday.sortName}`}>
						View Details
					</Link>
				</div>
			</div>

			<div className="right">
				<ImageCarousel images={holiday.coverImages} />
			</div>
		</div>
	);
}
