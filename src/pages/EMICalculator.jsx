import { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emiResult, setEmiResult] = useState(null);

  function calculateEMI() {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseInt(loanTenure);

    if (!P || !r || !n || P <= 0 || r <= 0 || n <= 0) {
      alert("कृपया सर्व माहिती योग्यरित्या भरा.");
      return;
    }

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setEmiResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    });
  }

  function reset() {
    setLoanAmount("");
    setInterestRate("");
    setLoanTenure("");
    setEmiResult(null);
  }

  const fields = [
    ["कर्जाची रक्कम (₹)", loanAmount, setLoanAmount, "उदा. 500000"],
    ["वार्षिक व्याजदर (%)", interestRate, setInterestRate, "उदा. 12"],
    ["कर्जाचा कालावधी (महिने)", loanTenure, setLoanTenure, "उदा. 60"],
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
        background:
          "linear-gradient(180deg, #f0f6ff 0%, #dbeafe 100%)",
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
            साधन
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
            }}
          >
            कर्ज EMI कॅल्क्युलेटर
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
            आपल्या कर्जाचा मासिक हप्ता (EMI) झटपट काढा
          </p>
        </div>

        {/* MAIN CARD RESPONSIVE */}
        <div
          style={{
            background: "linear-gradient(135deg, #0a2e5e, #1565c0)",
            borderRadius: 24,
            padding: "clamp(20px, 4vw, 50px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "center",
            boxShadow: "0 20px 60px rgba(10,46,94,0.25)",
          }}
        >

          {/* LEFT SIDE */}
          <div>
            <h3
              style={{
                fontFamily: "'Tiro Devanagari Marathi', serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "#fff",
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              कर्ज <span style={{ color: "#f5a623" }}>EMI</span> काढा<br />
              झटपट!
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              आपल्या कर्जाचा मासिक हप्ता किती असेल हे लगेच जाणून घ्या.
              रक्कम, व्याजदर व कालावधी टाका.
            </p>

            <p
              style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,0.5)",
                marginTop: 14,
              }}
            >
              * हे केवळ अंदाजे आकडे आहेत.
            </p>

            {/* RESULT */}
            {emiResult && (
              <div
                style={{
                  marginTop: 25,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {[
                  ["मासिक हप्ता (EMI)", emiResult.emi],
                  ["एकूण परतफेड", emiResult.totalPayment],
                  ["एकूण व्याज", emiResult.totalInterest],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      padding: "12px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {label}
                    </span>

                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 900,
                        color: "#f5a623",
                        fontFamily: "'Tiro Devanagari Marathi', serif",
                      }}
                    >
                      ₹ {val.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 18,
              padding: "clamp(18px, 3vw, 32px)",
            }}
          >
            {fields.map(([label, val, setter, ph]) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </label>

                <input
                  type="number"
                  value={val}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={ph}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.12)",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    borderRadius: 10,
                    color: "#fff",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={calculateEMI}
                style={{
                  flex: 1,
                  minWidth: 120,
                  padding: "14px",
                  background: "#f5a623",
                  color: "#0a2e5e",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                EMI काढा
              </button>

              <button
                onClick={reset}
                style={{
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                रीसेट
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}