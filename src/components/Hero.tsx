import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Play,
  Sparkles,
  Code,
  Zap,
  Copy,
  Check,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl' 
            : 'py-4 backdrop-blur-md bg-black/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-2xl px-6 py-4 transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/5 border border-white/10 shadow-xl' 
              : 'bg-white/5 border border-white/20 shadow-2xl'
          } backdrop-blur-lg flex justify-between items-center`}>
            
            {/* Logo */}
            <div
              className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-all duration-300 drop-shadow-lg"
              onClick={() => scrollToSection('#home')}
            >
              AJ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm uppercase tracking-wider ${
                    activeSection === item.name.toLowerCase() 
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-400/50 shadow-lg shadow-blue-500/25' 
                      : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 border-l border-white/20 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-28 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium text-lg ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 shadow-lg transform translate-x-2' 
                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:transform hover:translate-x-2 hover:shadow-md'
                }`}
                style={{ 
                  animation: isMobileMenuOpen ? `slideInRight 0.4s ease forwards` : 'none', 
                  animationDelay: `${index * 80}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const roles = ["Full-Stack Developer", "UI/UX Designer", "React Specialist", "Problem Solver"];
  const email = "ayushdas@example.com";

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentWordIndex];
    let index = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (!isDeleting && index < currentRole.length) {
        setTypedText(currentRole.substring(0, index + 1));
        index++;
        setTimeout(typeWriter, 120);
      } else if (!isDeleting && index === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2500);
      } else if (isDeleting && index > 0) {
        setTypedText(currentRole.substring(0, index - 1));
        index--;
        setTimeout(typeWriter, 60);
      } else if (isDeleting && index === 0) {
        setCurrentWordIndex((prev) => (prev + 1) % roles.length);
        isDeleting = false;
        setTimeout(typeWriter, 500);
      }
    };
    
    typeWriter();
  }, [currentWordIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = () => {
    const subject = "Let's Connect!";
    const body = "Hi Ayush,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open mail client
    window.location.href = mailtoLink;
    
    // Also copy email to clipboard as fallback
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Navbar */}
      <Navbar activeSection={activeSection} />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Interactive Gradient Overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.6) 0%, 
              rgba(59, 130, 246, 0.4) 20%, 
              rgba(236, 72, 153, 0.3) 40%, 
              rgba(16, 185, 129, 0.2) 60%,
              transparent 80%)`,
          }}
        />
        
        {/* Enhanced Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
        
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '4s' }} />
        
        {/* Enhanced Floating Icons */}
        <div className="absolute top-20 left-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Code className="text-blue-400 opacity-70 drop-shadow-lg" size={28} />
        </div>
        <div className="absolute top-32 right-32 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          <Zap className="text-yellow-400 opacity-70 drop-shadow-lg" size={24} />
        </div>
        <div className="absolute bottom-32 right-20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
          <Sparkles className="text-pink-400 opacity-70 drop-shadow-lg" size={26} />
        </div>
        <div className="absolute top-1/2 left-10 animate-bounce" style={{ animationDuration: '3s', animationDelay: '3s' }}>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl px-4 text-center text-white">
        {/* Enhanced Status Badge */}
        <div className="mb-8 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 px-8 py-4 rounded-full text-sm shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="relative mr-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
            </div>
            <Sparkles className="mr-2 text-emerald-300 group-hover:animate-spin" style={{ animationDuration: '2s' }} />
            <span className="font-semibold text-white">Available for new opportunities</span>
          </div>
        </div>

        {/* Enhanced Main Heading */}
        <div className="opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white/90 mb-2">Hi, I'm</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Ayush Das
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            </span>
          </h1>
        </div>

        {/* Enhanced Typewriter Effect */}
        <div className="opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
          <h2 className="text-3xl md:text-5xl mb-8 font-bold h-20 flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse ml-2 text-blue-400">|</span>
          </h2>
        </div>

        {/* Enhanced Description */}
        <div className="opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
          <p className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl leading-relaxed mb-12 font-light">
            I craft exceptional digital experiences through modern web development, 
            beautiful UI/UX design, and clean, maintainable code that transforms ideas into reality.
          </p>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}>
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 rounded-full flex items-center gap-4 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40 hover:scale-105 text-lg font-semibold relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Play size={22} className="group-hover:animate-pulse relative z-10" />
            <span className="relative z-10">View My Work</span>
          </button>
          
          <a
            href="/resume.pdf"
            download="Ayush_Das_Resume.pdf"
            className="group px-10 py-5 border-2 border-white/40 backdrop-blur-sm rounded-full flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:scale-105 text-lg font-semibold relative overflow-hidden"
          >
            <Download size={22} className="relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>

        {/* Enhanced Social Icons with Email Functionality */}
        <div className="mt-16 flex gap-6 justify-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}>
          {[
            { 
              icon: Github, 
              href: "https://github.com/ayushd150", 
              color: "hover:text-gray-300",
              bgColor: "hover:bg-gray-700/30"
            },
            { 
              icon: Linkedin, 
              href: "https://linkedin.com/in/ayushd150", 
              color: "hover:text-blue-400",
              bgColor: "hover:bg-blue-600/30"
            }
          ].map(({ icon: Icon, href, color, bgColor }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 ${bgColor} transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-xl ${color} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Icon size={28} className="relative z-10" />
            </a>
          ))}
          
          {/* Enhanced Email Button */}
          <button
            onClick={handleEmailClick}
            className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-green-600/30 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-xl hover:text-green-400 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            {emailCopied ? (
              <Check size={28} className="relative z-10 text-green-400" />
            ) : (
              <Mail size={28} className="relative z-10" />
            )}
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {emailCopied ? 'Email copied!' : 'Click to email me'}
            </div>
          </button>
        </div>

        {/* Enhanced Scroll Prompt */}
        <div className="mt-20 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1.2s forwards' }}>
          <button
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
          >
            <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors uppercase tracking-wider">
              Discover More
            </span>
            <div className="relative">
              <div className="p-3 rounded-full border-2 border-white/40 group-hover:border-white/80 transition-all duration-300 animate-bounce backdrop-blur-sm">
                <ChevronDown size={28} className="group-hover:animate-pulse text-white/80 group-hover:text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;