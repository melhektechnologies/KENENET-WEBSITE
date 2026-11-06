import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Kenenét Consultancy — Transforming Workplaces.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/logo/kenenet-logo-720.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #FCFBF9 0%, #F5F2F7 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(127,50,147,0.20) 0%, rgba(127,50,147,0) 70%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={300} height={135} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1.02, letterSpacing: -2, color: "#1C1720", fontWeight: 700 }}>
            Transforming
          </div>
          <div style={{ display: "flex", fontSize: 96, lineHeight: 1.02, letterSpacing: -2, color: "#7F3293", fontWeight: 700 }}>
            Workplaces<span style={{ color: "#F9A21B" }}>.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#5C5563" }}>
            Organizational Excellence for Sustainable Change.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
