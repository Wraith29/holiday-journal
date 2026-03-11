import "./ImageCarousel.css";
import { useState } from "react";
import type { Image } from "@/types/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type CarouselProps = {
	images: Image[];
};

export default function ImageCarousel({ images }: CarouselProps) {
	const [index, setIndex] = useState(0);

	function next(): void {
		if (index >= images.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}

	function previous(): void {
		if (index <= 0) {
			setIndex(images.length - 1);
		} else {
			setIndex(index - 1);
		}
	}

	if (images.length === 0) {
		return (
			<div className="image-carousel">
				<p>No images added yet!</p>
			</div>
		);
	}

	return (
		<div className="carousel-container">
			{images.length > 1 ? (
				<>
					<img
						className="carousel-image"
						src={images[index]?.source}
						alt={images[index]?.description}
					/>

					<div className="progress-bar">
						<ArrowBigLeft
							id="left"
							className="carousel-control"
							onClick={previous}
						/>

						<p>
							{index + 1}/{images.length}
						</p>

						<ArrowBigRight
							id="right"
							className="carousel-control"
							onClick={next}
						/>
					</div>
				</>
			) : (
				<img className="carousel-image" src={images[0]?.source} alt="hello" />
			)}
		</div>
	);
}
