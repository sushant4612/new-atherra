import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#fbf9f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#201812",
            lineHeight: 1.05,
          }}
        >
          Clarity, before counsel.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#4a3f36",
            marginTop: 32,
          }}
        >
          Mahadik &amp; Company — Management Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
