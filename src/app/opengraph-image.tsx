import { ImageResponse } from "next/og";

// Social share card (1200×630). Also used as the Twitter image fallback.
// Mirrors the site's editorial dark theme: paper #0F0F12, ink, accent #6E83FF.
export const alt = "Kobe Michael — Software Engineer & Designer";
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
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F0F12",
          backgroundImage:
            "radial-gradient(rgba(236,236,239,0.10) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#A1A2A8",
          }}
        >
          <span>Portfolio — 2026</span>
          <span>Vancouver, BC</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 168,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#ECECEF",
            }}
          >
            Kobe
          </div>
          <div
            style={{
              fontSize: 168,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#ECECEF",
            }}
          >
            Michael
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: 4,
              width: "100%",
              backgroundColor: "#6E83FF",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6E83FF",
            }}
          >
            Software Engineer · Designer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
