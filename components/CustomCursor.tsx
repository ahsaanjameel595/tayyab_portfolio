"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canUse = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUse) return;
    let frame = 0;
    let x = -50;
    let y = -50;
    let targetX = -50;
    let targetY = -50;
    const render = () => { x += (targetX - x) * 0.18; y += (targetY - y) * 0.18; document.documentElement.style.setProperty("--cursor-x", `${x}px`); document.documentElement.style.setProperty("--cursor-y", `${y}px`); frame = requestAnimationFrame(render); };
    const move = (event: PointerEvent) => { targetX = event.clientX; targetY = event.clientY; const target = (event.target as HTMLElement).closest("[data-cursor]"); setLabel(target?.getAttribute("data-cursor") ?? ""); setActive(Boolean(target)); };
    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); };
  }, []);

  return <div className={`custom-cursor ${active ? "is-active" : ""}`} aria-hidden="true"><span>{label}</span></div>;
}
