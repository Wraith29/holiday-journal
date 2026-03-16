import type { Image } from "./image";

export type HolidayOverview = {
	id: number;
	title: string;
	sortName: string;
	startDate: string;
	endDate: string;
	coverImages: Image[];
};
