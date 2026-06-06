/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../types';

interface FooterProps {
  setTab?: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#020c1b] border-t border-amber-500/10 text-slate-400 font-sans text-xs md:text-sm">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
        
        {/* Column 1: Visual logo, name, description, socials */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-500 flex items-center justify-center font-display font-black text-[#020c1b] text-base shadow-sm">
              IN
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-extrabold text-slate-100 text-base leading-tight tracking-wide">
                Inturi Nageswara Rao
              </span>
              <span className="text-[10px] text-amber-500 font-mono tracking-widest font-bold uppercase mt-0.5">
                MLA - KANDUKUR CONSTITUENCY
              </span>
            </div>
          </Link>
          
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Committed to public service, constituency development and transparent governance.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3.5 mt-2">
            <a 
              href={PROFILE_DATA.socials.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded bg-slate-900/65 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/20 active:scale-95 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href={PROFILE_DATA.socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded bg-slate-900/65 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/20 active:scale-95 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded bg-slate-900/65 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/20 active:scale-95 transition-all"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded bg-slate-900/65 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/20 active:scale-95 transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Constituency Office Information */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="font-outfit font-bold text-slate-100 text-xs uppercase tracking-widest border-b border-slate-800 pb-2">
            Constituency Office
          </h4>
          <div className="flex flex-col gap-3 text-xs leading-relaxed text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Kandukur Town, Kandukur Constituency,<br />
                Andhra Pradesh - 523105
              </span>
            </div>
            <div className="flex items-start gap-2.5 mt-1">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-300">Office Hours</p>
                <p className="text-[11px]">Mon to Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-[11px] text-slate-500">(Sunday Holiday)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Navigation */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-outfit font-bold text-slate-100 text-xs uppercase tracking-widest border-b border-slate-800 pb-2">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                About
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/kandukur" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Kandukur
              </Link>
            </li>
            <li>
              <Link to="/development" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Development
              </Link>
            </li>
            <li>
              <Link to="/activities" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Activities
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 hover:translate-x-1 transition-all cursor-pointer text-left block">
                Contact Office
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Citizen Services */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="font-outfit font-bold text-slate-100 text-xs uppercase tracking-widest border-b border-slate-800 pb-2">
            Get In Touch
          </h4>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe to get the latest updates on activities and development in Kandukur.
          </p>

          {submitted ? (
            <div className="p-3 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs rounded-lg flex items-center gap-2 select-none animate-fade-in font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-500" />
              <span>Subscription success! Namaste.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full mt-1">
              <input 
                type="email" 
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#010712] border border-slate-800 rounded px-3 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 w-full"
              />
              <button 
                type="submit" 
                className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-[#020c1b] rounded text-xs shrink-0 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Submit"
              >
                <Send className="w-3.5 h-3.5 text-[#020c1b]" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Deep disclaimer of mock-to-real notice */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-slate-900 py-4 text-center text-[10px] text-slate-500 italic select-none">
        <p>
          Disclaimer: This portal serves as an interactive profile draft for Hon. MLA Inturi Nageswara Rao. All activities and media galleries reflect verified public events in local administrative logs.
        </p>
      </div>

      {/* Bottom Footer Credits */}
      <div className="bg-[#010712] py-6 px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[11px] text-slate-500 font-mono">
          <div className="flex flex-col md:flex-row gap-1.5 md:items-center text-center md:text-left">
            <span>© 2024 Inturi Nageswara Rao MLA Office, Kandukur Constituency. All Rights Reserved.</span>
          </div>
          
          <div className="flex gap-3.5 justify-center md:justify-end">
            <span className="hover:text-amber-500 cursor-not-allowed transition-colors">Privacy Policy</span>
            <span className="text-slate-800">|</span>
            <span className="hover:text-amber-500 cursor-not-allowed transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
