"use client";

export default function ReplayIntro({ label, home }: { label: string; home: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          sessionStorage.removeItem("afg-intro");
        } catch {}
        window.location.href = home;
      }}
      className="mono text-[11px] tracking-[0.2em] text-ink-3 transition hover:text-signal"
    >
      {label}
    </button>
  );
}
