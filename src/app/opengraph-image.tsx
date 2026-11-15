import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ahmet Furkan Göktaş — Embedded & Automotive Software";

export default async function OpenGraphImage() {
  const dir = join(process.cwd(), "src/assets");
  const archivo = await readFile(join(dir, "archivo-900-tr.woff"));
  const grid =
    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0c0e",
          backgroundImage: grid,
          backgroundSize: "60px 60px",
          color: "#ece9e3",
          fontFamily: "Archivo",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6b7078", letterSpacing: 4 }}>
          <span style={{ color: "#ff8a1f" }}>AFG / 178</span>
          <span>ANKARA · TR</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 900, lineHeight: 0.92, letterSpacing: -2 }}>AHMET FURKAN</div>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 900, lineHeight: 0.92, letterSpacing: -2 }}>
            GÖKTAŞ<span style={{ color: "#ff8a1f" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a6ab" }}>
          <span>Embedded systems · Vehicle telemetry · Software</span>
          <span style={{ color: "#ece9e3" }}>afurkangoktas.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, weight: 900, style: "normal" },
      ],
    },
  );
}
