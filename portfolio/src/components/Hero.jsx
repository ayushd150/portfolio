import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Play,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)`,
        }}
      />
      {/* SVG Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating Colored Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
            <Sparkles className="mr-2 text-yellow-300 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hi, I'm <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Ayush Das</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white/80 mb-4">Full Stack Developer</h2>
        <p className="max-w-xl mx-auto text-white/70 text-lg">
          I craft exceptional digital experiences through modern web development, beautiful UI/UX, and clean code.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center gap-2 transition"
          >
            <Play size={18} />
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="px-6 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6 justify-center">
          <a href="https://github.com/ayushd150" target="_blank" className="hover:scale-110 transition">
            <Github />
          </a>
          <a href="https://linkedin.com/in/ayushd150" target="_blank" className="hover:scale-110 transition">
            <Linkedin />
          </a>
          <a href="mailto:ayush@example.com" className="hover:scale-110 transition">
            <Mail />
          </a>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-12 animate-bounce">
          <button onClick={() => scrollToSection("about")}>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
