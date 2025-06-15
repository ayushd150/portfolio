import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
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

  const scrollToSection = (href) => {
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
            ? 'py-2 shadow-2xl backdrop-blur-xl bg-slate-900/90 border-b border-slate-700/50' 
            : 'py-4 backdrop-blur-sm bg-slate-900/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-2xl px-6 py-4 transition-all duration-500 ${
            isScrolled 
              ? 'bg-slate-800/80 border border-slate-600/30 shadow-xl' 
              : 'bg-slate-800/60 border border-slate-600/40 shadow-2xl'
          } backdrop-blur-md flex justify-between items-center`}>
            
            {/* Logo */}
            <div
              className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-all duration-300 drop-shadow-lg"
              onClick={() => scrollToSection('#home')}
            >
              AJ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wider ${
                    activeSection === item.name.toLowerCase() 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 shadow-lg' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-700/50 hover:shadow-md'
                  }`}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 border-l border-slate-600/40 shadow-2xl transition-transform duration-300 ${
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
                    : 'text-slate-200 hover:text-white hover:bg-slate-700/50 hover:transform hover:translate-x-2 hover:shadow-md'
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

            <div className="mt-12 pt-8 border-t border-slate-600/40">
              <div className="flex space-x-4 items-center p-4 rounded-xl bg-slate-800/50 border border-slate-600/30">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">AD</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Ayush Das</p>
                  <p className="text-slate-300 text-sm font-medium">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default Navbar;