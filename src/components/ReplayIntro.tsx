"use client";

export default function ReplayIntro() {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          sessionStorage.removeItem("afg-intro");
        } catch {}
        window.scrollTo(0, 0);
        window.location.href = "/";
      }}
      className="mono text-[11px] tracking-[0.2em] text-ink-3 transition hover:text-signal"
    >
      ↻ REPLAY IGNITION
    </button>
  );
}
