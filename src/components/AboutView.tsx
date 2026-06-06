import React from 'react';
import { 
  Briefcase, Sprout, HeartHandshake, BookOpen, Target, 
  MapPin, CheckCircle, ArrowRight, ShieldCheck, Eye, Compass, 
  TrendingUp, Image as ImageIcon
} from 'lucide-react';
import portraitImage from '@/assets/about_portrait.jpg';

const TIMELINE_EVENTS = [
  {
    id: 'timeline-agriculture',
    year: '1992 - 2010',
    title: 'Agricultural Roots & Local Progress',
    category: 'Agriculture',
    icon: Sprout,
    description: 'Managed family agricultural lands and established regional commercial models. Directly experienced the core challenges faced by Kandukur’s farming communities.',
  },
  {
    id: 'timeline-community',
    year: '2011 - 2018',
    title: 'Active Community Engagement',
    category: 'Community Engagement',
    icon: HeartHandshake,
    description: 'Devoted efforts to local social service, student guidance, and rural relief operations. Organized local youth councils to build community cohesion.',
  },
  {
    id: 'timeline-development',
    year: '2019 - 2023',
    title: 'Grassroots Welfare Drives',
    category: 'Development Activities',
    icon: Target,
    description: 'Spearheaded constituency welfare monitoring panels. Strongly advocated for cleaner public facilities and village road expansions.',
  },
  {
    id: 'timeline-service',
    year: '2018 - 2024',
    title: 'Dedicated Public Service Path',
    category: 'Public Service',
    icon: Compass,
    description: 'Built a collaborative public network, listening to local issues directly through personal interaction and village-level grievance hours.',
  },
  {
    id: 'timeline-legislative',
    year: '2024 - Present',
    title: 'Legislative Mandate',
    category: 'Legislative Responsibility',
    icon: Briefcase,
    description: 'Elected as Member of the Legislative Assembly (MLA) for Kandukur Constituency under the Telugu Desam Party (TDP). Securing a massive mandate to drive systematic change.',
  }
];

