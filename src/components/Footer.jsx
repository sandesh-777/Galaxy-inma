import { Link } from "react-router-dom";

const footerSections = [
  ["सेवा", [
    { label: "प्राथमिक तपासणी", to: "/services" },
    { label: "JAIIB प्रशिक्षण", to: "/services" },
    { label: "DBF कोर्स", to: "/services" },
    { label: "ऑडिट सेवा", to: "/services" },
    { label: "गुणवत्ता चाचणी", to: "/services" },
  ]],
  ["उपयुक्त दुवे", [
    { label: "आमच्याबद्दल", to: "/about" },
    { label: "संचालक माहिती", to: "/team" },
    { label: "नवीन संस्था", to: "/institutions" },
    { label: "EMI कॅल्क्युलेटर", to: "/emi-calculator" },
    { label: "संपर्क करा", to: "/contact" },
  ]],
  ["राज्ये", [
    { label: "महाराष्ट्र", to: "/" },
    { label: "कर्नाटक", to: "/" },
    { label: "गोवा", to: "/" },
    { label: "उत्तराखंड", to: "/" },
    { label: "ओडिसा", to: "/" },
  ]],
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a2e5e",
        color: "rgba(255,255,255,0.7)",
        paddingTop: 60,
        marginTop: 60,
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

        {/* TOP GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 30,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* BRAND */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  background:
                    "linear-gradient(135deg, #f5a623, #ffd54f)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#0a2e5e",
                }}
              >
                गॅ
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Tiro Devanagari Marathi', serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  गॅलेक्सी इन्मा
                </div>
                <div style={{ fontSize: 11, color: "#bbdefb" }}>
                  Pune
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                marginTop: 14,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              सहकारी बँका, पतसंस्था व एन.बी.एफ.सी. यांच्यासाठी राष्ट्रीय स्तरावरील व्यावसायिक मार्गदर्शन व सेवा.
            </p>
          </div>

          {/* LINKS */}
          {footerSections.map(([heading, items]) => (
            <div key={heading}>
              <h5
                style={{
                  color: "#ffd54f",
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 14,
                  letterSpacing: 1,
                }}
              >
                {heading}
              </h5>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map(({ label, to }) => (
                  <li key={label} style={{ marginBottom: 10 }}>
                    <Link
                      to={to}
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: 13.5,
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM FIXED BAR */}
        <div
          style={{
            marginTop: 20,
            padding: "18px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 12.5,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span>
            © २०२५ गॅलेक्सी इन्मा सिस्टीम्स अँड सर्व्हिसेस प्रा. लि. पुणे
          </span>
          <span>📍 शिवाजीनगर, पुणे ४११ ००५</span>
        </div>
      </div>
    </footer>
  );
}