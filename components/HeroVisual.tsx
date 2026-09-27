"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

type HeroVisualProps = { src: string; alt: string };

export function HeroVisual({ src, alt }: HeroVisualProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;

    let frameId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      image.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.04)`;
      frameId = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const bounds = frame.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
    };
    const reset = () => { targetX = 0; targetY = 0; };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", reset);
    frameId = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frameId); frame.removeEventListener("pointermove", onMove); frame.removeEventListener("pointerleave", reset); };
  }, []);

  return <div ref={frameRef} className="hero-image-frame hero-stagger relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface-muted p-3 shadow-[0_24px_60px_rgba(23,23,23,0.12)]" style={{ "--hero-delay": "280ms" } as CSSProperties}><div className="relative h-full w-full overflow-hidden rounded-md"><Image ref={imageRef} src={src} alt={alt} fill priority sizes="(min-width: 768px) 34vw, 100vw" className="hero-image object-cover" /></div><span className="hero-image-rule" aria-hidden="true" /></div>;
}
