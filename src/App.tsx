/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { PROFILE_DATA } from './types';

// Lazy loaded route components for maximum performance
const HomeView = React.lazy(() => import('./components/HomeView'));
const LeadershipView = React.lazy(() => import('./components/LeadershipView'));
const KandukurView = React.lazy(() => import('./components/KandukurView'));
const DevelopmentView = React.lazy(() => import('./components/DevelopmentView'));
const ActivitiesView = React.lazy(() => import('./components/ActivitiesView'));
const ContactView = React.lazy(() => import('./components/ContactView'));
const AboutView = React.lazy(() => import('./components/AboutView'));

// Loading fallback component
const PageLoader = () => (
  <div className="w-full min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#F4B400] rounded-full animate-spin"></div>
      <p className="text-slate-400 font-mono text-sm tracking-widest uppercase animate-pulse">Loading Official Data...</p>
    </div>
  </div>
);

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top automatically on route transitions (except leadership approach)
  useEffect(() => {
    if (location.pathname !== '/leadership') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Helper mapping path to active tab ID
  const getTabFromPath = (path: string) => {
    switch (path) {
      case '/': return 'home';
      case '/about': return 'about';
      case '/leadership': return 'leadership';
      case '/kandukur': return 'kandukur';
      case '/development': return 'development';
      case '/activities': return 'activities';
      case '/contact': return 'contact';
      default: return 'home';
    }
  };

  const currentTab = getTabFromPath(location.pathname);

  const setTab = (tab: string) => {
    switch (tab) {
      case 'home': navigate('/'); break;
      case 'about': navigate('/about'); break;
      case 'leadership': navigate('/leadership'); break;
      case 'kandukur': navigate('/kandukur'); break;
      case 'development': navigate('/development'); break;
      case 'activities': navigate('/activities'); break;
      case 'contact': navigate('/contact'); break;
      default: navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between relative selection:bg-[#F4B400] selection:text-[#081B44] overflow-x-hidden w-full">
      
      {/* 1. STICKY BRAND HEADER */}
      <Header currentTab={currentTab} setTab={setTab} />

      {/* 2. DYNAMIC STATE ROUTED VIEW CONTAINER (Lazy Loaded) */}
      <main className="flex-grow animate-fade-in">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomeView setTab={setTab} currentTab={currentTab} />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/leadership" element={<LeadershipView />} />
            <Route path="/kandukur" element={<KandukurView />} />
            <Route path="/development" element={<DevelopmentView />} />
            <Route path="/activities" element={<ActivitiesView />} />
            <Route path="/contact" element={<ContactView />} />
            {/* Wildcard path redirects to home to prevent navigation errors or blank pages */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* 3. PREMIUM FOOTER DISPATCH */}
      <Footer setTab={setTab} />
      
      {/* 4. VERCEL ANALYTICS & SPEED INSIGHTS TRACKING */}
      <SpeedInsights />
      <Analytics />

    </div>
  );
}
