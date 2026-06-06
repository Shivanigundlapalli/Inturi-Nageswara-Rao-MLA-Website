import React, { useState } from 'react';
import { 
  Megaphone, Calendar, MapPin, Search, ChevronRight, AlertCircle, 
  Image as ImageIcon, Video, ArrowRight, Handshake, Users, 
  Map, FileText, HeartHandshake, Landmark, Facebook, Instagram, Youtube, Phone, FileUp, CheckCircle2, ShieldCheck, Newspaper, X
} from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  category: 'Meeting' | 'Welfare' | 'Government Program' | 'Public Interaction';
  verificationSource: string;
  searchLink: string;
}

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  location: string;
  date: string;
  source: string;
  description: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'img-1',
    src: '/gallery/activity-1.png',
    title: 'Constituency Development Review',
    location: 'Kandukur',
    date: 'Recent',
    source: 'Official Records',
    description: 'Reviewing constituency development plans and infrastructure progress with key stakeholders and party leadership.'
  },
  {
    id: 'img-2',
    src: '/gallery/activity-2.png',
    title: 'Party Workers Interaction',
    location: 'Local Office',
    date: 'Recent',
    source: 'Official Publication',
    description: 'Meeting with local party workers and citizens to discuss community issues and strengthen grassroots engagement.'
  },
  {
    id: 'img-3',
    src: '/gallery/activity-3.png',
    title: 'Welfare Scheme Beneficiaries',
    location: 'Kandukur Town',
    date: 'Recent',
    source: 'Public Record',
    description: 'Distributing welfare benefits and engaging directly with citizens to ensure government schemes reach the intended beneficiaries.'
  },
  {
    id: 'img-4',
    src: '/gallery/activity-4.png',
    title: 'Sanitation Drive Participation',
    location: 'Constituency Villages',
    date: 'Recent',
    source: 'Official Event',
    description: 'Participating in local sanitation and cleanliness drives to promote public health and hygiene across the constituency.'
  },
  {
    id: 'img-5',
    src: '/gallery/activity-5.png',
    title: 'Youth & Women Empowerment',
    location: 'Kandukur Mandal',
    date: 'Recent',
    source: 'Verified Report',
    description: 'Honoring and supporting local youth and women as part of community empowerment and welfare initiatives.'
  },
  {
    id: 'img-6',
    src: '/gallery/activity-6.png',
    title: 'Patient Welfare Support',
    location: 'Local Hospital',
    date: 'Recent',
    source: 'Official Publication',
    description: 'Visiting patients at the local hospital to offer support and ensure adequate medical care and welfare assistance is provided.'
  },
  {
    id: 'img-7',
    src: '/gallery/activity-7.png',
    title: 'School Education Review',
    location: 'Constituency School',
    date: 'Recent',
    source: 'Public Record',
    description: 'Interacting with school students during a mid-day meal review to ensure quality education and proper nutritional support.'
  },
  {
    id: 'img-8',
    src: '/gallery/activity-8.png',
    title: 'Public Engagement Campaign',
    location: 'Kandukur Region',
    date: 'Recent',
    source: 'Official Records',
    description: 'Engaging with the public during a local campaign, listening to citizen concerns and inaugurating new welfare programs.'
  },
  {
    id: 'img-9',
    src: '/gallery/activity-9.png',
    title: 'Direct Beneficiary Interaction',
    location: 'Rural Villages',
    date: 'Recent',
    source: 'Verified Event',
    description: 'Directly interacting with rural citizens and elderly beneficiaries to ensure smooth distribution of government welfare funds.'
  },
  {
    id: 'img-10',
    src: '/gallery/activity-10.png',
    title: 'Agriculture Inspection',
    location: 'Local Markets',
    date: 'Recent',
    source: 'Public Archives',
    description: 'Inspecting local agricultural produce and market conditions, discussing issues with farmers to safeguard their livelihood.'
  },
  {
    id: 'img-11',
    src: '/gallery/activity-11.png',
    title: 'Financial Assistance Distribution',
    location: 'Kandukur Office',
    date: 'Recent',
    source: 'Official Records',
    description: 'Distributing financial assistance checks to local beneficiaries as part of the state welfare initiatives.'
  },
  {
    id: 'img-12',
    src: '/gallery/activity-12.png',
    title: 'Community Leader Meeting',
    location: 'Mosque Gatherings',
    date: 'Recent',
    source: 'Verified Publication',
    description: 'Meeting with local community and religious leaders to foster harmony and discuss minority welfare programs.'
  },
  {
    id: 'img-13',
    src: '/gallery/activity-13.png',
    title: 'Agricultural Community Dialogue',
    location: 'Rural Constituency Fields',
    date: 'Recent',
    source: 'Official Records',
    description: 'Engaging directly with local farmers in the fields to discuss agricultural challenges, crop yield improvements, and state farming subsidies.'
  },
  {
    id: 'img-14',
    src: '/gallery/activity-14.png',
    title: 'Party Worker Core Committee',
    location: 'Constituency Headquarters',
    date: 'Recent',
    source: 'Verified Publication',
    description: 'Holding a core committee meeting with grassroots party workers to discuss local governance, citizen outreach, and upcoming development strategies.'
  }
];

