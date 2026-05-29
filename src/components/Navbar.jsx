import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "मुखपृष्ठ" },
  { to: "/about", label: "आमच्याबद्दल" },
  { to: "/services", label: "सेवा" },
  { to: "/team", label: "संचालक" },
  { to: "/institutions", label: "संस्था" },
];

function GalaxyInmaLogo({ height = 52 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 80"
      height={height}
      style={{ display: "block" }}
      aria-label="Galaxy Inma Logo"
    >
      <text
        x="10"
        y="38"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="36"
        fontWeight="400"
        fill="#1a3a7c"
        letterSpacing="1"
      >
        galaxy
      </text>

      <rect x="128" y="4" width="4" height="44" fill="#e81b2e" rx="2" />

      <rect x="36" y="6" width="18" height="3.5" fill="#2e9e4f" rx="1.5" />
      <rect x="94" y="6" width="18" height="3.5" fill="#2e9e4f" rx="1.5" />

      <text
        x="72"
        y="68"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="34"
        fontWeight="400"
        fill="#e81b2e"
        letterSpacing="1"
      >
        i
      </text>
      <text
        x="88"
        y="68"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="34"
        fontWeight="400"
        fill="#1a3a7c"
        letterSpacing="1"
      >
        nma
      </text>

      <line x1="72" y1="72" x2="234" y2="72" stroke="#1a3a7c" strokeWidth="1.2" />

      <text
        x="72"
        y="80"
        fontFamily="Arial, sans-serif"
        fontSize="7.5"
        fill="#444"
        letterSpacing="0.4"
      >
        Systems &amp; Services Pvt. Ltd., Pune
      </text>
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const BRAND_BLUE = "#1a3a7c";
  const BRAND_RED = "#e81b2e";
  const BRAND_GREEN = "#2e9e4f";

  return (
    <header
      style={{
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 200,
        borderBottom: `2px solid ${BRAND_BLUE}`,
        boxShadow: scrolled ? "0 4px 20px rgba(26,58,124,0.12)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${BRAND_RED} 50%, ${BRAND_GREEN} 50%)`,
        }}
      />

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <GalaxyInmaLogo height={52} />
        </Link>

        <ul
          style={{
            display: "flex",
            gap: 2,
            listStyle: "none",
            padding: 0,
            margin: 0,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    color: active ? BRAND_RED : BRAND_BLUE,
                    textDecoration: "none",
                    padding: "6px 13px",
                    borderRadius: 6,
                    fontSize: 13.5,
                    fontWeight: active ? 700 : 500,
                    background: active ? `rgba(232,27,46,0.07)` : "transparent",
                    borderBottom: active
                      ? `2.5px solid ${BRAND_RED}`
                      : "2.5px solid transparent",
                    transition: "all 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = BRAND_RED;
                      e.currentTarget.style.background = `rgba(232,27,46,0.05)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = BRAND_BLUE;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              to="/contact"
              style={{
                background: `linear-gradient(135deg, ${BRAND_RED}, #c0002a)`,
                color: "#ffffff",
                textDecoration: "none",
                padding: "10px 22px",
                borderRadius: 30,
                fontSize: 14,
                fontWeight: 700,
                boxShadow: `0 5px 16px rgba(232,27,46,0.35)`,
                transition: "all 0.3s ease",
                marginLeft: 10,
                display: "inline-block",
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 10px 24px rgba(232,27,46,0.45)`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND_GREEN}, #1e7a3a)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 5px 16px rgba(232,27,46,0.35)`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND_RED}, #c0002a)`;
              }}
            >
              संपर्क करा
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: `1.5px solid ${BRAND_BLUE}`,
            cursor: "pointer",
            padding: 7,
            borderRadius: 8,
            color: BRAND_BLUE,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: `1px solid rgba(26,58,124,0.12)`,
            padding: "10px 16px 18px",
          }}
        >
          {[...navLinks, { to: "/contact", label: "संपर्क करा" }].map(
            ({ to, label }) => {
              const active = location.pathname === to;
              const isContact = to === "/contact";
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    display: "block",
                    padding: "11px 16px",
                    color: isContact ? "#ffffff" : active ? BRAND_RED : BRAND_BLUE,
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: active || isContact ? 700 : 500,
                    borderRadius: 8,
                    background: isContact
                      ? `linear-gradient(135deg, ${BRAND_RED}, #c0002a)`
                      : active
                      ? `rgba(232,27,46,0.07)`
                      : "transparent",
                    marginBottom: 4,
                    borderLeft:
                      active && !isContact
                        ? `3px solid ${BRAND_GREEN}`
                        : "3px solid transparent",
                  }}
                >
                  {label}
                </Link>
              );
            }
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}