import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, MapPin, Phone, Shield, ArrowRight,
  Sprout, Users, Landmark, Target
} from 'lucide-react';
import { motion } from 'motion/react';
import homePortrait from '@/assets/home_circular.png';

interface HomeViewProps {
  setTab: (tab: string) => void;
  currentTab?: string;
}

export default function HomeView({ setTab }: HomeViewProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen font-sans selection:bg-[#F4B400] selection:text-[#081B44] overflow-x-hidden">
      
      {/* ================================================
          1. HERO SECTION (Main Landing Preview)
      ================================================ */}
      <section id="leadership-profile-section" className="relative min-h-[92vh] xl:min-h-[85vh] bg-[#0c1831] text-white flex items-center justify-center pt-28 pb-12 px-6 md:px-12 border-b-4 border-[#F4B400] overflow-hidden">
        
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#F4B400_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Background gradient rings */}
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(244,180,0,0.12)_0%,rgba(8,27,68,0)_70%)] blur-3xl pointer-events-none select-none z-0" />
        <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,180,0,0.06)_0%,rgba(8,27,68,0)_70%)] blur-2xl pointer-events-none select-none z-0" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column Content */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4B400]/10 border border-[#F4B400]/30 rounded-full text-[#F4B400] text-xs font-mono tracking-widest uppercase font-bold mb-5 select-none"
            >
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>Leadership Profile</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col select-none"
            >
              <span className="text-xs uppercase font-mono text-zinc-400 tracking-[0.3em] font-medium leading-none">Andhra Pradesh Representative</span>
              <h1 className="font-outfit font-black text-4xl sm:text-6xl xl:text-[5.2rem] leading-[1.05] tracking-tight uppercase mt-3 text-white">
                INTURI <span className="text-[#F4B400]">NAGESWARA RAO</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 flex flex-col select-none"
            >
              <h3 className="text-lg sm:text-2xl font-outfit text-white font-extrabold tracking-wide uppercase leading-none">
                Member of Legislative Assembly (MLA)
              </h3>
              <p className="text-[#F4B400] font-sans font-bold text-base sm:text-lg mt-2 tracking-wide uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F4B400] shrink-0" />
                Kandukur Constituency
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light mt-6"
            >
              "Committed to constituency development, agricultural progress, citizen welfare, and transparent public governance in Kandukur."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto"
            >
              <button 
                onClick={() => navigate('/about')}
                className="px-6 py-3.5 bg-transparent border-2 border-[#F4B400] text-[#F4B400] font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#F4B400] hover:text-[#081B44] flex items-center gap-2 shadow-lg shadow-black/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>About MLA</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-3.5 bg-[#F4B400] text-[#081B44] font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white hover:text-[#081B44] flex items-center gap-2 shadow-lg shadow-black/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Contact Office</span>
                <Phone className="w-4 h-4 animate-pulse" />
              </button>
            </motion.div>
          </div>

          {/* Right Column Layout: MLA portrait */}
          <div className="col-span-1 lg:col-span-5 relative flex justify-center items-center h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[580px] w-full mt-8 lg:mt-0 self-center">
            
            <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none opacity-20">
              <div className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/5" />
                <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-white/10" />
              </div>
            </div>

            {/* The professional portrait image */}
            <div className="relative w-72 h-72 sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[340px] lg:h-[340px] xl:w-[420px] xl:h-[420px] z-10 flex justify-center items-center transition-all duration-500 rounded-full overflow-hidden shadow-2xl border-4 border-[#F4B400]/30 hover:border-[#F4B400]/60 group bg-[#0c1831]">
              <img 
                src={`${homePortrait}?v=7`} 
                alt="Representative Inturi Nageswara Rao portrait" 
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700 origin-center"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================================================
          2. ABOUT PREVIEW SECTION
      ================================================ */}
      <section className="py-16 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#F4B400] mb-2">About The MLA</h2>
            <h3 className="font-outfit font-black text-3xl sm:text-4xl text-[#081B44] uppercase tracking-tight mb-6">
              Rooted in Community Values
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light mb-6">
              Inturi Nageswara Rao's early experiences were shaped by agricultural life, hard work, and community responsibility. Growing up in a farming family environment helped build a deep understanding of the challenges faced by ordinary citizens and local communities.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="w-fit px-6 py-3 border border-[#081B44] text-[#081B44] font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#081B44] hover:text-white flex items-center gap-2 transition-all duration-300"
            >
              View Full Biography
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-inner flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-[#081B44]">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#081B44] uppercase font-outfit">Agricultural Roots</h4>
                <p className="text-sm text-slate-500 mt-1">Deep connection to the land and farming communities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-[#081B44]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#081B44] uppercase font-outfit">Public Engagement</h4>
                <p className="text-sm text-slate-500 mt-1">Decades of active community service and grassroots development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          3. LEADERSHIP PREVIEW SECTION
      ================================================ */}
      <section className="py-16 px-6 md:px-12 bg-[#FAFBFD] border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <Landmark className="w-12 h-12 text-[#F4B400] mb-6" />
          <h2 className="font-outfit font-black text-3xl sm:text-4xl text-[#081B44] uppercase tracking-tight mb-6">
            Public Service Through Accountability
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light mb-10 max-w-2xl">
            "Public leadership begins with listening to people, understanding local challenges, and ensuring that development reaches every village and household."
          </p>
          <button 
            onClick={() => navigate('/leadership')}
            className="w-fit px-8 py-4 bg-[#F4B400] text-[#081B44] font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#081B44] hover:text-white flex items-center gap-2 shadow-lg transition-all duration-300"
          >
            Explore Leadership Approach
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ================================================
          4. KANDUKUR CONSTITUENCY PREVIEW
      ================================================ */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-[#081B44] rounded-2xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#F4B400_1px,transparent_1px)] [background-size:24px_24px]" />
            <MapPin className="w-12 h-12 text-[#F4B400] mb-6 relative z-10" />
            <h4 className="text-white text-2xl font-black font-outfit uppercase tracking-wider relative z-10">Kandukur</h4>
            <p className="text-[#F4B400] font-mono text-sm tracking-widest uppercase mt-2 mb-6 relative z-10">Andhra Pradesh</p>
            <p className="text-slate-300 font-light relative z-10">A vibrant constituency built on agriculture, strong community ties, and an emerging focus on modern regional infrastructure.</p>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#F4B400] mb-2">The Constituency</h2>
            <h3 className="font-outfit font-black text-3xl sm:text-4xl text-[#081B44] uppercase tracking-tight mb-6">
              Our Kandukur
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light mb-8">
              Kandukur is more than just a legislative boundary; it is a community of hardworking citizens, farmers, and youth looking towards a progressive future. Discover the official statistics, geography, and vision for our constituency.
            </p>
            <button 
              onClick={() => navigate('/kandukur')}
              className="w-fit px-6 py-3 border border-[#081B44] text-[#081B44] font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#081B44] hover:text-white flex items-center gap-2 transition-all duration-300"
            >
              Constituency Profile
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================
          5. QUICK ACTION PREVIEWS (Development & Activities)
      ================================================ */}
      <section className="py-16 px-6 md:px-12 bg-[#0c1831] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-white/10 bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col items-start">
            <Target className="w-10 h-10 text-[#F4B400] mb-6" />
            <h3 className="text-2xl font-bold font-outfit uppercase tracking-tight mb-4">Constituency Development</h3>
            <p className="text-slate-300 font-light mb-8">
              Track the ongoing public infrastructure improvements, development initiatives, and verified projects across Kandukur.
            </p>
            <button 
              onClick={() => navigate('/development')}
              className="mt-auto px-5 py-2.5 bg-transparent border border-[#F4B400] text-[#F4B400] font-bold text-xs tracking-wider uppercase rounded-lg hover:bg-[#F4B400] hover:text-[#081B44] transition-all duration-300"
            >
              View Development Updates
            </button>
          </div>

          <div className="border border-white/10 bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col items-start">
            <Users className="w-10 h-10 text-[#F4B400] mb-6" />
            <h3 className="text-2xl font-bold font-outfit uppercase tracking-tight mb-4">Public Activities</h3>
            <p className="text-slate-300 font-light mb-8">
              Stay updated with the latest official meetings, constituency tours, public engagements, and welfare distributions.
            </p>
            <button 
              onClick={() => navigate('/activities')}
              className="mt-auto px-5 py-2.5 bg-transparent border border-[#F4B400] text-[#F4B400] font-bold text-xs tracking-wider uppercase rounded-lg hover:bg-[#F4B400] hover:text-[#081B44] transition-all duration-300"
            >
              View Official Activities
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
