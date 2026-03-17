import type { Image } from "./image";

export type HolidayOverview = {
	id: number;
	title: string;
	sortName: string;
	startDate: string;
	endDate: string;
	coverImages: Image[];
};

export type Activity = {
	id: number;
	order: number;
	description: string;
	completed: boolean;
};

export type Day = {
	id: number;
	date: string;
	activities: Activity[];
};

export type HolidayDetails = {
	id: number;
	name: string;
	sortName: string;
	days: Day[];
};
