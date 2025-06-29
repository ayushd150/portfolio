'use client';

import { useContext } from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, RowsIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { FaXTwitter, FaFutbol } from 'react-icons/fa6';
import { IoPerson } from "react-icons/io5";
import { ThemeContext } from '../context/ThemeContext';

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/projects", label: "Projects", icon: <CodeIcon /> },
  { href: "/blogs", label: "Blog", icon: <RowsIcon /> },
  { href: "/about", label: "About", icon: <IoPerson /> },
];

const socialLinks = [
  { href: "#", label: "Resume", icon: <FileIcon /> },
  { href: "https://github.com/Fardeen26", label: "GitHub", icon: <GitHubLogoIcon /> },
  { href: "https://x.com/intent/follow?screen_name=fardeentwt", label: "X (Twitter)", icon: <FaXTwitter /> },
];

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Navbar must be used within a ThemeProvider');
  }

  const { isDark, toggleTheme } = themeContext;
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <nav className="w-full py-4 flex justify-center fixed top-0 z-50 bg-gradient-to-r from-green-700 via-green-900 to-green-700 shadow-lg shadow-green-900/30">
      <div className="rounded-full w-[900px] max-lg:w-[95vw] px-2 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 flex items-center justify-between shadow-lg">
        {/* Logo & Name */}
        <div className="flex items-center gap-3 pl-4">
          <FaFutbol className="text-football-yellow w-8 h-8 animate-bounce-slow" />
          <span className="font-football text-2xl tracking-widest text-football-yellow drop-shadow-lg select-none">
            My Football Portfolio
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} underline="none">
              <Tooltip content={link.label}>
                <div
                  className={`
                    relative group px-3 py-2 rounded-full transition-all duration-300
                    hover:scale-110 hover:rotate-3 hover:bg-football-yellow/20
                    ${pathname === link.href ? 'bg-football-yellow/30 shadow-md' : ''}
                  `}
                >
                  <span className={`text-xl ${pathname === link.href ? 'text-football-yellow' : 'text-white'}`}>
                    {link.icon}
                  </span>
                  {/* Animated underline for active */}
                  {pathname === link.href && (
                    <span className="absolute left-1/2 -bottom-1 w-8 h-1 bg-football-yellow rounded-full -translate-x-1/2 animate-pulse" />
                  )}
                </div>
              </Tooltip>
            </Link>
          ))}
          <Separator orientation="vertical" size={{ sm: '1', lg: '2', xl: '2' }} className="bg-football-yellow/50 mx-2" />
          {/* Social Links */}
          {socialLinks.map(link => (
            <Link key={link.href} href={link.href} target="_blank" underline="none">
              <Tooltip content={link.label}>
                <div className="px-3 py-2 rounded-full hover:bg-football-yellow/20 transition-all duration-300">
                  <span className="text-xl text-white">{link.icon}</span>
                </div>
              </Tooltip>
            </Link>
          ))}
          <Separator orientation="vertical" size={{ sm: '1', lg: '2', xl: '2' }} className="bg-football-yellow/50 mx-2" />
          {/* Theme Toggle */}
          <Tooltip content={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            <button
              className="p-2 rounded-full bg-football-yellow/20 hover:bg-football-yellow/40 transition-all duration-300 flex items-center justify-center shadow"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark
                ? <MoonIcon className="w-6 h-6 text-football-yellow" />
                : <SunIcon className="w-6 h-6 text-football-yellow" />}
            </button>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;