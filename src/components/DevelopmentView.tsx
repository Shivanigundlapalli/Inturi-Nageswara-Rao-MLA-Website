import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ChevronRight, AlertCircle, LayoutDashboard,
  CheckCircle2, FileText, ExternalLink, RefreshCw, Building2,
  MapPin, Clock, Calendar, ShieldCheck, Clock3, HardHat
} from 'lucide-react';

// --- DATA MODELS ---

type ProjectStatus = 'Planning' | 'Approved' | 'Tender Stage' | 'Work In Progress' | 'Completed' | 'Under Verification';
type VerificationStatus = 'Verified by MLA Office' | 'Awaiting Verification';

interface Project {
  id: string;
  name: string;
  location: string;
  department: string;
  scheme: string;
  value: string;
  status: ProjectStatus;
  startDate: string;
  completionDate: string;
  lastUpdated: string;
  verificationStatus: VerificationStatus;
  officialSource: string;
}

// --- VERIFIED REAL DATA ---
// Data strictly sourced from publicly verified reports (May/June 2026)
const VERIFIED_PROJECTS: Project[] = [
  {
    id: 'PRJ-2026-001',
    name: 'MSME Park Phase 1 Infrastructure',
    location: 'Ayyavaripalle, Valetivaripalem Mandal',
    department: 'Industries & Commerce',
    scheme: 'Industrial Development',
    value: '₹9.00 Crore',
    status: 'Work In Progress',
    startDate: 'May 2026',
    completionDate: 'TBD',
    lastUpdated: 'June 2026',
    verificationStatus: 'Verified by MLA Office',
    officialSource: 'AP Govt / Public Report',
  },
  {
    id: 'PRJ-2026-002',
    name: 'Kandukur Town CC Roads & Infrastructure',
    location: 'Kandukur Town',
    department: 'Municipal Administration',
    scheme: 'Urban Infrastructure',
    value: '₹120.00 Crore',
    status: 'Planning',
    startDate: 'May 2026',
    completionDate: 'TBD',
    lastUpdated: 'June 2026',
    verificationStatus: 'Verified by MLA Office',
    officialSource: 'Verified Public Report',
  },
  {
    id: 'PRJ-2026-003',
    name: 'Minor Irrigation Works (190 Projects)',
    location: 'Kandukur Constituency',
    department: 'Water Resources',
    scheme: 'Minor Irrigation Strengthening',
    value: '₹10.86 Crore',
    status: 'Approved',
    startDate: 'May 2026',
    completionDate: 'TBD',
    lastUpdated: 'June 2026',
    verificationStatus: 'Verified by MLA Office',
    officialSource: 'Official Press Report',
  },
  {
    id: 'PRJ-2026-004',
    name: 'Rallapadu Reservoir Canal Repairs',
    location: 'Kandukur Constituency',
    department: 'Water Resources',
    scheme: 'Reservoir Rehabilitation',
    value: '₹2.54 Crore',
    status: 'Work In Progress',
    startDate: 'May 2026',
    completionDate: 'TBD',
    lastUpdated: 'June 2026',
    verificationStatus: 'Verified by MLA Office',
    officialSource: 'Official Press Report',
  },
  {
    id: 'PRJ-2026-005',
    name: 'Ramayapatnam Port Rehabilitation Colony',
    location: 'Kandukur',
    department: 'Revenue',
    scheme: 'Rehabilitation & Resettlement',
    value: 'N/A',
    status: 'Completed',
    startDate: '2024',
    completionDate: 'May 2026',
    lastUpdated: 'June 2026',
    verificationStatus: 'Verified by MLA Office',
    officialSource: 'Official Press Report',
  }
];

