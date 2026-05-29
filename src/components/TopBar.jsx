export default function TopBar() {
  return (
    <div
      style={{
        background: "#f5a623",
        color: "#0a2e5e",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: "0.3px",
        padding: "8px 16px",
        textAlign: "center",
      }}
    >
      {/* WRAPPER */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "6px 14px",
          lineHeight: 1.6,
        }}
      >
        <span>📞 संपर्क: +91 72629 75018</span>

        <span style={{ opacity: 0.7 }}>|</span>

        <span>📍 शिवाजीनगर, पुणे ४११ ००५</span>

        <span style={{ opacity: 0.7 }}>|</span>

        <span>🕐 सोम–शनि: सकाळी ९ ते सायं. ७</span>
      </div>
    </div>
  );
}