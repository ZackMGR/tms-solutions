import { ImageResponse } from "next/og";

export const shareSize = { width: 1200, height: 630 };
export const shareContentType = "image/png";

export function shareCard({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  const titleSize = title.length > 48 ? 54 : title.length > 32 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10281f",
          color: "#f6f3ee",
          padding: "68px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 46 }}>
            <div style={{ width: 12, height: 24, background: "#e7d7b8", borderRadius: 3 }} />
            <div style={{ width: 12, height: 34, background: "#f6f3ee", borderRadius: 3 }} />
            <div style={{ width: 12, height: 46, background: "#e0b15a", borderRadius: 3 }} />
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: -0.6 }}>TMS Solutions</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#e0b15a", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>{eyebrow}</div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: titleSize,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: "#e7d7b8", fontSize: 26 }}>
          <div style={{ display: "flex", maxWidth: 760 }}>{detail}</div>
          <div style={{ display: "flex" }}>tms-solutions.nl</div>
        </div>
      </div>
    ),
    shareSize,
  );
}
