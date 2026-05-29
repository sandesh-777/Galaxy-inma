import { Link } from "react-router-dom";
import { services } from "../data/data";

export default function Services() {
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
            आमच्या सेवा
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
              lineHeight: 1.3,
            }}
          >
            सर्वसमावेशक आर्थिक सेवा
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
            सहकारी संस्थांच्या प्रत्येक गरजेसाठी तज्ञ सल्ला व व्यावसायिक मार्गदर्शन
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {services.map((s, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "28px 22px",
                boxShadow: "0 4px 20px rgba(10,46,94,0.07)",
                border: "1.5px solid #e8f0fe",
                transition: "0.2s ease",
              }}
            >
              {/* ICON */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #bbdefb, #e3f2fd)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  marginBottom: 16,
                }}
              >
                {s.icon}
              </div>

              {/* TITLE */}
              <h3
                style={{
                  fontFamily: "'Tiro Devanagari Marathi', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0a2e5e",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: 14,
                  color: "#5a7fa8",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {s.desc}
              </p>

              {/* LINK */}
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1565c0",
                  textDecoration: "none",
                }}
              >
                {s.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}