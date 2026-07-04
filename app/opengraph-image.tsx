import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#16213e",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,131,107,0.35) 0%, rgba(242,131,107,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f2836b 46%, #f5efe6 54%)",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              color: "#f5efe6",
              letterSpacing: 6,
            }}
          >
            MOMENTOUS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 42,
            fontWeight: 600,
            color: "#f5efe6",
            textAlign: "center",
            maxWidth: 920,
          }}
        >
          Did you improve, or stay the same?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            color: "rgba(245,239,230,0.6)",
          }}
        >
          One honest question a day.
        </div>
      </div>
    ),
    { ...size }
  );
}
