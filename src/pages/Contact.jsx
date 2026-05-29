import { useState } from "react";

const directors = [
  ["श्री. अशोक नाईक", "tel:+919860371475", "+91 9860 371475"],
  ["श्री. शिवहरी यादव", "tel:+917262975018", "+91 72629 75018"],
  ["श्री. श्रीकांत चौधरी", "tel:+917264003745", "+91 72640 03745"],
];

const serviceOptions = [
  "प्राथमिक तपासणी अहवाल",
  "JAIIB प्रशिक्षण",
  "DBF कोर्स",
  "ऑडिट व अनुपालन",
  "संस्था नोंदणी",
  "गुणवत्ता चाचणी",
  "इतर",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    institution: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function submitForm() {
    if (!formData.name || !formData.mobile) {
      alert("कृपया नाव व मोबाईल नंबर भरा.");
      return;
    }

    setFormSubmitted(true);
    setFormData({
      name: "",
      mobile: "",
      institution: "",
      service: "",
      message: "",
    });

    setTimeout(() => setFormSubmitted(false), 5000);
  }

  return (
    <section style={{ padding: "70px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
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
            संपर्क
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
              lineHeight: 1.3,
            }}
          >
            आजच संपर्क साधा
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
            आपल्या सहकारी संस्थेच्या विकासासाठी आमच्या तज्ञांशी बोला
          </p>
        </div>

        {/* MAIN GRID RESPONSIVE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >

          {/* LEFT SIDE */}
          <div>
            <h3
              style={{
                fontFamily: "'Tiro Devanagari Marathi', serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "#0a2e5e",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              आम्ही आपल्या सेवेत<br />सदैव तत्पर आहोत
            </h3>

            {/* INFO CARDS */}
            {[
              [
                "📍",
                "नोंदणीकृत पत्ता",
                "तिसरा मजला, झेनिथ कॉम्प्लेक्स, शिवाजीनगर, पुणे",
              ],
              [
                "🕐",
                "कार्यालयीन वेळ",
                "सोमवार ते शनिवार: सकाळी ९:०० ते सायं. ७:००",
              ],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: 14,
                  marginBottom: 18,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "#bbdefb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>

                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#0a2e5e",
                    }}
                  >
                    {title}
                  </strong>
                  <span style={{ fontSize: 13, color: "#5a7fa8" }}>
                    {text}
                  </span>
                </div>
              </div>
            ))}

            {/* DIRECTORS */}
            <div style={{ marginTop: 30 }}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0a2e5e",
                  marginBottom: 14,
                }}
              >
                संचालकांशी थेट संपर्क
              </h4>

              <div style={{ display: "grid", gap: 10 }}>
                {directors.map(([name, href, phone]) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "12px 14px",
                      borderRadius: 10,
                      background: "#f0f6ff",
                      border: "1px solid #e8f0fe",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#2c4a6e",
                      }}
                    >
                      {name}
                    </span>

                    <a
                      href={href}
                      style={{
                        fontSize: 13,
                        color: "#1565c0",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "28px 22px",
              boxShadow: "0 6px 30px rgba(10,46,94,0.1)",
              border: "1.5px solid #e8f0fe",
            }}
          >
            <h4
              style={{
                fontFamily: "'Tiro Devanagari Marathi', serif",
                fontSize: 22,
                color: "#0a2e5e",
                marginBottom: 20,
              }}
            >
              संदेश पाठवा
            </h4>

            {/* INPUTS */}
            {[
              ["आपले नाव", "name", "text", "पूर्ण नाव टाका"],
              ["मोबाईल नंबर", "mobile", "tel", "+91 XXXXX XXXXX"],
              [
                "संस्थेचे नाव",
                "institution",
                "text",
                "बँक / पतसंस्था / NBFC",
              ],
            ].map(([label, field, type, ph]) => (
              <div key={field} style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2c4a6e",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </label>

                <input
                  type={type}
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  placeholder={ph}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1.5px solid #d0dff4",
                    borderRadius: 10,
                    fontSize: 14,
                    background: "#f0f6ff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            {/* SERVICE */}
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#2c4a6e",
                  marginBottom: 6,
                }}
              >
                सेवा निवडा
              </label>

              <select
                value={formData.service}
                onChange={(e) =>
                  handleChange("service", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "11px 12px",
                  border: "1.5px solid #d0dff4",
                  borderRadius: 10,
                  fontSize: 14,
                  background: "#f0f6ff",
                  outline: "none",
                }}
              >
                <option value="">सेवा निवडा...</option>
                {serviceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#2c4a6e",
                  marginBottom: 6,
                }}
              >
                संदेश
              </label>

              <textarea
                value={formData.message}
                onChange={(e) =>
                  handleChange("message", e.target.value)
                }
                placeholder="आपली गरज किंवा प्रश्न लिहा..."
                style={{
                  width: "100%",
                  padding: "11px 12px",
                  border: "1.5px solid #d0dff4",
                  borderRadius: 10,
                  fontSize: 14,
                  background: "#f0f6ff",
                  minHeight: 90,
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={submitForm}
              style={{
                width: "100%",
                padding: 14,
                background:
                  "linear-gradient(135deg, #1565c0, #0a2e5e)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              संदेश पाठवा →
            </button>

            {/* SUCCESS */}
            {formSubmitted && (
              <div
                style={{
                  marginTop: 14,
                  background: "#e8f5e9",
                  border: "1px solid #a5d6a7",
                  borderRadius: 10,
                  padding: "12px 14px",
                  fontSize: 14,
                  color: "#2e7d32",
                  textAlign: "center",
                }}
              >
                ✅ धन्यवाद! आपला संदेश मिळाला.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}