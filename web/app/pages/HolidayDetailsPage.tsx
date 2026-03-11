import { useParams } from "react-router";

export default function HolidayDetailsPage() {
	const { id } = useParams();

	return <div>{id}</div>;
}