const VERIFIED_ACTIVITIES: Activity[] = [
  {
    id: 'ACT-2026-01',
    title: '"Operation Clean Sweep" Program Participation',
    date: 'May 2026',
    location: 'Kandukur Constituency',
    summary: 'Participated in the local municipal cleanup and public hygiene initiative aimed at improving town sanitation and community health standards.',
    category: 'Public Interaction',
    verificationSource: 'Verified Public Report (YouTube/News)',
    searchLink: 'https://www.google.com/search?q=Inturi+Nageswara+Rao+Operation+Clean+Sweep+Kandukur'
  },
  {
    id: 'ACT-2026-02',
    title: 'Law & Order and Infrastructure Review Meeting',
    date: 'May 2026',
    location: 'District Administration Office',
    summary: 'Attended a high-level review meeting with state officials to discuss constituency law enforcement, regional stability, and upcoming development projects.',
    category: 'Meeting',
    verificationSource: 'RGUKT / AP State Records',
    searchLink: 'https://www.google.com/search?q=Inturi+Nageswara+Rao+Law+and+Order+Meeting+Kandukur'
  },
  {
    id: 'ACT-2026-03',
    title: 'Ramayapatnam Port Rehabilitation Colony Inauguration',
    date: 'Recent',
    location: 'Kandukur Mandal',
    summary: 'Participated in the official inauguration of the rehabilitation colony established for families displaced by the ongoing Ramayapatnam Port development project.',
    category: 'Government Program',
    verificationSource: 'The Hindu',
    searchLink: 'https://www.google.com/search?q=Inturi+Nageswara+Rao+Ramayapatnam+Port+Rehabilitation'
  },
  {
    id: 'ACT-2026-04',
    title: 'Indosol Solar Land Acquisition Employment Initiatives',
    date: 'Recent',
    location: 'Kandukur Region',
    summary: 'Engaged in initiatives to secure local youth employment and provide compensation and jobs for families affected by the Indosol Solar land acquisition.',
    category: 'Welfare',
    verificationSource: 'The Hans India',
    searchLink: 'https://www.google.com/search?q=Inturi+Nageswara+Rao+Indosol+Solar+Land+Acquisition'
  }
];

