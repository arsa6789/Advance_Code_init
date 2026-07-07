// src/SpotifyPlayer.tsx
import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { LyricsContainer } from "./LyricsContainer";
import { LyricLine, SongMetadata } from "./types";
import Imag from "../public/images.jpg";

const TRACK_META: SongMetadata = {
  title: "LUZ ROJA",
  artist: "bxkq",
  coverUrl: Imag,
  durationMs: 109000,
};

const SAMPLE_LYRICS: LyricLine[] = [
  {
    text: "Luz roja, no pares",
    startMs: 80,
    endMs: 1950,
    words: [
      { text: "Luz", startMs: 80, endMs: 500 },
      { text: "roja,", startMs: 500, endMs: 1000 },
      { text: "no", startMs: 1000, endMs: 1400 },
      { text: "pares", startMs: 1400, endMs: 1950 },
    ],
  },
  {
    text: "Que el tiempo no sabe volver",
    startMs: 1950,
    endMs: 3810,
    words: [
      { text: "Que", startMs: 1950, endMs: 2200 },
      { text: "el", startMs: 2200, endMs: 2400 },
      { text: "tiempo", startMs: 2400, endMs: 2900 },
      { text: "no", startMs: 2900, endMs: 3200 },
      { text: "sabe", startMs: 3200, endMs: 3500 },
      { text: "volver", startMs: 3500, endMs: 3810 },
    ],
  },
  {
    text: "Tus labios mandan señales",
    startMs: 3810,
    endMs: 5830,
    words: [
      { text: "Tus", startMs: 3810, endMs: 4200 },
      { text: "labios", startMs: 4200, endMs: 4800 },
      { text: "mandan", startMs: 4800, endMs: 5300 },
      { text: "señales", startMs: 5300, endMs: 5830 },
    ],
  },
  {
    text: "Mi cuerpo no puede entender",
    startMs: 5830,
    endMs: 7610,
    words: [
      { text: "Mi", startMs: 5830, endMs: 6200 },
      { text: "cuerpo", startMs: 6200, endMs: 6700 },
      { text: "no", startMs: 6700, endMs: 7000 },
      { text: "puede", startMs: 7000, endMs: 7300 },
      { text: "entender", startMs: 7300, endMs: 7610 },
    ],
  },
  {
    text: "Luz roja y me arde",
    startMs: 7610,
    endMs: 9270,
    words: [
      { text: "Luz", startMs: 7610, endMs: 8000 },
      { text: "roja", startMs: 8000, endMs: 8400 },
      { text: "y", startMs: 8400, endMs: 8600 },
      { text: "me", startMs: 8600, endMs: 8900 },
      { text: "arde", startMs: 8900, endMs: 9270 },
    ],
  },
  {
    text: "Sin tocarme, sin prometer",
    startMs: 9270,
    endMs: 11490,
    words: [
      { text: "Sin", startMs: 9270, endMs: 9700 },
      { text: "tocarme,", startMs: 9700, endMs: 10400 },
      { text: "sin", startMs: 10400, endMs: 10800 },
      { text: "prometer", startMs: 10800, endMs: 11490 },
    ],
  },
  {
    text: "Bailando, somos rivales",
    startMs: 11490,
    endMs: 13590,
    words: [
      { text: "Bailando,", startMs: 11490, endMs: 12200 },
      { text: "somos", startMs: 12200, endMs: 12800 },
      { text: "rivales", startMs: 12800, endMs: 13590 },
    ],
  },
  {
    text: "Pero al final, ¿quién va a caer?",
    startMs: 13590,
    endMs: 16200,
    words: [
      { text: "Pero", startMs: 13590, endMs: 14000 },
      { text: "al", startMs: 14000, endMs: 14300 },
      { text: "final,", startMs: 14300, endMs: 14800 },
      { text: "¿quién", startMs: 14800, endMs: 15200 },
      { text: "va", startMs: 15200, endMs: 15500 },
      { text: "a", startMs: 15500, endMs: 15700 },
      { text: "caer?", startMs: 15700, endMs: 16200 },
    ],
  },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 16200, endMs: 18020 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 18020, endMs: 20030 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 20030, endMs: 21180 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 21180, endMs: 23750 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 23750, endMs: 25440 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 25440, endMs: 27500 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 27500, endMs: 28690 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 28692, endMs: 30920 },
  {
    text: "Tú juegas con mi gravedad",
    startMs: 30920,
    endMs: 32880,
    words: [
      { text: "Tú", startMs: 30920, endMs: 31200 },
      { text: "juegas", startMs: 31200, endMs: 31600 },
      { text: "con", startMs: 31600, endMs: 31900 },
      { text: "mi", startMs: 31900, endMs: 32200 },
      { text: "gravedad", startMs: 32200, endMs: 32880 },
    ],
  },
  {
    text: "Su voz me deja sin paz",
    startMs: 32880,
    endMs: 34750,
    words: [
      { text: "Su", startMs: 32880, endMs: 33100 },
      { text: "voz", startMs: 33100, endMs: 33500 },
      { text: "me", startMs: 33500, endMs: 33800 },
      { text: "deja", startMs: 33800, endMs: 34200 },
      { text: "sin", startMs: 34200, endMs: 34500 },
      { text: "paz", startMs: 34500, endMs: 34750 },
    ],
  },
  { text: "Y aunque el beat no quiere parar", startMs: 34750, endMs: 36220 },
  { text: "Mi mente ya se va detrás", startMs: 36220, endMs: 38510 },
  { text: "Tú juegas con mi gravedad", startMs: 38510, endMs: 40420 },
  { text: "Su voz me deja sin paz", startMs: 40420, endMs: 42390 },
  { text: "Y aunque el beat no quiere parar", startMs: 42390, endMs: 43870 },
  { text: "Mi mente ya se va detrás", startMs: 43870, endMs: 49450 },
  { text: "Suelta el miedo, no digas nada", startMs: 49450, endMs: 51340 },
  { text: "El sudor cuenta la verdad", startMs: 51340, endMs: 57110 },
  { text: "Si el deseo es quien manda", startMs: 57110, endMs: 59150 },
  { text: "No hay pecado en tropez-", startMs: 59150, endMs: 61800 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 61800, endMs: 63780 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 63780, endMs: 65760 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 65760, endMs: 66780 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 66780, endMs: 69540 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 69540, endMs: 71480 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 71480, endMs: 73220 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 73220, endMs: 74350 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 74350, endMs: 76160 },
  { text: "Luz roja, no pares", startMs: 76160, endMs: 77910 },
  { text: "Que el tiempo no sabe volver", startMs: 77910, endMs: 79950 },
  { text: "Tus labios mandan señales", startMs: 79950, endMs: 81950 },
  { text: "Mi cuerpo no puede entender", startMs: 81950, endMs: 83830 },
  { text: "Luz roja y me arde", startMs: 83830, endMs: 85380 },
  { text: "Sin tocarme, sin prometer", startMs: 85380, endMs: 87640 },
  { text: "Bailando, somos rivales", startMs: 87640, endMs: 89690 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 89690, endMs: 92420 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 92420, endMs: 94240 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 94240, endMs: 96280 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 96280, endMs: 97250 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 97250, endMs: 99930 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 99930, endMs: 101830 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 101830, endMs: 103780 },
  { text: "Eh-eh-eh-eh-eh-eh", startMs: 103780, endMs: 104950 },
  { text: "Pero al final, ¿quién va a caer?", startMs: 104950, endMs: 109000 },
];

