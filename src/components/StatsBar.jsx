import { stats } from "../data/data";

export default function StatsBar() {
  return (
    <div
      style={{
        background: "#fff",
        boxShadow: "0 4px 24px rgba(10,46,94,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {stats.map(([num, label], index) => (
          <div
            key={label}
            style={{
              padding: "26px 18px",
              textAlign: "center",
              borderRight:
                index === stats.length - 1
                  ? "none"
                  : "1px solid #e8f0fe",
              borderBottom: "1px solid #e8f0fe",
            }}
          >
            {/* NUMBER */}
            <div
              style={{
                fontFamily: "'Tiro Devanagari Marathi', serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 900,
                color: "#1565c0",
                lineHeight: 1,
              }}
            >
              {num}
            </div>

            {/* LABEL */}
            <div
              style={{
                fontSize: 13,
                color: "#5a7fa8",
                marginTop: 6,
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}