export default function ActivitiesView() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <div className="w-full bg-[#FAFBFD] text-slate-800 pb-20 font-sans selection:bg-[#F4B400] selection:text-[#081B44]">
      
      {/* ================================================
          SECTION 1: ACTIVITIES OVERVIEW (HERO)
      ================================================ */}
      <section className="bg-[#0c1831] text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden border-b-4 border-[#F4B400]">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4B400]/10 border border-[#F4B400]/30 rounded-full text-[#F4B400] text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Official Public Archive
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tight leading-tight mb-6 text-white">
            Public Activities & <br className="hidden md:block" />
            <span className="text-[#F4B400]">Community Engagement</span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-10 max-w-3xl">
            This section highlights verified public meetings, constituency visits, welfare initiatives, government program participation, and community engagement activities undertaken by Hon. MLA Inturi Nageswara Rao.
          </p>
        </div>
      </section>

      {/* ================================================
          SECTION 2: LATEST VERIFIED UPDATES
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Latest Verified Updates
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VERIFIED_ACTIVITIES.map((activity) => (
            <div key={activity.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#F4B400]/50 transition-all duration-300 flex flex-col h-full group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#081B44]/5 text-[#081B44] rounded-md text-xs font-bold uppercase tracking-widest">
                  {activity.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Calendar className="w-3.5 h-3.5" /> {activity.date}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold font-outfit text-[#081B44] mb-3 leading-tight group-hover:text-[#F4B400] transition-colors">
                {activity.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <MapPin className="w-4 h-4 text-[#F4B400]" /> {activity.location}
              </div>
              
              <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
                {activity.summary}
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-4 h-4" /> {activity.verificationSource}
                </div>
                <a 
                  href={activity.searchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#081B44] flex items-center gap-1.5 hover:text-[#F4B400] transition-colors cursor-pointer"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================
          SECTION 3: PUBLIC MEETINGS & SECTION 4: GOV PROGRAMS
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-[#0c1831] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Public Meetings */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 border border-[#F4B400]/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#F4B400]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-outfit uppercase tracking-tight">Public Meetings</h2>
            </div>
            <p className="text-slate-300 font-light mb-8">
              Verified records of grievance meetings, public consultations, village visits, mandal reviews, and citizen interaction programs.
            </p>
            <ul className="space-y-4">
              {['Grievance Meetings', 'Public Consultations', 'Village Visits', 'Mandal Reviews', 'Citizen Interaction Programs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Programs */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 border border-[#F4B400]/30 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-[#F4B400]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-outfit uppercase tracking-tight">Government Program Participation</h2>
            </div>
            <p className="text-slate-300 font-light mb-8">
              Verified participation in state government events, welfare scheme launches, official review meetings, and development inspections.
            </p>
            <ul className="space-y-4">
              {['State Government Events', 'Welfare Scheme Launches', 'Official Review Meetings', 'Development Inspections'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 5: MEDIA GALLERY
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Media Gallery
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
            <p className="text-slate-500 mt-6 max-w-2xl font-light">
              Verified visual records of public activities, constituency visits, and citizen engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.slice(0, visibleCount).map((img) => (
              <div 
                key={img.id} 
                className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                onClick={() => setSelectedImage(img)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-bold font-outfit text-[#081B44] text-lg mb-1">{img.title}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5" /> {img.location}
                    <span className="mx-1">•</span>
                    <Calendar className="w-3.5 h-3.5" /> {img.date}
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase tracking-widest w-fit">
                      <ShieldCheck className="w-3 h-3" /> {img.source}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-4">
            {visibleCount < GALLERY_IMAGES.length && (
              <button 
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="px-8 py-3.5 bg-white border-2 border-[#081B44] text-[#081B44] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#081B44] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-xl"
              >
                View More Photos
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            
            {visibleCount > 8 && (
              <button 
                onClick={() => setVisibleCount(8)}
                className="px-8 py-3.5 bg-slate-100 border-2 border-slate-300 text-slate-600 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-all duration-300 flex items-center gap-3 shadow-sm"
              >
                View Less
              </button>
            )}
          </div>
          
        </div>

        {/* Modal Overlay */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#081B44]/90 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full lg:w-2/3 bg-black flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              
              <div className="w-full lg:w-1/3 p-8 flex flex-col justify-center bg-white overflow-y-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                  <ShieldCheck className="w-4 h-4" /> Source: {selectedImage.source}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black font-outfit text-[#081B44] mb-4">
                  {selectedImage.title}
                </h3>
                
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
                
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#F4B400]" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Location</span>
                      <span className="font-medium">{selectedImage.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-[#F4B400]" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Event Date</span>
                      <span className="font-medium">{selectedImage.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ================================================
          SECTION 6: SOCIAL MEDIA UPDATES
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Official Social Media
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
          <p className="text-slate-500 mt-6 max-w-2xl font-light">
            Follow the official accounts for real-time, verified updates directly from the MLA's office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://www.facebook.com/search/top?q=Inturi%20Nageswara%20Rao%20Kandukur" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:border-[#1877F2] transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Facebook className="w-8 h-8" />
            </div>
            <h4 className="font-bold font-outfit text-xl text-[#081B44] mb-2">Official Facebook</h4>
            <p className="text-slate-500 text-sm font-light mb-6">Daily updates and public engagement.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1877F2]">Follow on Facebook &rarr;</span>
          </a>

          <a href="https://www.instagram.com/explore/tags/inturinageswararao/" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:border-[#E4405F] transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#E4405F]/10 text-[#E4405F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </div>
            <h4 className="font-bold font-outfit text-xl text-[#081B44] mb-2">Official Instagram</h4>
            <p className="text-slate-500 text-sm font-light mb-6">Visual updates and community moments.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4405F]">Follow on Instagram &rarr;</span>
          </a>

          <a href="https://www.youtube.com/results?search_query=Inturi+Nageswara+Rao+Kandukur" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:border-[#FF0000] transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FF0000]/10 text-[#FF0000] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8" />
            </div>
            <h4 className="font-bold font-outfit text-xl text-[#081B44] mb-2">Official YouTube</h4>
            <p className="text-slate-500 text-sm font-light mb-6">Full speeches and meeting coverage.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0000]">Subscribe on YouTube &rarr;</span>
          </a>
        </div>
      </section>

    </div>
  );
}
