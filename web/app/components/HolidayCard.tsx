import "./HolidayCard.css";
import { formatDate } from "date-fns";
import type { ReactNode } from "react";
import { Link } from "react-router";
import type { HolidayOverview } from "@/types/holiday";
import ImageCarousel from "./ImageCarousel";

const DATE_FORMAT = "iii, do 'of' LLL yyyy";

type CardProps = {
	details: HolidayOverview;
};

export default function HolidayCard({ details }: CardProps): ReactNode {
	const dateRange = `${formatDate(details.startDate, DATE_FORMAT)} - ${formatDate(details.endDate, DATE_FORMAT)}`;

	return (
		<div className="card">
			<div className="card-body">
				<div className="left-column">
					<div>
						<p className="header">{details.name}</p>
						<p className="date-range">{dateRange}</p>
					</div>

					<Link className="details-link" to={`/holiday-details/${details.id}`}>
						View Details
					</Link>
				</div>

				<div className="right-column">
					{details.coverImages.length > 0 ? (
						<ImageCarousel images={details.coverImages} />
					) : (
						<p>No images added yet!</p>
					)}
				</div>
			</div>
		</div>
	);
}
