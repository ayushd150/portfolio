import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sun,
  Moon,
  ExternalLink,
  Code,
  Coffee,
  Sparkles,
} from "lucide-react";

const MinimalistHero = () => {
  const [isDark, setIsDark] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const roles = ["Full-Stack Developer", "UI/UX Designer", "React Specialist", "Problem Solver"];
  const email = "ayushdas@example.com";

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

  const handleEmailClick = () => {
    const subject = "Let's Connect!";
    const body = "Hi Ayush,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20' 
              : 'bg-gray-900/10 hover:bg-gray-900/20 backdrop-blur-lg border border-gray-900/20'
          }`}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid */}
        <div
          className={`absolute inset-0 ${
            isDark ? 'opacity-10' : 'opacity-20'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)'} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 animate-bounce opacity-30" style={{ animationDuration: '3s' }}>
          <Code className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
        </div>
        <div className="absolute top-32 right-32 animate-bounce opacity-30" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          <Coffee className={isDark ? 'text-amber-400' : 'text-amber-600'} size={20} />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce opacity-30" style={{ animationDuration: '3s', animationDelay: '2s' }}>
          <Sparkles className={isDark ? 'text-pink-400' : 'text-pink-600'} size={22} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center max-w-4xl mx-auto">
        
        {/* Status Badge */}
        <div className="mb-8 opacity-0 animate-fadeInUp">
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-green-500/20 border border-green-400/30 text-green-300' 
              : 'bg-green-500/10 border border-green-400/20 text-green-700'
          }`}>
            <div className="relative mr-3">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-green-400' : 'bg-green-600'
              }`} />
            </div>
            Available for new opportunities
          </div>
        </div>

        {/* Main Heading */}
        <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              gm, I'm
            </span>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-blue-400 via-purple-400 to-cyan-400' 
                : 'from-blue-600 via-purple-600 to-cyan-600'
            }`}>
              Ayush Das
            </span>
          </h1>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          } italic`}>
            — developer
          </p>
        </div>

        {/* Description */}
        <div className="opacity-0 animate-fadeInUp mt-12 max-w-2xl" style={{ animationDelay: '0.4s' }}>
          <p className={`text-lg md:text-xl leading-relaxed mb-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm a <span className="font-semibold">full-stack developer</span> with experience working with various{' '}
            <span className="font-semibold">languages, protocols, and blockchains.</span>
          </p>
          <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I've won <span className="font-semibold">~20 hackathons</span> and enjoy{' '}
            <span className="font-semibold">contributing</span> to open source projects.
          </p>
          <p className={`text-base md:text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Think of this as my brain dump as I try to make sense of the world.
          </p>
        </div>

        {/* Typewriter Effect */}
        <div className="opacity-0 animate-fadeInUp mt-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-2">
            <span className={`text-xl md:text-2xl font-medium ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {typedText}
            </span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="opacity-0 animate-fadeInUp mt-12 flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => scrollToSection("projects")}
            className={`px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            View My Work
          </button>
          
          <a
            href="/resume.pdf"
            download="Ayush_Das_Resume.pdf"
            className={`px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2 ${
              isDark 
                ? 'border-white/40 hover:bg-white hover:text-black' 
                : 'border-gray-900/40 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="opacity-0 animate-fadeInUp mt-12" style={{ animationDelay: '1s' }}>
          <div className="flex gap-4 justify-center">
            {[
              { 
                icon: Github, 
                href: "https://github.com/ayushd150",
                label: "GitHub"
              },
              { 
                icon: Linkedin, 
                href: "https://linkedin.com/in/ayushd150",
                label: "LinkedIn"
              }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                }`}
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
            
            <button
              onClick={handleEmailClick}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
              }`}
              title="Email me"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>

        {/* Get in Touch Link */}
        <div className="opacity-0 animate-fadeInUp mt-16" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={handleEmailClick}
            className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Press{' '}
            <kbd className={`px-2 py-1 rounded text-xs ${
              isDark ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
            }`}>
              ⌘K
            </kbd>{' '}
            to{' '}
            <span className="underline decoration-dotted underline-offset-4">
              get in touch
            </span>
            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="opacity-0 animate-fadeInUp absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '1.4s' }}>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Ayush Das. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MinimalistHero;