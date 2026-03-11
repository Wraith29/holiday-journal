import "./App.css";
import type React from "react";
import HolidayCard from "./components/HolidayCard";
import type { HolidayOverview } from "./types/holiday";

export default function App(): React.ReactNode {
	const holidays: HolidayOverview[] = [
		{
			id: 1,
			name: "Japan 2025",
			startDate: "2025-02-18",
			endDate: "2025-03-07",
			coverImages: [
				{
					source: "http://localhost:8080/Japan_Pagoda.jpg",
					description: "Japanese Pagoda with Blossom",
				},
				{
					source: "http://localhost:8080/Japan_BigTemple.jpg",
					description: "Huge Japanese Temple",
				},
			],
		},
		{
			id: 2,
			name: "Paris & Belgium 2025",
			startDate: "2025-10-10",
			endDate: "2025-10-19",
			coverImages: [
				{
					source: "http://localhost:8080/Japan_Pagoda.jpg",
					description: "Fuckin eh",
				},
			],
		},
		{
			id: 3,
			name: "South Africa / Victoria Falls 2026",
			startDate: "2025-05-02",
			endDate: "2025-05-17",
			coverImages: [],
		},
	];

	return (
		<div id="app">
			<div className="body">
				<p className="page-title">Holiday Journal</p>
				<ul className="entry-list">
					{holidays.map((hol) => (
						<li className="entry" key={hol.id}>
							<HolidayCard details={hol} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
