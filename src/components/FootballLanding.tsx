import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  Award, 
  ArrowRight, 
  Play,
  Star,
  Zap,
  Shield,
  Crosshair
} from 'lucide-react';

const FootballLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const stats = [
    { label: "Years Experience", value: "5+", icon: Trophy },
    { label: "Projects Completed", value: "20+", icon: Target },
    { label: "Technologies Mastered", value: "15+", icon: Star },
    { label: "Success Rate", value: "100%", icon: Award }
  ];

  const skills = [
    { name: "React", position: { x: 20, y: 30 } },
    { name: "Node.js", position: { x: 80, y: 25 } },
    { name: "TypeScript", position: { x: 15, y: 70 } },
    { name: "MongoDB", position: { x: 85, y: 65 } },
    { name: "Next.js", position: { x: 50, y: 20 } },
    { name: "Python", position: { x: 30, y: 50 } },
    { name: "AWS", position: { x: 70, y: 45 } }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(statInterval);
    };
  }, []);

  const handleEnterPortfolio = () => {
    // You can replace this with navigation to your main portfolio
    alert("Welcome to the main portfolio! (Replace this with your navigation logic)");
  };

  const scrollToSection = (section: string) => {
    // Placeholder for section navigation
    console.log(`Navigating to ${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Based on Mouse Position */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-60"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(34, 197, 94, 0.4) 0%, 
              rgba(22, 163, 74, 0.3) 30%, 
              rgba(21, 128, 61, 0.2) 60%,
              transparent 80%)`,
          }}
        />
        
        {/* Football Field Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'fieldMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Football Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="absolute animate-bounce"
              style={{
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className={`flex items-center space-x-3 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Portfolio FC</h1>
                <p className="text-green-200 text-sm">Full-Stack Formation</p>
              </div>
            </div>
            
            <div className={`flex space-x-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Skills
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Welcome Badge */}
            <div className={`mb-8 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 px-6 py-3 rounded-full text-sm shadow-2xl">
                <Shield className="mr-2 text-green-300" size={18} />
                <span className="font-semibold">Welcome to the Field</span>
              </div>
            </div>

            {/* Main Title */}
            <div className={`mb-6 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
                <span className="block text-white/90 mb-2">Meet Your</span>
                <span className="bg-gradient-to-r from-yellow-300 via-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Tech Coach
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-8 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl md:text-4xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Leading a championship team of technologies to build 
                <span className="font-bold text-yellow-300"> winning solutions</span>
              </h2>
            </div>

            {/* Interactive Stats */}
            <div className={`mb-12 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${
                        currentStat === index
                          ? 'bg-yellow-400/20 border-yellow-400/50 shadow-lg shadow-yellow-400/25'
                          : 'bg-white/10 border-white/20 hover:bg-white/20'
                      }`}
                    >
                      <Icon 
                        className={`mx-auto mb-3 ${currentStat === index ? 'text-yellow-300' : 'text-white/70'}`} 
                        size={32} 
                      />
                      <div className={`text-3xl font-bold mb-1 ${currentStat === index ? 'text-yellow-300' : 'text-white'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${currentStat === index ? 'text-yellow-200' : 'text-white/70'}`}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className={`mb-8 transform transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={handleEnterPortfolio}
                  className="group px-10 py-5 bg-gradient-to-r from-yellow-500 via-green-500 to-emerald-600 hover:from-yellow-600 hover:via-green-600 hover:to-emerald-700 rounded-full flex items-center gap-4 transition-all duration-300 shadow-2xl hover:shadow-green-500/40 hover:scale-105 text-lg font-bold text-black relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Play size={22} className="group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Enter the Field</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
                
                <button
                  onClick={() => scrollToSection('formation')}
                  className="group px-10 py-5 border-2 border-white/40 backdrop-blur-sm rounded-full flex items-center gap-4 hover:bg-white hover:text-green-900 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:scale-105 text-lg font-semibold"
                >
                  <Users size={22} className="group-hover:animate-bounce" />
                  <span>View Formation</span>
                </button>
              </div>
            </div>

            {/* Quick Preview */}
            <div className={`transform transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Explore my technical formation in a unique football-style layout, 
                featuring my skills as players in a winning 4-3-3 setup.
              </p>
            </div>
          </div>
        </main>

        {/* Footer Scroll Indicator */}
        <footer className="p-6">
          <div className={`text-center transform transition-all duration-1000 delay-1700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 text-white/60 text-sm">
              <Crosshair size={16} className="animate-spin" style={{ animationDuration: '3s' }} />
              <span>Ready to kick off?</span>
              <Zap size={16} className="text-yellow-400 animate-pulse" />
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fieldMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
};

export default FootballLanding;