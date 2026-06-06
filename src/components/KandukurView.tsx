import React from 'react';
import { 
  MapPin, Navigation, TrendingUp, Info, 
  Tractor, BookOpen, HeartPulse, Building2,
  Image as ImageIcon, AlertCircle, Shield,
  Phone, Users, FileText
} from 'lucide-react';

export default function KandukurView() {
  return (
    <div className="w-full bg-[#FAFBFD] text-slate-800 pb-20 font-sans selection:bg-[#F4B400] selection:text-[#081B44]">
      
      {/* ================================================
          SECTION 1: HERO SECTION
      ================================================ */}
      <section className="bg-[#0c1831] text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden border-b-4 border-[#F4B400]">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 animate-fade-in-up">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-[#F4B400]" />
              <span className="text-[#F4B400] font-mono font-bold tracking-widest uppercase text-sm">
                Kandukur Constituency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-outfit uppercase tracking-tight leading-none mb-6 text-white">
              Kandukur
            </h1>
            
            <h2 className="text-lg md:text-xl font-bold font-outfit text-white mb-6 leading-relaxed opacity-90">
              Andhra Pradesh Legislative Assembly Constituency
            </h2>
            
            <p className="text-slate-300 text-base leading-relaxed font-light mb-10 max-w-xl">
              Kandukur is an important legislative constituency in Andhra Pradesh with a strong agricultural foundation, active local commerce, and growing infrastructure needs. The constituency represents a diverse mix of rural and urban communities and plays an important role in regional development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit px-8 py-3.5 bg-[#F4B400] text-[#081B44] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#081B44] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
              >
                View Constituency Map
                <Navigation className="w-4 h-4" />
              </button>
              <button 
                onClick={() => document.getElementById('priorities')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Development Priorities
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative bg-[#081B44]">
            <iframe 
              title="Kandukur Hero Map"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Kandukur,Andhra%20Pradesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity"
            />
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 2: CONSTITUENCY OVERVIEW
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Constituency Overview
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Constituency</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">Kandukur Assembly Constituency</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">State</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">Andhra Pradesh</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Legislative Body</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">Andhra Pradesh Legislative Assembly</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Current Representative</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">Inturi Nageswara Rao</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Political Party</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">Telugu Desam Party (TDP)</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col hover:border-[#F4B400]/50 transition-colors">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Election Year</span>
            <span className="text-xl font-bold font-outfit text-[#081B44]">2024</span>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 3: ABOUT KANDUKUR
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              About <br />Kandukur
            </h2>
            <div className="w-16 h-1 bg-[#F4B400]" />
          </div>
          <div className="md:w-2/3 space-y-6 text-slate-600 leading-relaxed text-lg font-light">
            <p>
              Kandukur is a well-known constituency in Andhra Pradesh with a strong connection to agriculture, local trade, and community development. The region includes several rural and semi-urban areas that contribute to the social and economic growth of the state.
            </p>
            <p>
              Agriculture remains an important part of the local economy, supporting livelihoods across the constituency. Educational institutions, healthcare facilities, and public infrastructure continue to play an important role in serving local communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 4: KEY SECTORS
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Key Areas of Importance
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FAFBFD] rounded-2xl border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-[#F4B400] transition-colors mb-8">
              <Tractor className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Agriculture</h3>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Agriculture continues to support a large section of the constituency through farming and related economic activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FAFBFD] rounded-2xl border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-[#F4B400] transition-colors mb-8">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Education</h3>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Schools and educational institutions contribute to learning opportunities for students throughout the region.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FAFBFD] rounded-2xl border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-[#F4B400] transition-colors mb-8">
              <HeartPulse className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Healthcare</h3>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Healthcare services remain an important component of public welfare and community development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FAFBFD] rounded-2xl border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-[#F4B400] transition-colors mb-8">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Infrastructure</h3>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Road connectivity, public facilities, and civic infrastructure support the day-to-day needs of citizens.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 5: CONSTITUENCY MAP
      ================================================ */}
      <section id="map" className="w-full bg-[#081B44] text-white">
        <div className="max-w-7xl mx-auto pt-24 pb-12 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-white uppercase tracking-tight mb-4">
            Explore Kandukur
          </h2>
          <div className="w-20 h-1 bg-[#F4B400] mx-auto" />
        </div>
        
        <div className="w-full h-[600px] relative bg-slate-100">
          <iframe 
            title="Explore Kandukur Interactive Map"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=Kandukur,Andhra%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0"
          />
        </div>
      </section>

      {/* ================================================
          SECTION 6: DEVELOPMENT PRIORITIES
      ================================================ */}
      <section id="priorities" className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Development Priorities
            </h2>
            <div className="w-20 h-1 bg-[#F4B400] mb-8" />
            <p className="text-slate-500 font-light max-w-2xl mx-auto">
              Detailed development information and official project updates will be published after verification by the MLA Office.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <Building2 className="w-8 h-8 text-[#081B44] mb-4" />
              <span className="font-bold font-outfit uppercase text-[#081B44]">Infrastructure Development</span>
            </div>
            
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <Tractor className="w-8 h-8 text-[#081B44] mb-4" />
              <span className="font-bold font-outfit uppercase text-[#081B44]">Agricultural Support</span>
            </div>
            
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-[#081B44] mb-4" />
              <span className="font-bold font-outfit uppercase text-[#081B44]">Education & Skill Development</span>
            </div>
            
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <HeartPulse className="w-8 h-8 text-[#081B44] mb-4" />
              <span className="font-bold font-outfit uppercase text-[#081B44]">Healthcare Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 7: CONSTITUENCY GALLERY
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Kandukur in Focus
          </h2>
          <div className="w-20 h-1 bg-[#F4B400] mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Agriculture', 'Public Infrastructure', 'Community Life', 'Education', 'Healthcare', 'Important Locations'].map(cat => (
              <span key={cat} className="px-5 py-2 border border-slate-200 rounded-full text-xs font-bold font-outfit uppercase tracking-wider text-slate-500 bg-white cursor-pointer hover:border-[#F4B400] hover:text-[#081B44] transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Equal-sized Grid Gallery Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Fallback Behavior Cards for each category */}
            {/* Note: Real verified images from AP.gov.in and official sources will populate this layout once approved. AI/Stock images are strictly disabled. */}
            
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <Tractor className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Agriculture</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <Building2 className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Public Infrastructure</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <Users className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Community Life</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <BookOpen className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Education</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <HeartPulse className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Healthcare</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[320px] hover:border-[#F4B400]/50 transition-colors">
               <MapPin className="w-8 h-8 text-slate-300 mb-6" />
               <p className="text-lg font-bold font-outfit text-[#081B44] mb-3">Important Locations</p>
               <p className="text-slate-500 font-light text-sm italic mb-6">
                 Official media for this category will be added after verification by the MLA Office.
               </p>
               <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-[#F4B400]" /> Source Verification Pending
               </div>
            </div>

        </div>
      </section>

      {/* ================================================
          SECTION 8: CITIZEN INFORMATION
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-[#0c1831] border-y-4 border-[#F4B400] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-white uppercase tracking-tight mb-4">
              Citizen Information
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#122244] rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center hover:border-[#F4B400]/50 transition-colors cursor-pointer">
              <Shield className="w-10 h-10 text-[#F4B400] mb-6" />
              <span className="font-bold font-outfit uppercase text-white tracking-widest text-sm">Government Services</span>
            </div>
            
            <div className="bg-[#122244] rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center hover:border-[#F4B400]/50 transition-colors cursor-pointer">
              <Users className="w-10 h-10 text-[#F4B400] mb-6" />
              <span className="font-bold font-outfit uppercase text-white tracking-widest text-sm">Public Welfare Information</span>
            </div>
            
            <div className="bg-[#122244] rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center hover:border-[#F4B400]/50 transition-colors cursor-pointer">
              <Phone className="w-10 h-10 text-[#F4B400] mb-6" />
              <span className="font-bold font-outfit uppercase text-white tracking-widest text-sm">Emergency Contacts</span>
            </div>
            
            <div className="bg-[#122244] rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center hover:border-[#F4B400]/50 transition-colors cursor-pointer">
              <FileText className="w-10 h-10 text-[#F4B400] mb-6" />
              <span className="font-bold font-outfit uppercase text-white tracking-widest text-sm">Grievance Support</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-400 font-light text-sm italic">
              All content should remain editable by the MLA Office.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
