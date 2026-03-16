import "./ImageCarousel.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type ReactNode, useState } from "react";
import type { Image } from "@/types/image";

type Props = {
	images: Image[];
};

export default function ImageCarousel({ images }: Props): ReactNode {
	const [current, setCurrent] = useState(0);

	function next(): void {
		if (current === images.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	}

	function previous(): void {
		if (current === 0) {
			setCurrent(images.length - 1);
		} else {
			setCurrent(current - 1);
		}
	}

	if (images.length === 0) {
		return <div className="image-carousel"></div>;
	}

	return images.length === 1 ? (
		<div className="image-carousel">
			<img
				className="carousel-image"
				src={images[current]?.source}
				alt={images[current]?.description}
			></img>
		</div>
	) : (
		<div className="image-carousel">
			<img
				className="carousel-image"
				src={images[current]?.source}
				alt={images[current]?.description}
			></img>

			<div className="carousel-controls">
				<button className="control" type="button" onClick={previous}>
					<ArrowLeft />
				</button>

				<p className="carousel-state">
					{current + 1}/{images.length}
				</p>

				<button className="control" type="button" onClick={next}>
					<ArrowRight />
				</button>
			</div>
		</div>
	);
}
