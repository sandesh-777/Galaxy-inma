import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Institutions from "./pages/Institutions";
import EMICalculator from "./pages/EMICalculator";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <div style={{
        fontFamily: "'Noto Sans Devanagari', sans-serif",
        background: "#f0f6ff",
        color: "#0d1b2a",
        overflowX: "hidden"
      }}>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:ital@0;1&family=Noto+Sans+Devanagari:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />

        <TopBar />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/emi-calculator" element={<EMICalculator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
