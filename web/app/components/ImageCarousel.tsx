import "./ImageCarousel.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";
import type { Image } from "@/types/image";

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

	return (
		<div className="image-carousel">
			<div className="pictures">
				{images.length > 1 && (
					<button className="control-button" type="button" onClick={previous}>
						<ArrowBigLeft className="control-arrow" aria-label="Previous" />
					</button>
				)}

				<img
					className="cover-image"
					src={images[index]?.source}
					loading="lazy"
					alt={images[index]?.description}
				></img>

				{images.length > 1 && (
					<button className="control-button" type="button" onClick={next}>
						<ArrowBigRight className="control-arrow" />
					</button>
				)}
			</div>

			{images.length > 1 && (
				<div className="progress-bar">
					<p className="progress">
						[{index + 1}/{images.length}]
					</p>
				</div>
			)}
		</div>
	);
}
