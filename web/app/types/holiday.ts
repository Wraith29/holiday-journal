import type { Image } from "./image";

export type HolidayOverview = {
	id: number;
	title: string;
	sortName: string;
	startDate: string;
	endDate: string;
	coverImages: Image[];
};

export type HolidayDetails = {
	id: number;
	name: string;
	sortName: string;
	days: {
		id: number;
		date: string;
		activities: {
			id: number;
			order: number;
		}[];
	}[];
};
