"use client";

import type { CSSProperties, PointerEvent } from "react";

const glyphs = {
  S: ["011110", "110011", "110000", "110000", "011110", "000011", "000011", "110011", "011110"],
  u: ["000000", "000000", "110011", "110011", "110011", "110011", "110011", "110111", "011011"],
  n: ["000000", "000000", "110110", "111011", "110011", "110011", "110011", "110011", "110011"],
  i: ["0110", "0000", "1110", "0110", "0110", "0110", "0110", "0110", "1111"],
  l: ["1110", "0110", "0110", "0110", "0110", "0110", "0110", "0110", "1111"],
  h: ["110000", "110000", "110110", "111011", "110011", "110011", "110011", "110011", "110011"],
  a: ["000000", "000000", "011110", "000011", "011111", "110011", "110011", "110111", "011011"],
} as const;

let columns = 0;
const pixels = [..."Sunil Shah"].flatMap((letter) => {
  if (letter === " ") {
    columns += 6;
    return [];
  }

  const glyph = glyphs[letter as keyof typeof glyphs];
  const offset = columns;
  columns += glyph[0].length + 1;
  return glyph.flatMap((row, y) =>
    [...row].flatMap((filled, x) =>
      filled === "1"
        ? [[0, 0], [1, 0], [0, 1], [1, 1]].map(([dx, dy]) => ({
            x: (offset + x) * 2 + dx,
            y: y * 2 + dy,
          }))
        : [],
    ),
  );
});
const width = (columns - 1) * 2;

export default function PixelWordmark() {
  function scatter(event: PointerEvent<HTMLSpanElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const unit = bounds.width / width;
    const x = (event.clientX - bounds.left) / unit;
    const y = (event.clientY - bounds.top) / unit;

    Array.from(event.currentTarget.children).forEach((cell, index) => {
      const dx = pixels[index].x + 0.5 - x;
      const dy = pixels[index].y + 0.5 - y;
      const distance = Math.hypot(dx, dy);
      if (distance >= 4 || cell.getAnimations().length) return;

      const strength = (4 - distance) * unit * 0.5;
      cell.animate(
        [
          { transform: "none" },
          { transform: `translate(${dx * strength}px, ${dy * strength}px) scale(.72)`, offset: 0.24 },
          { transform: "none" },
        ],
        { duration: 540, easing: "ease-out" },
      );
    });
  }

  return (
    <h1 className="wordmark">
      <span className="sr-only">Sunil Shah</span>
      <span
        aria-hidden="true"
        className="wordmark-grid"
        style={{ "--columns": width } as CSSProperties}
        onPointerMove={scatter}
      >
        {pixels.map(({ x, y }) => (
          <span
            className="wordmark-pixel"
            key={`${x}-${y}`}
            style={{
              gridColumn: x + 1,
              gridRow: y + 1,
              animationDelay: `${180 + x * 3 + ((x * 17 + y * 13) % 90)}ms`,
            }}
          />
        ))}
      </span>
    </h1>
  );
}
