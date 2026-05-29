export default function About() {
  const highlights = [
    ["🏦", "सहकारी बँकिंग", "संपूर्ण मार्गदर्शन"],
    ["📊", "आर्थिक नियोजन", "तज्ञ सल्ला"],
    ["🎓", "प्रशिक्षण वर्ग", "JAIIB / DBF"],
    ["✅", "गुणवत्ता चाचणी", "कर्मचारी विकास"],
  ];

  return (
    <section style={{ padding: "80px 20px", background: "#fff" }}>
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
            आमची ओळख
          </div>

          <h2
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "#0a2e5e",
              lineHeight: 1.3,
            }}
          >
            गॅलेक्सी इन्मा सिस्टीम्स अँड सर्व्हिसेस प्रा. लि. पुणे
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
            आजचा काळ आहे स्पर्धेचा आणि ही स्पर्धा आहे गुणवत्ता, उत्पादने,
            सेवा, ग्राहकांशी सुसंवाद व संबंध या सर्वच स्तरांवर!
          </p>
        </div>

        {/* MAIN GRID (RESPONSIVE) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* TEXT SECTION */}
          <div>
            <p
              style={{
                fontSize: 15.5,
                color: "#2c4a6e",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              सहकारी बँका व पतसंस्थांना{" "}
              <strong>प्राथमिक तपासणी अहवालाच्या</strong> आधारे त्यांनी कोणत्या
              क्षेत्रामध्ये गुणात्मक वाढ केली पाहिजे याबाबत मार्गदर्शन केले
              जाते. कंपनीच्या संचालकांनी{" "}
              <strong>महाराष्ट्र, कर्नाटक, गोवा, उत्तराखंड</strong> व{" "}
              <strong>ओडिसा</strong> राज्यातील सहकारी संस्थांना मार्गदर्शन
              केलेले आहे.
            </p>

            <p
              style={{
                fontSize: 15.5,
                color: "#2c4a6e",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              सहकारी क्षेत्रातील कर्मचाऱ्यांची गुणवत्ता वाढली पाहिजे यासाठी
              कंपनी व सहकारी संस्था यांच्या संयुक्त विद्यमाने{" "}
              <strong>JAIIB व DBF</strong> परीक्षांसाठी प्रशिक्षण वर्ग आयोजित
              केले जातात.
            </p>

            <p
              style={{
                fontSize: 15.5,
                color: "#2c4a6e",
                lineHeight: 1.9,
              }}
            >
              गॅलेक्सी इन्माकडे राष्ट्रीय स्तरावरील आणि सहकारी बँकिंग क्षेत्रात
              प्रदीर्घ अनुभव असलेले तज्ञ आहेत.
            </p>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
            }}
          >
            {highlights.map(([emoji, title, sub]) => (
              <div
                key={title}
                style={{
                  background: "#f0f6ff",
                  borderRadius: 16,
                  padding: 18,
                  border: "1.5px solid #e8f0fe",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 30, marginBottom: 8 }}>{emoji}</div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0a2e5e",
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 12, color: "#5a7fa8", marginTop: 4 }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICE AREAS */}
        <div
          style={{
            marginTop: 60,
            background: "#f0f6ff",
            borderRadius: 20,
            padding: "30px 20px",
            border: "1.5px solid #e8f0fe",
          }}
        >
          <h3
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: 22,
              color: "#0a2e5e",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            आमची सेवा क्षेत्रे
          </h3>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["महाराष्ट्र", "कर्नाटक", "गोवा", "उत्तराखंड", "ओडिसा"].map(
              (state) => (
                <span
                  key={state}
                  style={{
                    background: "#1565c0",
                    color: "#fff",
                    padding: "8px 16px",
                    borderRadius: 20,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {state}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}