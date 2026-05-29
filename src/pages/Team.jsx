import { team } from "../data/data";

export default function Team() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#fff",
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
            आमचे संचालक
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
              lineHeight: 1.3,
            }}
          >
            अनुभवी तज्ञांची टीम
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
            सहकार, बँकिंग व वित्त क्षेत्रातील दशकांचा अनुभव असलेले आमचे संचालक
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {team.map((t, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(10,46,94,0.08)",
                border: "1.5px solid #e8f0fe",
                transition: "0.2s ease",
              }}
            >
              {/* CARD HEADER */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0a2e5e, #1565c0)",
                  padding: "30px 18px 18px",
                  textAlign: "center",
                }}
              >
                {/* INITIAL */}
                <div
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: "50%",
                    background: "#f5a623",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    margin: "0 auto 12px",
                    border: "4px solid rgba(255,255,255,0.3)",
                    fontFamily: "'Tiro Devanagari Marathi', serif",
                    fontWeight: 700,
                    color: "#0a2e5e",
                  }}
                >
                  {t.initial}
                </div>

                {/* NAME */}
                <div
                  style={{
                    fontFamily: "'Tiro Devanagari Marathi', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {t.name}
                </div>

                {/* ROLE */}
                <div
                  style={{
                    fontSize: 12,
                    color: "#ffd54f",
                    fontWeight: 600,
                  }}
                >
                  {t.role}
                </div>
              </div>

              {/* BODY */}
              <div style={{ padding: "20px 18px" }}>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#2c4a6e",
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {t.desc}
                </p>

                <a
                  href={`tel:${t.phone.replace(/\s/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f0f6ff",
                    padding: "10px 12px",
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#1565c0",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
                >
                  📞 {t.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}