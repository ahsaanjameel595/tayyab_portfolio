"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
	{
		src: "/images/projects/linkedin-banner-coverpage.jpeg",
		alt: "LinkedIn banner case study cover",
		label: "Cover",
	},
	{
		src: "/images/projects/problem.jpeg",
		alt: "Problem: original banner",
		label: "Problem",
	},
	{
		src: "/images/projects/solution.jpeg",
		alt: "Solution: redesigned banner",
		label: "Solution",
	},
] as const;

const transitionDuration = 450;

export function StackedCaseStudy() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLeaving, setIsLeaving] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);
	const activeIndexRef = useRef(0);
	const isAnimatingRef = useRef(false);
	const transitionTimeoutRef = useRef<number | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updatePreference = () => setReducedMotion(mediaQuery.matches);

		updatePreference();
		mediaQuery.addEventListener("change", updatePreference);
		return () => mediaQuery.removeEventListener("change", updatePreference);
	}, []);

	useEffect(() => () => {
		if (transitionTimeoutRef.current !== null) window.clearTimeout(transitionTimeoutRef.current);
	}, []);

	const goTo = useCallback((nextIndex: number) => {
		if (isAnimatingRef.current || nextIndex === activeIndexRef.current) return;

		isAnimatingRef.current = true;
		setIsLeaving(true);
		transitionTimeoutRef.current = window.setTimeout(() => {
			activeIndexRef.current = nextIndex;
			setActiveIndex(nextIndex);
			setIsLeaving(false);
			isAnimatingRef.current = false;
		}, reducedMotion ? 0 : transitionDuration);
	}, [reducedMotion]);

	useEffect(() => {
		if (isPaused || reducedMotion) return;

		const interval = window.setInterval(() => {
			goTo((activeIndexRef.current + 1) % slides.length);
		}, 4000);

		return () => window.clearInterval(interval);
	}, [goTo, isPaused, reducedMotion]);

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		if (event.key === "ArrowRight") {
			event.preventDefault();
			goTo((activeIndex + 1) % slides.length);
		} else if (event.key === "ArrowLeft") {
			event.preventDefault();
			goTo((activeIndex + slides.length - 1) % slides.length);
		}
	}

	return (
		<section
			className="linkedin-case-study-stack mx-auto w-full max-w-[30rem]"
			aria-label="LinkedIn banner case study images"
			aria-roledescription="carousel"
			tabIndex={0}
			onKeyDown={handleKeyDown}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onTouchStart={() => setIsPaused(true)}
			onTouchEnd={() => setIsPaused(false)}
			onFocusCapture={() => setIsPaused(true)}
			onBlurCapture={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
			}}
		>
			<div className="linkedin-case-study-stage relative aspect-[4/5] w-full">
				{slides.map((slide, slideIndex) => {
					const layer = (slideIndex - activeIndex + slides.length) % slides.length;
					const isActive = layer === 0;
					const scale = layer === 1 ? 0.96 : layer === 2 ? 0.92 : 1;
					const offset = layer * 12;
					const rotation = layer === 1 ? 1 : layer === 2 ? -1.5 : 0;

					return (
						<div
							key={slide.src}
							className="linkedin-case-study-card"
							style={{
								zIndex: slides.length - layer,
								transform: isActive && isLeaving
									? "translate3d(-34px, -38px, 0) rotate(-4deg) scale(0.96)"
									: `translate3d(${offset}px, ${offset}px, 0) rotate(${rotation}deg) scale(${scale})`,
								opacity: isActive && isLeaving ? 0 : 1,
							}}
							aria-hidden={!isActive}
							inert={!isActive}
						>
							{isActive ? (
								<button
									type="button"
									className="linkedin-case-study-image-button"
									aria-label={`Show next case-study image. Current image: ${slide.label}`}
									onClick={() => goTo((activeIndex + 1) % slides.length)}
								>
									<Image src={slide.src} alt={slide.alt} fill sizes="(min-width: 512px) 480px, calc(100vw - 3rem)" preload={slideIndex === 0} className="object-contain" />
								</button>
							) : (
								<Image src={slide.src} alt={slide.alt} fill sizes="(min-width: 512px) 480px, calc(100vw - 3rem)" preload={slideIndex === 0} className="object-contain" />
							)}
						</div>
					);
				})}
			</div>

			<div className="mt-8 flex items-center justify-between gap-4">
				<button type="button" className="linkedin-case-study-arrow" aria-label="Previous case-study image" onClick={() => goTo((activeIndex + slides.length - 1) % slides.length)}>
					<span aria-hidden="true">←</span>
				</button>
				<div className="flex items-center gap-3" role="group" aria-label="Choose case-study image">
					{slides.map((slide, slideIndex) => (
						<button
							key={slide.src}
							className="linkedin-case-study-dot"
							type="button"
							aria-label={`Show ${slide.label} image`}
							aria-pressed={activeIndex === slideIndex}
							onClick={() => goTo(slideIndex)}
						/>
					))}
				</div>
				<button type="button" className="linkedin-case-study-arrow" aria-label="Next case-study image" onClick={() => goTo((activeIndex + 1) % slides.length)}>
					<span aria-hidden="true">→</span>
				</button>
			</div>
			<p className="sr-only" aria-live="polite">{slides[activeIndex].label} image</p>
		</section>
	);
}