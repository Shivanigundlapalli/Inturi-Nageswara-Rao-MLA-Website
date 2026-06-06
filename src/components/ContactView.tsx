import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Users, FileUp, Send, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [grievanceSuccess, setGrievanceSuccess] = useState(false);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  const handleGrievanceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGrievanceSuccess(true);
    e.currentTarget.reset();
    setTimeout(() => setGrievanceSuccess(false), 4000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolunteerSuccess(true);
    e.currentTarget.reset();
    setTimeout(() => setVolunteerSuccess(false), 4000);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800 pb-20 animate-fade-in">
      
      {/* Hero Section */}
      <div className="bg-[#0b1a30] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a30] to-[#122a4f] opacity-90" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4 tracking-tight">
            Contact Office
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            Get in touch with the official MLA office for constituency matters, grievances, and volunteer opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* SECTION 1: Office Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0b1a30] mb-2">Office Address</h3>
            <p className="text-slate-500 text-sm">To be updated by MLA Office</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0b1a30] mb-2">Phone Number</h3>
            <p className="text-slate-500 text-sm">To be updated by MLA Office</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0b1a30] mb-2">Email Address</h3>
            <p className="text-slate-500 text-sm">To be updated by MLA Office</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* SECTION 2: Citizen Grievance Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-[#0b1a30] px-8 py-6 text-white flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold font-outfit">Citizen Grievance Form</h2>
            </div>
            <form className="p-8 space-y-5 relative" onSubmit={handleGrievanceSubmit}>
              {grievanceSuccess && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fade-in rounded-b-2xl">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1a30] mb-2">Grievance Submitted!</h3>
                  <p className="text-slate-500 text-center px-6">Your grievance has been securely recorded and forwarded to the MLA's office.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number *</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="10-digit mobile number" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Village / Town *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Your location in Kandukur constituency" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Brief subject of your grievance" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description *</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none" placeholder="Provide detailed information about your grievance..." required></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Document (Optional)</label>
                <label className="w-full px-4 py-3 rounded-lg border border-slate-300 border-dashed bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2 relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const span = e.currentTarget.nextElementSibling?.querySelector('span');
                        if (span) span.textContent = file.name;
                      }
                    }}
                  />
                  <div className="flex items-center gap-2 pointer-events-none">
                    <FileUp className="w-5 h-5 text-amber-500" />
                    <span className="text-sm text-slate-600 font-medium truncate max-w-[200px] md:max-w-[300px]">Click to upload supporting file</span>
                  </div>
                  <span className="text-[10px] text-slate-400 pointer-events-none">PDF, JPG, PNG (Max 5MB)</span>
                </label>
              </div>
              
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-[#0b1a30] font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Submit Grievance
              </button>
            </form>
          </div>

          {/* SECTION 3: Volunteer Registration */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-fit">
            <div className="bg-[#0b1a30] px-8 py-6 text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold font-outfit">Volunteer Registration</h2>
            </div>
            <form className="p-8 space-y-5 relative" onSubmit={handleVolunteerSubmit}>
              {volunteerSuccess && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fade-in rounded-b-2xl">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1a30] mb-2">Registration Successful!</h3>
                  <p className="text-slate-500 text-center px-6">Thank you for registering. Our team will contact you soon regarding volunteer opportunities.</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter your full name" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number *</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="10-digit mobile number" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Area *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Village / Mandal name" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Area of Interest *</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white" required>
                  <option value="" disabled selected>Select an interest area</option>
                  <option value="social_media">Social Media & IT</option>
                  <option value="event_management">Event Management</option>
                  <option value="public_relations">Public Relations</option>
                  <option value="campaigning">Ground Campaigning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button type="submit" className="w-full bg-[#0b1a30] hover:bg-[#122a4f] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mt-2">
                <Users className="w-5 h-5 text-amber-500" />
                Register as Volunteer
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