export default function AboutView() {
  return (
    <div className="w-full bg-[#FAFBFD] text-slate-800 pb-20 font-sans selection:bg-[#F4B400] selection:text-[#081B44]">
      
      {/* ================================================
          SECTION 1: ABOUT HERO 
      ================================================ */}
      <section className="bg-[#0c1831] text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden border-b-4 border-[#F4B400]">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F4B400_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tight leading-tight mb-4 text-white">
              About <span className="text-[#F4B400]">Inturi Nageswara Rao</span>
            </h1>
            
            <div className="flex flex-col mb-8 text-[#F4B400] font-mono tracking-wider font-bold text-sm uppercase">
              <span>Member of Legislative Assembly</span>
              <span>Kandukur Constituency</span>
              <span>Andhra Pradesh</span>
            </div>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-10 max-w-xl">
              Inturi Nageswara Rao serves as the elected Member of the Legislative Assembly representing Kandukur Constituency. His journey reflects a strong connection with agriculture, business, and grassroots community engagement. Through public service, he remains committed to addressing local challenges, strengthening public infrastructure, and supporting long-term constituency development.
            </p>
            
            <button 
              onClick={() => {
                const el = document.getElementById('leadership-values');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-fit px-8 py-3.5 bg-[#F4B400] text-[#081B44] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#081B44] transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              View Leadership Philosophy
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in relative">
            <div className="w-full max-w-sm sm:max-w-md aspect-square relative overflow-visible bg-[#0c1831]">
              {/* Decorative glow behind the image since the background is removed */}
              <div className="absolute inset-0 bg-[#F4B400] blur-[100px] opacity-10 rounded-full" />
              
              <img 
                src={`${portraitImage}?v=2`} 
                alt="Portrait" 
                className="w-full h-full object-contain relative z-10 mix-blend-lighten" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 2: ROOTS & VALUES 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square md:aspect-[4/3] rounded-2xl bg-slate-200 border border-slate-300 flex flex-col items-center justify-center shadow-inner group overflow-hidden relative">
            <img 
              src="/gallery/activity-14.png" 
              alt="Party Worker Core Committee" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B44]/60 to-transparent pointer-events-none" />
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col">
            <span className="text-[#F4B400] text-xs font-mono font-black uppercase tracking-widest mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Early Life
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-6">
              Rooted in Community Values
            </h2>
            <div className="w-16 h-1 bg-[#F4B400] mb-8" />
            
            <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
              Born and raised with deep connections to rural Andhra Pradesh, Inturi Nageswara Rao's early experiences were shaped by agricultural life, hard work, and community responsibility. Growing up in a farming family environment helped build an understanding of the challenges faced by ordinary citizens, farmers, small business owners, and local communities.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              These values continue to influence his approach to public service, governance, and constituency engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 3: PROFESSIONAL BACKGROUND 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#081B44]/5 text-[#081B44] flex items-center justify-center mb-6 group-hover:bg-[#081B44] group-hover:text-white transition-colors">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase tracking-wide text-[#081B44] mb-4">Business</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Extensive experience in business operations and entrepreneurship, providing practical understanding of economic growth, employment, and local enterprise development.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#081B44]/5 text-[#081B44] flex items-center justify-center mb-6 group-hover:bg-[#081B44] group-hover:text-white transition-colors">
                <Sprout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase tracking-wide text-[#081B44] mb-4">Agriculture</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Strong agricultural background with firsthand knowledge of farming challenges, rural livelihoods, irrigation needs, and agricultural sustainability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAFBFD] rounded-2xl p-8 border border-slate-200 hover:border-[#F4B400]/50 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#081B44]/5 text-[#081B44] flex items-center justify-center mb-6 group-hover:bg-[#081B44] group-hover:text-white transition-colors">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-outfit uppercase tracking-wide text-[#081B44] mb-4">Community Engagement</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Long-standing interaction with local communities, enabling better understanding of public concerns and development priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 4: PUBLIC SERVICE JOURNEY 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Public Service Journey
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
        </div>

        <div className="relative border-l-4 border-slate-200 ml-6 md:ml-0 md:pl-0 md:flex md:flex-col md:items-center md:border-none">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 -ml-0.5 bg-slate-200" />

          {/* Timeline Item 1 */}
          <div className="mb-12 relative md:flex md:justify-between md:items-center md:w-full group">
            <div className="absolute -left-10 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-white border-4 border-[#F4B400] flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 bg-[#081B44] rounded-full" />
            </div>
            <div className="md:w-5/12 pl-6 md:pl-0 md:text-right pr-0 md:pr-10">
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Community & Local Engagement</h3>
              <p className="text-slate-600 font-light leading-relaxed bg-white md:bg-transparent p-4 md:p-0 rounded-xl border border-slate-100 md:border-none shadow-sm md:shadow-none">
                Active involvement in local community interactions and constituency-level public issues.
              </p>
            </div>
            <div className="hidden md:block md:w-5/12" />
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-12 relative md:flex md:justify-between md:items-center md:w-full group">
            <div className="absolute -left-10 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-white border-4 border-[#F4B400] flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 bg-[#081B44] rounded-full" />
            </div>
            <div className="hidden md:block md:w-5/12" />
            <div className="md:w-5/12 pl-6 md:pl-10 text-left">
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Public Leadership</h3>
              <p className="text-slate-600 font-light leading-relaxed bg-white md:bg-transparent p-4 md:p-0 rounded-xl border border-slate-100 md:border-none shadow-sm md:shadow-none">
                Strengthened connections with citizens through participation in public welfare discussions and community initiatives.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative md:flex md:justify-between md:items-center md:w-full group">
            <div className="absolute -left-10 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-white border-4 border-[#F4B400] flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 bg-[#081B44] rounded-full" />
            </div>
            <div className="md:w-5/12 pl-6 md:pl-0 md:text-right pr-0 md:pr-10">
              <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Legislative Representation</h3>
              <p className="text-slate-600 font-light leading-relaxed bg-white md:bg-transparent p-4 md:p-0 rounded-xl border border-slate-100 md:border-none shadow-sm md:shadow-none">
                Elected as Member of Legislative Assembly for Kandukur Constituency in 2024.
              </p>
            </div>
            <div className="hidden md:block md:w-5/12" />
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 5: LEADERSHIP VALUES 
      ================================================ */}
      <section id="leadership-values" className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Principles That Guide Public Service
            </h2>
            <div className="w-20 h-1 bg-[#F4B400]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-6 p-8 bg-[#FAFBFD] rounded-2xl border border-slate-200 hover:border-[#F4B400]/40 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#081B44] group-hover:text-[#F4B400] text-[#081B44] transition-all">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Transparency</h3>
                <p className="text-slate-600 font-light">Open communication and responsible governance.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-[#FAFBFD] rounded-2xl border border-slate-200 hover:border-[#F4B400]/40 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#081B44] group-hover:text-[#F4B400] text-[#081B44] transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Accountability</h3>
                <p className="text-slate-600 font-light">Commitment to public responsibility and measurable outcomes.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-[#FAFBFD] rounded-2xl border border-slate-200 hover:border-[#F4B400]/40 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#081B44] group-hover:text-[#F4B400] text-[#081B44] transition-all">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Accessibility</h3>
                <p className="text-slate-600 font-light">Maintaining strong connections with citizens and local communities.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-[#FAFBFD] rounded-2xl border border-slate-200 hover:border-[#F4B400]/40 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#081B44] group-hover:text-[#F4B400] text-[#081B44] transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit uppercase text-[#081B44] mb-2">Development Focus</h3>
                <p className="text-slate-600 font-light">Supporting long-term growth through infrastructure, education, healthcare, and agriculture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 6: VISION FOR PUBLIC SERVICE 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-[#0c1831] text-white relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#F4B400]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Target className="w-12 h-12 text-[#F4B400] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black font-outfit uppercase tracking-tight mb-8">
            A Commitment to <br />
            <span className="text-[#F4B400]">People-First Governance</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic">
            "Effective public leadership begins with understanding people, listening to communities, and working consistently toward meaningful progress. The objective remains to support inclusive development, strengthen local opportunities, and contribute to a better future for every citizen of Kandukur Constituency."
          </p>
        </div>
      </section>

      {/* ================================================
          SECTION 3: PROFESSIONAL BACKGROUND & TIMELINE
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#F4B400] mb-2">
              Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
              Professional Background
            </h3>
            <div className="w-16 h-1 bg-[#F4B400]" />
          </div>

          <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#081B44] text-[#F4B400] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#F4B400]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#F4B400] uppercase">{event.year}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-100 px-2 py-0.5 rounded">{event.category}</span>
                    </div>
                    <h4 className="font-outfit font-bold text-lg text-[#081B44] mb-2 leading-tight uppercase">{event.title}</h4>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 4: OFFICIAL PROFILE 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[#081B44] uppercase tracking-tight mb-4">
            Official Profile
          </h2>
          <div className="w-20 h-1 bg-[#F4B400]" />
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Name</div>
              <div className="md:col-span-2 text-lg font-bold text-[#081B44]">Inturi Nageswara Rao</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Position</div>
              <div className="md:col-span-2 text-lg text-slate-700">Member of Legislative Assembly</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Constituency</div>
              <div className="md:col-span-2 text-lg text-slate-700">Kandukur</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">State</div>
              <div className="md:col-span-2 text-lg text-slate-700">Andhra Pradesh</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Political Party</div>
              <div className="md:col-span-2 text-lg font-bold text-[#F4B400]">Telugu Desam Party (TDP)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Education</div>
              <div className="md:col-span-2 text-lg text-slate-500 italic">To be updated by MLA Office</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-0 md:pt-1">Official Biography</div>
              <div className="md:col-span-2 text-lg text-slate-500 italic">To be updated by MLA Office</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 8: MESSAGE TO CITIZENS 
      ================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-6xl font-serif text-[#F4B400] opacity-50 mb-4 block leading-none">"</span>
          <h3 className="text-2xl md:text-4xl font-outfit font-black text-[#081B44] leading-relaxed mb-10 tracking-tight">
            Public service is most meaningful when it remains connected to the aspirations, concerns, and progress of the people.
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-[#F4B400] mb-6" />
            <span className="font-outfit font-bold uppercase tracking-widest text-[#081B44] text-lg">
              Inturi Nageswara Rao
            </span>
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mt-2">
              MLA, Kandukur
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
