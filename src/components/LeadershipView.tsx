import React from 'react';
import { 
  ShieldCheck, Eye, Compass, TrendingUp, Handshake, Users, 
  Leaf, Scale, UserCheck, MessageSquare, Landmark, Settings 
} from 'lucide-react';

export default function LeadershipView() {
  return (
    <div className="w-full bg-[#FAFBFD] text-slate-800 pb-20 font-sans selection:bg-[#F4B400] selection:text-[#081B44]">
      
      {/* ================================================
          SECTION 1: LEADERSHIP HERO
      ================================================ */}
      <section className="bg-[#0c1831] text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden border-b-4 border-[#F4B400]">
        {/* Subtle abstract governance pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#F4B400_25%,transparent_25%,transparent_75%,#F4B400_75%,#F4B400_100%)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tight leading-tight mb-4 text-[#F4B400]">
              Leadership
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold font-outfit text-white mb-6 leading-relaxed max-w-lg">
              Public Service Through Accountability, Accessibility, and Community Engagement
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-10 max-w-xl">
              As the elected representative of Kandukur Constituency, Inturi Nageswara Rao's leadership approach is centered on understanding local needs, strengthening public infrastructure, supporting agriculture, and promoting inclusive development. His focus remains on ensuring that government initiatives reach citizens effectively and contribute to long-term constituency progress.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-10 bg-[#F4B400]/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="w-full max-w-2xl relative">
              {/* Main Image Container perfectly aligned */}
              <div className="rounded-[2rem] border-4 border-[#F4B400]/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:border-[#F4B400]/80 transition-colors duration-500 relative overflow-hidden group bg-[#0c1831] z-10">
                <img 
                  src="/gallery/leadership-hero-real.png" 
                  alt="Inturi Nageswara Rao Leadership Journey" 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out opacity-95" 
                />
                
                {/* Gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#081B44]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B44] via-transparent to-transparent opacity-40 pointer-events-none" />
                
                {/* Inner border highlight */}
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 2: LEADERSHIP PHILOSOPHY
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-100 flex flex-col items-center text-center">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#F4B400] mb-8">
            Leadership Philosophy
          </h2>
          
          <span className="text-5xl font-serif text-slate-200 block leading-none mb-4">"</span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-black text-[#081B44] leading-relaxed mb-8 tracking-tight">
            Public leadership begins with listening to people, understanding local challenges, and ensuring that development reaches every village and household.
          </h3>
          
          <div className="w-16 h-1 bg-slate-200 mb-8" />
          
          <p className="text-slate-600 font-light text-lg leading-relaxed max-w-3xl mb-12">
            Leadership is most effective when it remains connected to the everyday concerns of citizens. The objective is not only to represent a constituency, but to create opportunities for progress through transparency, responsibility, and continuous public engagement.
          </p>
          
          <div className="flex flex-col items-center">
            <span className="font-outfit font-black text-xl text-[#081B44] uppercase tracking-wide">
              Inturi Nageswara Rao
            </span>
            <span className="text-sm font-mono text-slate-500 uppercase tracking-widest mt-2">
              Member of Legislative Assembly
            </span>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 3: LEADERSHIP APPROACH
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Leadership Approach
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAFBFD] p-8 rounded-2xl border border-slate-200 hover:border-[#F4B400] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-white transition-colors mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Transparency</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Supporting open communication, responsible governance, and public accountability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFBFD] p-8 rounded-2xl border border-slate-200 hover:border-[#F4B400] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-white transition-colors mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Accessibility</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Encouraging citizen interaction through public meetings, grievance platforms, and direct engagement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAFBFD] p-8 rounded-2xl border border-slate-200 hover:border-[#F4B400] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-white transition-colors mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Accountability</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Promoting measurable outcomes and responsible use of public resources.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAFBFD] p-8 rounded-2xl border border-slate-200 hover:border-[#F4B400] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#081B44] group-hover:bg-[#081B44] group-hover:text-white transition-colors mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-4">Development Focus</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Supporting infrastructure, education, healthcare, agriculture, and citizen welfare initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 4: PUBLIC SERVICE COMMITMENT
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-6">
              Public Service Commitment
            </h2>
            <div className="w-16 h-1 bg-[#F4B400] mb-8" />
            
            <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
              Public service requires continuous interaction with communities and an understanding of local priorities. Effective governance is built through collaboration, responsiveness, and a commitment to addressing issues that impact citizens' daily lives.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-[#081B44] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-white/5">
                <Landmark className="w-48 h-48" />
              </div>
              
              <h3 className="text-xl font-bold font-outfit uppercase text-[#F4B400] mb-6 relative z-10">
                Key Areas of Focus
              </h3>
              
              <ul className="space-y-4 relative z-10 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Agriculture
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Rural Infrastructure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Education
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Healthcare
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Citizen Services
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" /> Employment Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 5: VALUES IN GOVERNANCE
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Core Governance Values
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
              <Scale className="w-10 h-10 text-[#081B44] mb-4 group-hover:text-[#F4B400] transition-colors" />
              <h3 className="text-lg font-bold font-outfit uppercase text-[#081B44] mb-3">Integrity</h3>
              <p className="text-sm text-slate-500 font-light">Acting responsibly and ethically in public service.</p>
            </div>
            
            <div className="w-full md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
              <UserCheck className="w-10 h-10 text-[#081B44] mb-4 group-hover:text-[#F4B400] transition-colors" />
              <h3 className="text-lg font-bold font-outfit uppercase text-[#081B44] mb-3">Citizen First</h3>
              <p className="text-sm text-slate-500 font-light">Ensuring public interests remain the primary priority.</p>
            </div>
            
            <div className="w-full md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
              <Handshake className="w-10 h-10 text-[#081B44] mb-4 group-hover:text-[#F4B400] transition-colors" />
              <h3 className="text-lg font-bold font-outfit uppercase text-[#081B44] mb-3">Inclusiveness</h3>
              <p className="text-sm text-slate-500 font-light">Supporting development that benefits all communities.</p>
            </div>
            
            <div className="w-full md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
              <Leaf className="w-10 h-10 text-[#081B44] mb-4 group-hover:text-[#F4B400] transition-colors" />
              <h3 className="text-lg font-bold font-outfit uppercase text-[#081B44] mb-3">Sustainability</h3>
              <p className="text-sm text-slate-500 font-light">Encouraging long-term growth and responsible planning.</p>
            </div>
            
            <div className="w-full md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
              <MessageSquare className="w-10 h-10 text-[#081B44] mb-4 group-hover:text-[#F4B400] transition-colors" />
              <h3 className="text-lg font-bold font-outfit uppercase text-[#081B44] mb-3">Trust</h3>
              <p className="text-sm text-slate-500 font-light">Building confidence through consistent public engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 6: LEGISLATIVE RESPONSIBILITY
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <Settings className="w-12 h-12 text-[#F4B400] mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-6">
          Legislative Responsibility
        </h2>
        
        <p className="text-slate-600 leading-relaxed text-lg font-light mb-10">
          As a Member of the Legislative Assembly, responsibilities include representing constituency concerns, participating in legislative discussions, supporting public welfare initiatives, and contributing to policies that improve quality of life for citizens.
        </p>

        <div className="bg-[#081B44]/5 border border-[#081B44]/10 rounded-xl p-6 inline-block">
          <p className="text-sm font-mono uppercase tracking-widest font-bold text-[#081B44]">
            Important Notice
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Detailed legislative records, speeches, and official assembly activities may be published by the MLA Office after verification.
          </p>
        </div>
      </section>

      {/* ================================================
          SECTION 7: MESSAGE TO CITIZENS
      ================================================ */}
      <section className="py-32 px-6 md:px-12 bg-[#0c1831] text-white relative border-t-4 border-[#F4B400]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-6xl font-serif text-[#F4B400] opacity-50 mb-4 block leading-none">"</span>
          <h3 className="text-2xl md:text-4xl font-outfit font-black text-white leading-relaxed mb-10 tracking-tight">
            Meaningful progress is achieved when governance remains connected to people, responsive to local needs, and committed to future generations.
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-[#F4B400] mb-6" />
            <span className="font-outfit font-bold uppercase tracking-widest text-white text-lg">
              Inturi Nageswara Rao
            </span>
            <span className="text-xs font-mono font-bold text-[#F4B400] uppercase tracking-widest mt-2">
              Member of Legislative Assembly
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
