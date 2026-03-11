import "./HolidayCard.css";
import { formatDate } from "date-fns";
import type { ReactNode } from "react";
import type { HolidayOverview } from "@/types/holiday";
import ImageCarousel from "./ImageCarousel";

const DATE_FORMAT = "iii, do 'of' LLL yyyy";

type CardProps = {
	details: HolidayOverview;
};

export default function HolidayCard({ details }: CardProps): ReactNode {
	return (
		<div className="card">
			<div className="header-container">
				<p className="header">{details.name}</p>
				<p className="date-range">
					{formatDate(details.startDate, DATE_FORMAT)} -{" "}
					{formatDate(details.endDate, DATE_FORMAT)}
				</p>
			</div>

			<div className="card-body">
				<ImageCarousel images={details.coverImages} />
			</div>
		</div>
	);
}
