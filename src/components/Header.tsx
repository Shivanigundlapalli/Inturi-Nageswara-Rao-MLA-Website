/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../types';

interface HeaderProps {
  currentTab?: string;
  setTab?: (tab: string) => void;
}

export default function Header({ currentTab, setTab }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300 z-50 transition-all duration-100"
        style={{
          width: `${
            typeof window !== 'undefined'
              ? (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              : 0
          }%`
        }}
      />

      {/* TOP INFORMATION BAR */}
      <div className="w-full bg-[#071324] border-b border-amber-500/15 py-2 px-4 text-xs tracking-wider text-slate-300 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium tracking-normal text-slate-400">Official Portal:</span>
            <span>Dedicated to Public Service, Constituency Development & Transparent Governance</span>
          </div>
          <div className="flex items-center gap-4 text-slate-450 text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Kandukur Constituency, Andhra Pradesh
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <header 
        className={`sticky top-0 z-[9999] transition-all duration-300 ${
          scrollY > 20 
            ? 'bg-[#0b1a30]/95 md:py-3 shadow-lg backdrop-blur-md border-b border-amber-500/15' 
            : 'bg-[#0b1a30] md:py-5 border-b border-amber-500/10 shadow-sm'
        } py-3 px-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Frame */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Visual Brand Box (Square with rounded corners, solid yellow/gold background) */}
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

          {/* Large Screen Navigation Nodes */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationTabs.map((tab) => {
              const active = isTabActive(tab.path);
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`relative py-1 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:text-[#F5B400] ${
                    active 
                      ? 'text-[#F5B400] font-semibold border-b-2 border-[#F5B400] shadow-[0_2px_10px_rgba(245,180,0,0.3)]' 
                      : 'text-white border-b-2 border-transparent hover:border-[#F5B400]/40'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Mini Screen Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md bg-slate-800/40 text-slate-300 border border-slate-700/30 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
      </header>
    </>
  );
}
