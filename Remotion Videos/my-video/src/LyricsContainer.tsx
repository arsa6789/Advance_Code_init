// src/LyricsContainer.tsx
import React, { useEffect, useRef } from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { LyricLine } from "./types";

interface LyricsContainerProps {
  lyrics: LyricLine[];
}

export const LyricsContainer: React.FC<LyricsContainerProps> = ({ lyrics }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTimeMs = (frame / fps) * 1000;

  // 1. Find which line is active right now
  const activeIndex = lyrics.findIndex(
    (line) => currentTimeMs >= line.startMs && currentTimeMs <= line.endMs
  );

  // Fallback to the closest past line if we are in a silence gap between lines
  const currentLineIndex =
    activeIndex !== -1
      ? activeIndex
      : lyrics.findLastIndex((line) => currentTimeMs >= line.endMs);

  const safeIndex = Math.max(0, currentLineIndex);

  // 2. Smoothly animate the vertical scroll offset using a spring function
  const scrollSpring = spring({
    frame: frame,
    fps,
    config: {
      damping: 15,
      mass: 0.5,
      stiffness: 90,
    },
  });

  // Each line is roughly 70px tall (line-height + gaps)
  const lineHeight = 70;
  const targetScrollOffset = safeIndex * lineHeight;
  
  // Apply scroll offset with container centering treatment
  const transformY = `translateY(calc(30vh - ${targetScrollOffset}px))`;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "80%",
        overflow: "hidden",
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent 0%, white 25%, white 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 25%, white 75%, transparent 100%)",
      }}
    >
      <div
        style={{
          transform: transformY,
          transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {lyrics.map((line, index) => {
          const isActive = index === safeIndex;
          const isPast = index < safeIndex;

          return (
            <div
              key={index}
              style={{
                fontSize: isActive ? "42px" : "32px",
                lineHeight: "50px",
                fontWeight: isActive ? 800 : 600,
                color: isActive
                  ? "#ffffff"
                  : isPast
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(255, 255, 255, 0.4)",
                fontFamily: "sans-serif",
                transition: "all 0.2s ease-out",
                transform: isActive ? "scale(1.02)" : "scale(1)",
                transformOrigin: "left center",
                height: `${lineHeight - 20}px`, // matches structural mapping
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* If words array exists and it's active, use granular word highlight engine */}
              {line.words && isActive ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {line.words.map((word, wIdx) => {
                    const isWordActive =
                      currentTimeMs >= word.startMs &&
                      currentTimeMs <= word.endMs;
                    return (
                      <span
                        key={wIdx}
                        style={{
                          color: isWordActive ? "#e61c34" : "#ffffff",
                          transition: "color 0.1s ease",
                        }}
                      >
                        {word.text}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};