import React, { useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95, description: 'React, Vue, Angular, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, level: 88, description: 'Figma, Adobe XD, Prototyping' },
    { name: 'Backend Development', icon: Database, level: 90, description: 'Node.js, Python, PostgreSQL' },
    { name: 'Mobile Development', icon: Smartphone, level: 85, description: 'React Native, Flutter' },
    { name: 'Cloud & DevOps', icon: Globe, level: 82, description: 'AWS, Docker, CI/CD' },
    { name: 'Performance Optimization', icon: Zap, level: 90, description: 'Core Web Vitals, SEO' }
  ];

  const achievements = [
    { icon: Award, title: '50+ Projects', description: 'Successfully delivered projects' },
    { icon: Users, title: '20+ Clients', description: 'Happy clients worldwide' },
    { icon: Code, title: '5+ Years', description: 'Professional experience' },
    { icon: Zap, title: '99% Uptime', description: 'Average project reliability' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with a keen eye for design and a love for creating 
            exceptional digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-dark rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Started my journey in web development 5+ years ago with a simple "Hello World" 
                  and haven't looked back since. What began as curiosity evolved into a passion 
                  for crafting digital solutions that solve real-world problems.
                </p>
                <p>
                  I specialize in building scalable web applications, intuitive user interfaces, 
                  and robust backend systems. My approach combines technical expertise with 
                  creative problem-solving to deliver products that users love.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                    <achievement.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-slate-800">{achievement.title}</div>
                    <div className="text-sm text-slate-600">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass-dark rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-slate-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                    <p className="text-sm text-slate-500">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'TypeScript', 
              'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
              'GraphQL', 'Redux', 'Tailwind CSS', 'Figma'
            ].map((tech, index) => (
              <div 
                key={index}
                className="glass rounded-full px-4 py-2 text-slate-700 font-medium hover:scale-105 transition-transform duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;