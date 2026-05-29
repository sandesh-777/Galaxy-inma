import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StatsBar from "../components/StatsBar";

export default function Home() {
  const images = [
    "https://chandigarhmetro.com/wp-content/uploads/2020/02/how-to-create-perfect-image.jpg",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "प्राथमिक तपासणी सेवा",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      title: "ऑडिट व अनुपालन सेवा",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    },
    {
      title: "व्यवस्थापन सल्ला",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      title: "बँकिंग प्रशिक्षण कार्यक्रम",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      title: "एन.बी.एफ.सी. मार्गदर्शन",
      image:
        "https://zenkins.com/media/2026/05/IT-Service-Desk-Support-Companies-in-India-1024x576.jpg",
    },
    {
      title: "सहकारी संस्था सल्ला",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  const whyChoose = [
    {
      title: "१५+ वर्षांचा अनुभव",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      title: "राष्ट्रीय स्तरावरील सेवा",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      title: "तज्ञांची अनुभवी टीम",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "विश्वासार्ह कार्यपद्धती",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === current ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              filter: "brightness(40%)",
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 950 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(245,166,35,0.18)",
              border: "1px solid #f5a623",
              color: "#ffd54f",
              padding: "7px 18px",
              borderRadius: 30,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            ✦ सन २०१० पासून विश्वासू सेवा
          </div>

          <h1
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(28px, 5vw, 58px)",
              lineHeight: 1.3,
              marginBottom: 18,
              fontWeight: 700,
            }}
          >
            सहकारी बँका, पतसंस्था व एन.बी.एफ.सी. यांच्या{" "}
            <span style={{ color: "#f5a623" }}>
              यशाचा विश्वसनीय राजमार्ग!
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 720,
              margin: "0 auto 30px",
            }}
          >
            बँकिंग, वित्त व सहकार क्षेत्रातील अनुभवी तज्ञांची टीम – प्राथमिक
            तपासणी, प्रशिक्षण, ऑडिट, व्यवस्थापन सल्ला व संस्थात्मक विकासासाठी
            एकच विश्वसनीय ठिकाण.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/services"
              style={{
                background: "#f5a623",
                color: "#0a2e5e",
                padding: "13px 28px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              आमच्या सेवा पाहा →
            </Link>

            <Link
              to="/contact"
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.7)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              आज संपर्क करा
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 45,
            alignItems: "center",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="About"
            style={{
              width: "100%",
              borderRadius: 18,
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
          />

          <div>
            <h3
              style={{
                fontFamily: "'Tiro Devanagari Marathi', serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                color: "#0a2e5e",
                marginBottom: 18,
              }}
            >
              आमच्याबद्दल थोडक्यात
            </h3>

            <p
              style={{
                fontSize: 16,
                color: "#2c4a6e",
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              गॅलेक्सी इन्मा सिस्टीम्स अँड सर्व्हिसेस प्रा. लि. पुणे ही संस्था
              सन २०१० पासून सहकारी बँका, पतसंस्था, निधी व एन.बी.एफ.सी.
              संस्थांना राष्ट्रीय स्तरावर व्यावसायिक मार्गदर्शन व सेवा पुरवत
              आहे.
            </p>

            <Link
              to="/about"
              style={{
                display: "inline-block",
                background: "#1565c0",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              अधिक जाणून घ्या →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f7f9fc",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              color: "#0a2e5e",
              marginBottom: 16,
            }}
          >
            आमच्या प्रमुख सेवा
          </h3>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              color: "#5f7088",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            सहकारी संस्था, बँका व वित्तीय संस्थांसाठी आधुनिक व व्यावसायिक
            सेवा.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
              marginTop: 50,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      background: "#1565c0",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      marginBottom: 16,
                    }}
                  >
                    {index + 1}
                  </div>

                  <h4
                    style={{
                      fontSize: 20,
                      color: "#0a2e5e",
                      marginBottom: 12,
                    }}
                  >
                    {service.title}
                  </h4>

                  <p
                    style={{
                      color: "#5c6f87",
                      fontSize: 14.5,
                      lineHeight: 1.8,
                    }}
                  >
                    अनुभवी तज्ञांच्या मार्गदर्शनाखाली संस्थात्मक प्रगतीसाठी
                    प्रभावी व विश्वासार्ह सेवा.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "90px 20px",
          background: "#0a2e5e",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              marginBottom: 16,
            }}
          >
            आम्हालाच का निवडावे?
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 28,
              marginTop: 55,
            }}
          >
            {whyChoose.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: 24 }}>
                  <h4
                    style={{
                      color: "#0a2e5e",
                      fontSize: 20,
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      color: "#5c6f87",
                      fontSize: 14.5,
                      lineHeight: 1.7,
                    }}
                  >
                    संस्थांच्या प्रगतीसाठी विश्वासार्ह, अनुभवी व परिणामकारक
                    सेवा देण्याचा आमचा सातत्यपूर्ण प्रयत्न.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f5a623",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "'Tiro Devanagari Marathi', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "#0a2e5e",
              marginBottom: 20,
            }}
          >
            आपल्या संस्थेच्या प्रगतीसाठी आजच संपर्क करा
          </h3>

          <p
            style={{
              color: "#1f3554",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 30,
            }}
          >
            अनुभवी तज्ञांच्या मार्गदर्शनासह आपल्या संस्थेची वाढ अधिक प्रभावी
            बनवा.
          </p>

          <Link
            to="/contact"
            style={{
              background: "#0a2e5e",
              color: "#fff",
              padding: "14px 34px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              display: "inline-block",
            }}
          >
            संपर्क करा →
          </Link>
        </div>
      </section>
    </>
  );
}