import { ImageResponse } from "next/og";
import { promises as fs } from "fs";
import path from "path";

// Social share card (1200×630). Also used as the Twitter image fallback.
// Editorial dark theme mirroring the site: paper #0F0F12, ink #ECECEF,
// accent #6E83FF, set in the site's own type — Outfit + JetBrains Mono.
export const alt = "Kobe Michael — Software Engineer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = path.join(process.cwd(), "src", "app", "_og-fonts");
const font = (file: string) => fs.readFile(path.join(FONT_DIR, file));

const INK = "#ECECEF";
const INK_MUTE = "#6C6D74";
const ACCENT = "#6E83FF";

export default async function OpenGraphImage() {
  const [outfitSemiBold, outfitLight, jetbrainsMono] = await Promise.all([
    font("Outfit-SemiBold.ttf"),
    font("Outfit-Light.ttf"),
    font("JetBrainsMono-Medium.ttf"),
  ]);

  const mono = {
    fontFamily: "JetBrains Mono",
    textTransform: "uppercase" as const,
    letterSpacing: "0.26em",
  };

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
            "radial-gradient(rgba(236,236,239,0.07) 1.1px, transparent 1.1px)",
          backgroundSize: "28px 28px",
          padding: "70px 80px",
          fontFamily: "Outfit",
          color: INK,
        }}
      >
        {/* top meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 21,
            color: INK_MUTE,
            ...mono,
          }}
        >
          <span>Portfolio — 2026</span>
          <span>Vancouver, BC</span>
        </div>

        {/* name — the focal point */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Outfit SemiBold",
              fontSize: 178,
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
            }}
          >
            Kobe
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Outfit SemiBold",
              fontSize: 178,
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
            }}
          >
            Michael
          </div>
        </div>

        {/* role + accent marker */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ height: 3, width: 64, backgroundColor: ACCENT }} />
            <span style={{ fontSize: 23, color: ACCENT, ...mono }}>
              Software Engineer · Designer
            </span>
          </div>

          {/* baseline rule + signature */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(236,236,239,0.12)",
              paddingTop: 22,
              fontSize: 20,
              color: INK_MUTE,
              ...mono,
            }}
          >
            <span>Building user-focused web experiences</span>
            <span style={{ color: INK }}>kobemichael.dev</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: outfitLight, weight: 300, style: "normal" },
        {
          name: "Outfit SemiBold",
          data: outfitSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: jetbrainsMono,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