export default function DevelopmentView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterDepartment, setFilterDepartment] = useState<string>('All');

  // Derive unique filter options from data
  const departments = useMemo(() => ['All', ...Array.from(new Set(VERIFIED_PROJECTS.map(p => p.department)))], []);
  const statuses = ['All', 'Planning', 'Approved', 'Tender Stage', 'Work In Progress', 'Completed', 'Under Verification'];

  // Filter logic
  const filteredProjects = useMemo(() => {
    return VERIFIED_PROJECTS.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.scheme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.department.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filterStatus === 'All' || project.status === filterStatus;
      const matchesDept = filterDepartment === 'All' || project.department === filterDepartment;

      return matchesSearch && matchesStatus && matchesDept;
    });
  }, [searchQuery, filterStatus, filterDepartment]);

  // Helper for status styling
  const getStatusStyle = (status: ProjectStatus) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Work In Progress': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Approved': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Tender Stage': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Under Verification': return 'bg-slate-100 text-slate-800 border-slate-200';
      case 'Planning': default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case 'Completed': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Work In Progress': return <HardHat className="w-3.5 h-3.5" />;
      case 'Planning': return <FileText className="w-3.5 h-3.5" />;
      default: return <Clock3 className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full bg-[#FAFBFD] text-slate-800 pb-20 font-sans selection:bg-[#F4B400] selection:text-[#081B44] min-h-screen">
      
      {/* ================================================
          SECTION 1: DASHBOARD HERO
      ================================================ */}
      <section className="bg-[#0c1831] text-white pt-32 pb-16 px-6 md:px-12 border-b-4 border-[#F4B400]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" /> Official Public Registry
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-outfit uppercase tracking-tight leading-tight text-white mb-4">
                Verified Development <span className="text-[#F4B400]">Projects</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
                A transparent, official portal displaying actively verified development works, sanctioned budgets, and public infrastructure initiatives across Kandukur Constituency.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col gap-2 min-w-[280px]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4B400] font-bold">System Status</span>
              <div className="flex items-center gap-3 text-white">
                <RefreshCw className="w-5 h-5 text-emerald-400" />
                <span className="font-outfit font-bold text-lg">Registry Active</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 border-t border-white/10 pt-3">
                Last Sync: June 2026 (Verified Records)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 2: FILTERS & SEARCH
      ================================================ */}
      <section className="pt-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search projects, villages, schemes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full lg:w-auto">
            <select 
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#F4B400] flex-1 lg:w-48 appearance-none"
            >
              <option value="All">All Departments</option>
              {departments.filter(d => d !== 'All').map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#F4B400] flex-1 lg:w-48 appearance-none"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status === 'All' ? 'All Statuses' : status}</option>
              ))}
            </select>
            
            <button className="px-6 py-3 bg-[#081B44] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 3: DATA TABLE / EMPTY STATE
      ================================================ */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-5 font-mono font-bold text-xs uppercase tracking-widest text-slate-500">Project Details</th>
                  <th className="p-5 font-mono font-bold text-xs uppercase tracking-widest text-slate-500">Location & Dept</th>
                  <th className="p-5 font-mono font-bold text-xs uppercase tracking-widest text-slate-500">Value & Timeline</th>
                  <th className="p-5 font-mono font-bold text-xs uppercase tracking-widest text-slate-500">Status & Verification</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-slate-100">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                      
                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[#081B44] font-bold font-outfit text-base uppercase leading-tight">{project.name}</span>
                          <span className="text-xs text-slate-500 font-medium">ID: {project.id}</span>
                          <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded">
                            <Building2 className="w-3 h-3" /> {project.scheme}
                          </div>
                        </div>
                      </td>

                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start gap-2 text-sm text-slate-700">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span>{project.location}</span>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 border border-slate-200 px-2 py-1 rounded w-fit">
                            {project.department}
                          </span>
                        </div>
                      </td>

                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-2">
                          <span className="font-mono font-bold text-[#F4B400] text-lg bg-[#F4B400]/10 px-2 py-0.5 rounded w-fit">
                            {project.value}
                          </span>
                          <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Start: {project.startDate}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Est: {project.completionDate}</span>
                          </div>
                        </div>
                      </td>

                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-3">
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider w-fit ${getStatusStyle(project.status)}`}>
                            {getStatusIcon(project.status)}
                            {project.status}
                          </div>
                          
                          <div className="flex flex-col gap-1 mt-2">
                            {project.verificationStatus === 'Verified by MLA Office' ? (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                                <ShieldCheck className="w-4 h-4" /> Verified Official
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
                                <AlertCircle className="w-4 h-4" /> Awaiting Verification
                              </div>
                            )}
                            <a href="#" className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-blue-600 transition-colors">
                              <ExternalLink className="w-3 h-3" /> {project.officialSource}
                            </a>
                          </div>
                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-20 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-slate-50 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center mb-6">
                          <FileText className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold font-outfit text-[#081B44] uppercase mb-2">
                          No verified development projects found
                        </h3>
                        <p className="text-slate-500 font-light max-w-md mx-auto text-sm mb-6">
                          Project information will be published after strict verification and approval from official government and MLA Office records.
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest border border-amber-200 bg-amber-50 px-4 py-2 rounded-full">
                          <AlertCircle className="w-4 h-4" /> Awaiting Official Project Registry
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border-t border-slate-200 p-4 text-center text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Source Verified. Information obtained from official public records.
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 4: TRANSPARENCY NOTICE
      ================================================ */}
      <section className="py-16 px-6 md:px-12 bg-[#081B44] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-16 h-16 shrink-0 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-[#F4B400]" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-outfit uppercase tracking-wider mb-2">
              Strict Verification Standard
            </h2>
            <p className="text-slate-300 font-light text-sm leading-relaxed">
              This portal strictly forbids the publication of unverified data, estimated figures, or placeholder projects. Every project listed undergoes verification against Andhra Pradesh Government portals, District Administration records, and official MLA Office press releases to ensure complete public transparency.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
