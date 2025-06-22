import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Companies from "./components/Companies";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";
import StarField from "./components/StarField";
import CvSection from "./components/CvSection";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <StarField />
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(139, 92, 246, 0.1) 35%, 
            rgba(15, 23, 42, 0.8) 100%)`,
        }}
      />

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <CvSection />
        <Companies />
        <Prototypes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
