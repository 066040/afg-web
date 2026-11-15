"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
  IGNITION — the AFG intro.
  An instrument cluster wakes up: boot log, then the needle self-test —
  sweep to the stop and back to zero, like a real car on ignition. Then the name.
  Plays once per browser session. Any key / click on "Skip" ends it.
*/

const MAX = 240;
const CX = 200;
const CY = 200;
const R = 158;
const START = 135; // degrees, SVG coords (clockwise from +x)
const SWEEP = 270;

const BOOT = [
  ["AFG-ECU", "rev 1.0"],
  ["CAN0 500 kbit/s", "OK"],
  ["GPS fix", "3D"],
  ["SENSORS", "OK"],
  ["IGNITION", "ON"],
];

const ease = {
  inOut: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t: number) => 1 - Math.pow(1 - t, 3),
};

const angleOf = (v: number) => START + (v / MAX) * SWEEP;
const pt = (a: number, r: number) => {
  const rad = (a * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
};

function arcPath(v0: number, v1: number, r: number) {
  const [x0, y0] = pt(angleOf(v0), r);
  const [x1, y1] = pt(angleOf(v1), r);
  const large = ((v1 - v0) / MAX) * SWEEP > 180 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
}

type Phase = "boot" | "sweep" | "name" | "exit" | "done";

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [value, setValue] = useState(0);
  const [lines, setLines] = useState(0);
  const [sub, setSub] = useState("COMPUTER ENGINEER · ANKARA");
  const timers = useRef<number[]>([]);
  const raf = useRef<number>(0);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    cancelAnimationFrame(raf.current);
    try {
      sessionStorage.setItem("afg-intro", "1");
    } catch {}
    document.documentElement.classList.add("site-on");
    document.documentElement.classList.remove("intro-lock");
    setPhase("exit");
    timers.current = [window.setTimeout(() => setPhase("done"), 900)];
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    let seen = false;
    try {
      seen = sessionStorage.getItem("afg-intro") === "1";
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      html.classList.add("site-on");
      const id = window.setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(id);
    }
    html.classList.add("intro-lock");

    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));

    if (window.location.pathname.startsWith("/tr")) at(0, () => setSub("BİLGİSAYAR MÜHENDİSİ · ANKARA"));
    BOOT.forEach((_, i) => at(120 + i * 110, () => setLines(i + 1)));

    at(700, () => {
      setPhase("sweep");
      const t0 = performance.now();
      const UP = 950;
      const DOWN = 750;
      const tick = (now: number) => {
        const t = now - t0;
        if (t < UP) setValue(MAX * ease.inOut(t / UP));
        else if (t < UP + DOWN) setValue(MAX - MAX * ease.inOut((t - UP) / DOWN));
        else {
          setValue(0);
          return;
        }
        raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    });
    at(2500, () => setPhase("name"));
    at(3800, finish);

    const onKey = () => finish();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      timers.current.forEach(clearTimeout);
      cancelAnimationFrame(raf.current);
    };
  }, [finish]);

  if (phase === "done") return null;

  const shown = Math.round(value);
  const digits = String(shown).padStart(3, "0").split("");
  const showName = phase === "name" || phase === "exit";

  const ticks = [];
  for (let v = 0; v <= MAX; v += 5) {
    const major = v % 20 === 0;
    const mid = v % 10 === 0;
    const a = angleOf(v);
    const [x0, y0] = pt(a, R);
    const [x1, y1] = pt(a, R - (major ? 18 : mid ? 10 : 6));
    const lit = v <= value + 0.01 && value > 0;
    ticks.push(
      <line
        key={v}
        x1={x0}
        y1={y0}
        x2={x1}
        y2={y1}
        stroke={lit ? "var(--signal)" : "#3a3f46"}
        strokeWidth={major ? 2.4 : 1.2}
        strokeLinecap="round"
        style={{ transition: "stroke .12s" }}
      />,
    );
    if (v % 40 === 0) {
      const [lx, ly] = pt(a, R - 36);
      ticks.push(
        <text
          key={`l${v}`}
          x={lx}
          y={ly}
          fill={lit ? "var(--ink)" : "#4a4f57"}
          fontSize="13"
          textAnchor="middle"
          dominantBaseline="middle"
          className="mono"
          style={{ transition: "fill .12s" }}
        >
          {v}
        </text>,
      );
    }
  }

  return (
    <div
      id="afg-intro"
      aria-hidden="true"
      onClick={finish}
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col overflow-hidden bg-[#07080a] text-ink"
      style={{
        transform: phase === "exit" ? "translateY(-100%)" : "none",
        transition: "transform .85s cubic-bezier(.76,0,.24,1)",
      }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      {/* boot log */}
      <div className="mono absolute left-5 top-5 z-10 space-y-1 text-[11px] text-ink-3 md:left-8 md:top-8 md:text-xs">
        {BOOT.slice(0, lines).map(([k, v]) => (
          <div key={k} className="flex w-56 justify-between gap-3 md:w-64">
            <span>{k}</span>
            <span className="flex-1 overflow-hidden whitespace-nowrap text-[#2c3036]">
              ..............................................
            </span>
            <span className={v === "ON" ? "text-signal" : "text-ok"}>{v}</span>
          </div>
        ))}
      </div>

      <div className="mono absolute right-5 top-5 z-10 hidden text-right sm:block text-[11px] text-ink-3 md:right-8 md:top-8 md:text-xs">
        <div>ANKARA · TR</div>
        <div>39.93°N 32.86°E</div>
      </div>

      {/* gauge */}
      <div className="relative z-10 m-auto flex flex-col items-center">
        <div
          className="relative w-[min(78vw,420px)]"
          style={{
            opacity: showName ? 0 : 1,
            transform: showName ? "scale(.92)" : "none",
            transition: "opacity .4s ease, transform .6s ease",
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full">
            <path d={arcPath(0, MAX, R + 10)} stroke="#1c1f24" strokeWidth="2" fill="none" />
            <path
              d={arcPath(200, MAX, R + 10)}
              stroke="var(--signal)"
              strokeOpacity=".55"
              strokeWidth="2"
              fill="none"
            />
            {value > 0.5 && (
              <path
                d={arcPath(0, Math.max(0.6, value), R + 10)}
                stroke="var(--signal)"
                strokeWidth="2"
                fill="none"
              />
            )}
            {ticks}
            <g
              transform={`rotate(${angleOf(value)} ${CX} ${CY})`}
              style={{ filter: "drop-shadow(0 0 6px rgba(255,138,31,.6))" }}
            >
              <line x1={CX - 18} y1={CY} x2={CX + R - 14} y2={CY} stroke="var(--signal)" strokeWidth="3" strokeLinecap="round" />
            </g>
            <circle cx={CX} cy={CY} r="9" fill="#07080a" stroke="var(--signal)" strokeWidth="2" />
          </svg>

          {/* digital readout */}
          <div className="absolute inset-x-0 top-[58%] flex flex-col items-center">
            <div className="flex gap-1">
              {digits.map((d, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="mono text-5xl font-semibold tabular-nums text-ink md:text-6xl">{d}</span>
                </div>
              ))}
            </div>
            <span
              className="mono mt-1 text-[11px] tracking-[0.3em] text-ink-3"
            >
              KM/H
            </span>
          </div>
        </div>

        {/* name */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <div className="-my-[0.14em] overflow-hidden py-[0.14em]">
            <div
              className="wide text-center text-[clamp(28px,7.5vw,92px)] font-extrabold uppercase leading-[0.95]"
              style={{
                transform: showName ? "none" : "translateY(110%)",
                transition: "transform .8s .25s cubic-bezier(.2,.8,.2,1)",
              }}
            >
              Ahmet Furkan
            </div>
          </div>
          <div className="-my-[0.14em] overflow-hidden py-[0.14em]">
            <div
              className="wide text-center text-[clamp(28px,7.5vw,92px)] font-extrabold uppercase leading-[0.95]"
              style={{
                transform: showName ? "none" : "translateY(110%)",
                transition: "transform .8s .33s cubic-bezier(.2,.8,.2,1)",
              }}
            >
              Göktaş<span className="text-signal">.</span>
            </div>
          </div>
          <div
            className="mono mt-5 text-[11px] tracking-[0.35em] text-ink-2 md:text-xs"
            style={{ opacity: showName ? 1 : 0, transition: "opacity .6s .6s" }}
          >
            {sub}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        className="mono absolute bottom-5 right-5 z-10 rounded-full border border-line-2 px-4 py-2 text-[11px] tracking-[0.2em] text-ink-2 transition hover:border-signal hover:text-signal md:bottom-8 md:right-8"
      >
        SKIP ⏎
      </button>
      <div className="mono absolute bottom-6 left-5 z-10 text-[11px] text-ink-3 md:bottom-9 md:left-8">
        <span className="blink text-signal">●</span> IGNITION
      </div>
    </div>
  );
}
