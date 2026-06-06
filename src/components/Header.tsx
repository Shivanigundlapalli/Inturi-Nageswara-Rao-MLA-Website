/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../types';

// Isolated component so the main Header doesn't re-render 60 times a second on scroll
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = window.scrollY;
      const winHeightPx = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollPx / winHeightPx) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 z-50 transition-all duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}

interface HeaderProps {
  currentTab?: string;
  setTab?: (tab: string) => void;
}

export default function Header({ currentTab, setTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      // Only trigger a re-render when crossing the 20px threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const isTabActive = (path: string) => {
    return pathname === path;
  };

  const navigationTabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'leadership', label: 'Leadership', path: '/leadership' },
    { id: 'kandukur', label: 'Kandukur', path: '/kandukur' },
    { id: 'development', label: 'Development', path: '/development' },
    { id: 'activities', label: 'Activities', path: '/activities' },
    { id: 'contact', label: 'Contact Office', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] flex flex-col shadow-md transform-gpu bg-[#0b1a30]">
      <ScrollProgress />

      {/* TOP INFORMATION BAR */}
      <div className={`w-full bg-[#071324] border-b border-amber-500/15 py-1.5 md:py-2 px-4 text-[10px] md:text-xs tracking-wider text-slate-300 select-none transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2 w-full">
          <div className="flex items-center gap-2 text-slate-300 text-center md:text-left">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-medium tracking-normal text-slate-400 hidden sm:inline">Official Portal:</span>
            <span className="line-clamp-1">Dedicated to Public Service & Transparent Governance</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 hidden md:flex">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Kandukur Constituency, Andhra Pradesh
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0b1a30]/98 md:py-3 backdrop-blur-md border-b border-amber-500/20' 
            : 'bg-[#0b1a30] md:py-5 border-b border-amber-500/10'
        } py-3 px-4 relative z-40 transform-gpu`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Frame */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Visual Brand Box */}
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center font-outfit font-black text-[#0b1a30] text-xl tracking-tight shadow-md border border-amber-400/20 relative group-hover:scale-105 transition-transform shrink-0">
              IN
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-bold text-white text-sm md:text-base leading-none tracking-wide group-hover:text-amber-400 transition-colors uppercase">
                {PROFILE_DATA.fullName}
              </span>
              <span className="text-[9px] md:text-[10px] text-amber-500 font-bold leading-none tracking-wider uppercase mt-1">
                MLA – KANDUKUR CONSTITUENCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`relative px-4 py-2 font-outfit font-semibold text-sm tracking-wide rounded-md transition-all duration-300 ${
                  isTabActive(tab.path)
                    ? 'text-amber-500 bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label.toUpperCase()}
                {isTabActive(tab.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-[#0b1a30]/98 z-[9999] backdrop-blur-lg flex flex-col p-6 animate-fade-in">
            <div className="flex justify-between items-center pb-6 border-b border-amber-500/15">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-display font-medium text-[#0b1a30] text-sm font-bold">
                  IN
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-slate-200 text-xs leading-none">
                    {PROFILE_DATA.fullName}
                  </span>
                  <span className="text-[9px] text-amber-500 font-medium tracking-wide font-bold">
                    MLA - KANDUKUR
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-800/40 text-slate-450 border border-slate-700/30 hover:text-white hover:bg-[#071324] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 my-8">
              {navigationTabs.map((tab) => {
                const active = isTabActive(tab.path);
                return (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left py-2.5 px-4 rounded-lg font-display text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                      active 
                        ? 'bg-[#F5B400]/10 text-[#F5B400] border-l-4 border-[#F5B400] pl-4 font-bold' 
                        : 'text-white hover:text-[#F5B400]'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto">
              <div className="text-center text-[10px] text-slate-500 uppercase tracking-widest mt-4 border-t border-white/10 pt-4">
                Kandukur constituency • AP
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