export const SpotifyPlayer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentTimeMs = (frame / fps) * 1000;
  const progressPercent = Math.min(
    (currentTimeMs / TRACK_META.durationMs) * 100,
    100
  );

  const driftX1 = Math.sin(frame * 0.015) * 100;
  const driftY1 = Math.cos(frame * 0.01) * 80;
  const driftX2 = Math.cos(frame * 0.012) * 120;
  const driftY2 = Math.sin(frame * 0.018) * 90;

  return (
    <AbsoluteFill
      style={{
        background: "#080808",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "140%",
          height: "140%",
          top: "-20%",
          left: "-20%",
          filter: "blur(90px)",
          opacity: 0.45,
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #e61c34 0%, rgba(230,28,52,0) 70%)",
            transform: `translate(${200 + driftX1}px, ${150 + driftY1}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #791220 0%, rgba(121,18,32,0) 70%)",
            transform: `translate(${800 + driftX2}px, ${400 + driftY2}px)`,
            transition: "transform 0.1s linear",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 10, 10, 0.5)",
          backdropFilter: "blur(20px)",
          zIndex: 1,
        }}
      />

      <Audio src={staticFile("track.mp3")} />

      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          zIndex: 2,
        }}
      >
        <Img
          src={TRACK_META.coverUrl}
          alt="Cover"
          style={{
            width: "380px",
            height: "380px",
            borderRadius: "16px",
            boxShadow: "0 35px 60px rgba(0,0,0,0.8)",
          }}
        />
        <div>
          <h1
            style={{
              fontSize: "42px",
              color: "white",
              margin: "0 0 8px 0",
              fontFamily: "sans-serif",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            {TRACK_META.title}
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            {TRACK_META.artist}
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: "3px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progressPercent}%`,
              backgroundColor: "#e61c34",
              borderRadius: "3px",
              boxShadow: "0 0 10px #e61c34",
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: "60%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <LyricsContainer lyrics={SAMPLE_LYRICS} />
      </div>
    </AbsoluteFill>
  );
};