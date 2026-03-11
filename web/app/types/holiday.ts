import type { Image } from "./image";

export type HolidayOverview = {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	coverImages: Image[];
};
