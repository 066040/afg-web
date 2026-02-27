import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
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
                    padding: "64px",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: -200,
                        background:
                            "radial-gradient(circle at 25% 45%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 75% 55%, rgba(168,85,247,0.30), transparent 55%)",
                        opacity: 1,
                    }}
                />

                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ fontSize: 22, opacity: 0.85, letterSpacing: 2 }}>AFG</div>
                    <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
                        Ahmet Furkan Göktaş
                    </div>
                    <div style={{ fontSize: 30, opacity: 0.85 }}>Computer Engineer</div>
                    <div style={{ marginTop: 16, fontSize: 20, opacity: 0.75 }}>
                        Flutter • Next.js • Backend Systems
                    </div>
                </div>
            </div>
        ),
        size
    );
}