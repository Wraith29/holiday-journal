import { formatDate } from "date-fns";
import type { ReactNode } from "react";
import overviews from "@/../tmp/overviews.json";
import type { HolidayOverview } from "@/types/holiday";

const DATE_FMT = "iiii, do 'of' MMM yyyy";

export default function Index(): ReactNode {
	const holidays = overviews as HolidayOverview[];

	return (
		<div id="index-page">
			{holidays.map((hol) => (
				<p key={hol.id}>{formatDate(hol.startDate, DATE_FMT)}</p>
			))}
		</div>
	);
}
