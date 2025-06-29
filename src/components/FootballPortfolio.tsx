'use client';

import React, { useState, useEffect } from 'react';
import { User, Trophy, Target, Award, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface Player {
  id: number;
  name: string;
  position: string;
  x: number;
  y: number;
  color: string;
  rating: number;
  description: string;
}

interface Coach {
  name: string;
  title: string;
  experience: string;
  achievements: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
}

interface Project {
  name: string;
  tech: string;
  status: string;
}

const FootballPortfolio: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // Your skills as players in 4-3-3 formation
  const players: Player[] = [
    // Forwards
    { id: 1, name: 'React', position: 'LW', x: 15, y: 20, color: '#61DAFB', rating: 95, description: 'Lightning-fast winger who creates dynamic user interfaces' },
    { id: 2, name: 'Next.js', position: 'ST', x: 50, y: 15, color: '#000000', rating: 92, description: 'Clinical striker delivering full-stack solutions' },
    { id: 3, name: 'TypeScript', position: 'RW', x: 85, y: 20, color: '#3178C6', rating: 88, description: 'Precise winger providing type safety and reliability' },
    
    // Midfield
    { id: 4, name: 'Node.js', position: 'LM', x: 20, y: 45, color: '#339933', rating: 90, description: 'Box-to-box midfielder handling server-side operations' },
    { id: 5, name: 'JavaScript', position: 'CM', x: 50, y: 50, color: '#F7DF1E', rating: 94, description: 'Playmaker orchestrating the entire field' },
    { id: 6, name: 'Python', position: 'RM', x: 80, y: 45, color: '#3776AB', rating: 87, description: 'Versatile midfielder excelling in data and automation' },
    
    // Defense
    { id: 7, name: 'MongoDB', position: 'LB', x: 15, y: 70, color: '#47A248', rating: 85, description: 'Solid left-back securing data storage' },
    { id: 8, name: 'PostgreSQL', position: 'CB', x: 35, y: 75, color: '#336791', rating: 89, description: 'Rock-solid center-back managing relational data' },
    { id: 9, name: 'AWS', position: 'CB', x: 65, y: 75, color: '#FF9900', rating: 86, description: 'Reliable center-back providing cloud infrastructure' },
    { id: 10, name: 'Docker', position: 'RB', x: 85, y: 70, color: '#2496ED', rating: 84, description: 'Consistent right-back containerizing applications' },
    
    // Goalkeeper
    { id: 11, name: 'Git', position: 'GK', x: 50, y: 90, color: '#F05032', rating: 91, description: 'Dependable keeper protecting code integrity' }
  ];

  // Coach (You)
  const coach: Coach = {
    name: 'Your Name',
    title: 'Full Stack Developer & Team Coach',
    experience: '5+ Years',
    achievements: ['Led 20+ successful projects', 'Mentored junior developers', 'Built scalable applications'],
    contact: {
      email: 'your.email@example.com',
      phone: '+1 (555) 123-4567',
      location: 'Your City, Country',
      github: 'yourgithub',
      linkedin: 'yourlinkedin'
    }
  };

  const projects: Project[] = [
    { name: 'E-Commerce Platform', tech: 'Next.js, Stripe, MongoDB', status: 'Champion' },
    { name: 'Real-time Chat App', tech: 'React, Socket.io, Node.js', status: 'Winner' },
    { name: 'Data Analytics Dashboard', tech: 'Python, D3.js, PostgreSQL', status: 'Runner-up' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white' 
        : 'bg-gradient-to-br from-green-400 via-green-300 to-green-200 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`relative z-10 p-6 backdrop-blur-sm ${
        isDark ? 'bg-black/20' : 'bg-white/20'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{coach.name}</h1>
              <p className={isDark ? 'text-green-200' : 'text-green-800'}>{coach.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-600" />}
            </button>
            <a href={`mailto:${coach.contact.email}`} className="hover:text-yellow-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={`https://github.com/${coach.contact.github}`} className="hover:text-yellow-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={`https://linkedin.com/in/${coach.contact.linkedin}`} className="hover:text-yellow-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Football Field */}
          <div className="lg:col-span-2">
            <div className={`rounded-lg p-6 relative overflow-hidden field-pattern ${
              isDark ? 'bg-green-600' : 'bg-green-500'
            }`} style={{ aspectRatio: '16/10' }}>
              {/* Field markings */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 inset-y-0 w-px bg-white transform -translate-x-1/2"></div>
                <div className="absolute left-1/2 top-1/2 w-20 h-20 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                {/* Goal areas */}
                <div className="absolute top-0 left-1/2 w-32 h-12 border-2 border-white transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-32 h-12 border-2 border-white transform -translate-x-1/2"></div>
              </div>

              {/* Players */}
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
                    isAnimated ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{
                    left: `${player.x}%`,
                    top: `${player.y}%`,
                    transitionDelay: `${index * 100}ms`
                  }}
                  onClick={() => setSelectedPlayer(player)}
                  onMouseEnter={() => setSelectedPlayer(player)}
                >
                  <div className="relative group">
                    <div 
                      className="w-12 h-12 rounded-full border-3 border-white flex items-center justify-center font-bold text-sm shadow-lg hover:scale-110 transition-transform"
                      style={{ backgroundColor: player.color }}
                    >
                      <span className={player.color === '#F7DF1E' || player.color === '#FF9900' ? 'text-black' : 'text-white'}>
                        {player.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap text-white">
                      {player.position}
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-white">
                      {player.rating}
                    </div>
                  </div>
                </div>
              ))}

              {/* Coach position */}
              <div className="absolute bottom-4 right-4">
                <div className={`flex items-center space-x-2 p-3 rounded-lg backdrop-blur-sm ${
                  isDark ? 'bg-black/60' : 'bg-white/60'
                }`}>
                  <User className="w-8 h-8 text-yellow-400" />
                  <div>
                    <div className="font-bold text-sm">HEAD COACH</div>
                    <div className={`text-xs ${isDark ? 'text-green-200' : 'text-green-800'}`}>
                      {coach.experience}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation Display */}
            <div className={`mt-4 p-4 rounded-lg backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <Target className="w-5 h-5 mr-2 text-yellow-400" />
                Formation: 4-3-3 (Technical Excellence)
              </h3>
              <p className={`text-sm ${isDark ? 'text-green-200' : 'text-green-800'}`}>
                A balanced formation showcasing full-stack capabilities with strong defensive foundations, 
                creative midfield orchestration, and dynamic frontend attacks.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Player Info */}
            <div className={`p-6 rounded-lg backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Player Stats
              </h3>
              {selectedPlayer ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg">{selectedPlayer.name}</h4>
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded font-bold">
                      {selectedPlayer.rating}
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className={`text-sm font-medium ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                      {selectedPlayer.position}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-green-200' : 'text-green-800'}`}>
                    {selectedPlayer.description}
                  </p>
                  <div className="mt-4">
                    <div className={`text-xs mb-1 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                      Skill Level
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}>
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${selectedPlayer.rating}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className={`text-sm ${isDark ? 'text-green-200' : 'text-green-800'}`}>
                  Hover over or click a player to see their stats and abilities.
                </p>
              )}
            </div>

            {/* Coach Achievements */}
            <div className={`p-6 rounded-lg backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                Coach Achievements
              </h3>
              <div className="space-y-3">
                {coach.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className={`text-sm ${isDark ? 'text-green-200' : 'text-green-800'}`}>
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className={`p-6 rounded-lg backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-yellow-400" />
                Championship Projects
              </h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-yellow-400 pl-3">
                    <div className="font-medium text-sm">{project.name}</div>
                    <div className={`text-xs ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                      {project.tech}
                    </div>
                    <div className="text-xs text-yellow-400 font-medium">{project.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className={`p-6 rounded-lg backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <h3 className="text-lg font-bold mb-4">Contact Coach</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span className={isDark ? 'text-green-200' : 'text-green-800'}>
                    {coach.contact.email}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className={isDark ? 'text-green-200' : 'text-green-800'}>
                    {coach.contact.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className={isDark ? 'text-green-200' : 'text-green-800'}>
                    {coach.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full animate-pulse ${
          isDark ? 'bg-yellow-400/5' : 'bg-yellow-400/10'
        }`}></div>
        <div 
          className={`absolute -bottom-4 -right-4 w-96 h-96 rounded-full animate-pulse ${
            isDark ? 'bg-green-400/5' : 'bg-green-400/10'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
    </div>
  );
};

export default FootballPortfolio;