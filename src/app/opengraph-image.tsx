import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "72px",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Subtle glow */}
                <div
                    style={{
                        position: "absolute",
                        inset: -200,
                        background:
                            "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(168,85,247,0.30), transparent 55%)",
                        filter: "blur(0px)",
                        opacity: 1,
                    }}
                />

                {/* Noise-like overlay (very subtle) */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
                        opacity: 0.7,
                    }}
                />

                {/* Content */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ fontSize: 24, opacity: 0.85, letterSpacing: 2 }}>
                        AFG
                    </div>

                    <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
                        Ahmet Furkan Göktaş
                    </div>

                    <div style={{ fontSize: 34, opacity: 0.85 }}>
                        Computer Engineer
                    </div>

                    <div
                        style={{
                            marginTop: 18,
                            fontSize: 22,
                            opacity: 0.75,
                        }}
                    >
                        Flutter • Next.js • Backend Systems
                    </div>

                    {/* Bottom line */}
                    <div
                        style={{
                            marginTop: 44,
                            display: "flex",
                            gap: 10,
                            fontSize: 18,
                            opacity: 0.65,
                        }}
                    >
                        <span>afurkangoktas.com</span>
                        <span>•</span>
                        <span>Projects • Articles • Contact</span>
                    </div>
                </div>
            </div>
        ),
        size
    );
}