import { institutions } from "../data/data";

export default function Institutions() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#f0f6ff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 45 }}>
          <div
            style={{
              display: "inline-block",
              background: "#bbdefb",
              color: "#1565c0",
              padding: "4px 14px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            नवीन संस्था
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
              lineHeight: 1.3,
            }}
          >
            आमच्याद्वारे स्थापित / मार्गदर्शित संस्था
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "#5a7fa8",
              maxWidth: 600,
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            महाराष्ट्रभर नवीन सहकारी पतसंस्थांच्या स्थापनेत आमची सक्रिय भूमिका
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16,
          }}
        >
          {institutions.map((inst, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1.5px solid #e8f0fe",
                borderRadius: 14,
                padding: "16px 14px",
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                boxShadow: "0 2px 10px rgba(10,46,94,0.05)",
                transition: "0.2s ease",
              }}
            >
              {/* DOT */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#f5a623",
                  marginTop: 5,
                  flexShrink: 0,
                }}
              />

              {/* TEXT */}
              <span
                style={{
                  fontSize: 13.5,
                  color: "#2c4a6e",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {inst}
              </span>
            </div>
          ))}
        </div>

        {/* FOOTER BADGE */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <div
            style={{
              display: "inline-block",
              background: "#1565c0",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 20,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            एकूण {institutions.length} संस्था मार्गदर्शित
          </div>
        </div>
      </div>
    </section>
  );
}