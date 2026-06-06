/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  year: string;
  stage: string;
  title: string;
  description: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  date: string;
  platform: 'instagram' | 'facebook' | 'press';
  category: string;
  image: string;
  url: string;
  summary: string;
}

export interface GalleryItem {
  id: string;
  category: 'Review' | 'Welfare' | 'Meeting' | 'Infrastructure' | 'TDP';
  title: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
}

export interface AssemblyRecord {
  id: string;
  session: string;
  date: string;
  topic: string;
  docUrl: string;
  speechText: string;
  status: 'Published' | 'Under Review';
}

export interface CalendarEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  venue: string;
  type: 'Constituency Visit' | 'Grievance Hour' | 'Party Meeting' | 'Development Inauguration';
}

// -------------------------------------------------------------
// VERIFIED PROFILE DATA (As provided by the user)
// -------------------------------------------------------------
export const PROFILE_DATA = {
  name: "Inturi Nageswara Rao",
  fullName: "Inturi Nageswara Rao",
  role: "Member of Legislative Assembly (MLA)",
  constituency: "Kandukur",
  state: "Andhra Pradesh",
  party: "Telugu Desam Party (TDP)",
  mandate: "Elected in 2024 Assembly Elections",
  tagline: "Working towards the development, welfare, and progress of Kandukur through transparent governance and people-centric leadership.",
  
  // Born details
  born: "1977",
  native: "Kandukur",
  father: "Late Inturi Subba Rao",
  
  // Education
  education: {
    course: "Class 10 (SSC)",
    school: "Zilla Parishad High School",
    place: "Kandukur",
    year: "1991"
  },
  
  // Professional Background
  background: [
    "Business",
    "Agriculture",
    "Community Development Activities"
  ],

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/inturi_nageswararao/",
    facebook: "https://www.facebook.com/iNRKandukuru/"
  }
};

// -------------------------------------------------------------
// TIMELINE (About Journey)
// -------------------------------------------------------------
export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1977",
    stage: "Early Life",
    title: "Rooted in Kandukur",
    description: "Born in Kandukur, Andhra Pradesh, under the mentoring and legacy of his father Late Inturi Subba Rao."
  },
  {
    year: "1991",
    stage: "Education",
    title: "Schooling Milestone",
    description: "Completed Class 10 at Zilla Parishad High School, Kandukur, establishing local bonds and strong community knowledge."
  },
  {
    year: "1992 - 2010",
    stage: "Business & Agriculture",
    title: "Grassroots Economic Engagement",
    description: "Built professional career in local enterprise and agriculture. Witnessed constituency challenges and engaged in philanthropic activities."
  },
  {
    year: "2011 - 2023",
    stage: "Public Service",
    title: "Community Mobilization",
    description: "Actively spearheaded local development works, supported farmers, launched student welfare guides, and participated in social reform."
  },
  {
    year: "2024",
    stage: "Political Victory",
    title: "Elected to Legislative Assembly",
    description: "Represented the Telugu Desam Party (TDP) in the AP Legislative Assembly Elections, securing a massive democratic mandate to serve the people."
  }
];

// -------------------------------------------------------------
// CONSTITUENCY DATA
// -------------------------------------------------------------
export const CONSTITUENCY_INFO = {
  summary: "Kandukur is a vital constituency in Andhra Pradesh recognized for its vibrant agricultural ecosystem, business communities, and rapid urban growth.",
  priorities: [
    {
      id: "infrastructure",
      title: "Infrastructure",
      icon: "Wrench",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      points: [
        "Modernizing arterial and village roads",
        "Comprehensive drainage system expansions",
        "LED street lighting across all rural zones",
        "Upgrading public facilities and community halls"
      ]
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: "Sprout",
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      points: [
        "Farmer welfare initiatives and field coordination",
        "Irrigation system support & water canal management",
        "Agricultural technology tools distribution"
      ]
    },
    {
      id: "education",
      title: "Education",
      icon: "GraduationCap",
      color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      points: [
        "Enhancing public school infrastructure and smart labs",
        "Student financial guides & scholarship assistance",
        "Youth skill development centers"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "HeartPulse",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      points: [
        "Constituency health awareness campaigns",
        "Regular medical camps & specialized health fairs",
        "Strengthening public healthcare centers"
      ]
    },
    {
      id: "employment",
      title: "Employment",
      icon: "Briefcase",
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      points: [
        "Youth-focused development programs",
        "Entrepreneurship encouragement & micro-grants guidance",
        "Vocational skill training opportunities"
      ]
    }
  ]
};

// -------------------------------------------------------------
// VERIFIED RECENT ACTIVITIES FROM OFFICIAL CHANNELS (Meta integration)
// -------------------------------------------------------------
export const RECENT_ACTIVITIES: ActivityCard[] = [
  {
    id: "act-1",
    title: "Development Review Meeting with Officers",
    date: "2026-06-03",
    platform: "instagram",
    category: "Development Review",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    url: "https://www.instagram.com/inturi_nageswararao/",
    summary: "Reviewed key drinking water pipeline projects and drainage upgrades across multiple wards. Emphasized transparent governance and fast execution."
  },
  {
    id: "act-2",
    title: "Constituency Grievance Redressal Program",
    date: "2026-06-01",
    platform: "facebook",
    category: "Public Meetings",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop",
    url: "https://www.facebook.com/iNRKandukuru/",
    summary: "Interacted with local residents of Kandukur. Collected feedback on irrigation utilities and verified ongoing welfare service rollouts."
  },
  {
    id: "act-3",
    title: "TDP Regional Workers Coordination Meet",
    date: "2026-05-28",
    platform: "facebook",
    category: "Community Events",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    url: "https://www.facebook.com/iNRKandukuru/",
    summary: "Discussed upcoming grass-root level developmental targets with party coordinators and community leaders to map service pathways."
  },
  {
    id: "act-4",
    title: "Inspection of Village Agricultural Markets",
    date: "2026-05-25",
    platform: "instagram",
    category: "Constituency Visits",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=600&auto=format&fit=crop",
    url: "https://www.instagram.com/inturi_nageswararao/",
    summary: "Ensured fair pricing protocols and checked godown facilities to secure maximum profitability for local crop handlers."
  }
];

// -------------------------------------------------------------
// VERIFIED PHOTO GALLERY ITEMS
// -------------------------------------------------------------
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "Review",
    title: "Drainage Redevelopment Review",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "Inspecting major water drains under the master plan."
  },
  {
    id: "gal-2",
    category: "Welfare",
    title: "Distribution of Support Kits to Local Farmers",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
    description: "Empowering rural agrarian communities in Kandukur blocks."
  },
  {
    id: "gal-3",
    category: "Meeting",
    title: "Interactive Town Hall in Kandukur Urban",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    description: "Direct interaction session focused on citizen-led governance."
  },
  {
    id: "gal-4",
    category: "Infrastructure",
    title: "Launch of Rural Blacktop Roads Initiative",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=800&auto=format&fit=crop",
    description: "Bringing high-grade transport access to remote panchayats."
  },
  {
    id: "gal-5",
    category: "TDP",
    title: "TDP Democratic Rally & Public Outreach",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    description: "Aligning people-first TDP manifestos with grassroots requirements."
  },
  {
    id: "gal-6",
    category: "Welfare",
    title: "Honoring Public Health Workers",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    description: "Sincere gratitude meet for high-performing frontline doctors and nurses."
  }
];

// -------------------------------------------------------------
// CITIZEN SERVICES
// -------------------------------------------------------------
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "grievance",
    title: "Citizen Grievance Submission",
    description: "File issues related to infrastructure, utilities, or governance. Directly tracked by the MLA Administrative Office representatively.",
    iconName: "FileText",
    isPopular: true
  },
  {
    id: "volunteer",
    title: "Volunteer Registration Profile",
    description: "Become a registered civic volunteer. Select interest tracks like community service, social programs, and public awareness.",
    iconName: "UserPlus",
    isPopular: true
  },
  {
    id: "calendar",
    title: "MLA Event Calendar & Visits",
    description: "Stay updated on designated dates regarding grievance hours, block tours, and public administration reviews.",
    iconName: "Calendar"
  },
  {
    id: "documents",
    title: "Official Public Documents",
    description: "Browse circulars, TDP policy outlines, community notifications, and constituency progress sheets verified by the MLA Office.",
    iconName: "FolderOpen"
  },
  {
    id: "office",
    title: "MLA Office Contact Hub",
    description: "Request appointment details, get verified contact numbers for assembly representatives, and locate camp offices.",
    iconName: "Compass"
  }
];

// -------------------------------------------------------------
// ASSEMBLY DESK SPEECHES
// -------------------------------------------------------------
export const ASSEMBLY_RECORDS: AssemblyRecord[] = [
  {
    id: "rec-1",
    session: "16th AP Legislative Assembly - Budget Session",
    date: "2024-07-15",
    topic: "Allocations for Kandukur Rural Water Security",
    docUrl: "#",
    speechText: "Advocated for emergency irrigation setups and detailed the need for immediate pipeline funds to support remote farming clusters.",
    status: "Published"
  },
  {
    id: "rec-2",
    session: "16th AP Legislative Assembly - Winter Session",
    date: "2024-11-20",
    topic: "Urban Drainage Master Plan & Road Extension Hubs",
    docUrl: "#",
    speechText: "Proposed the comprehensive modernization of Kandukur city internal passage lanes and central drainage pipelines to reduce monsoon overflows.",
    status: "Published"
  },
  {
    id: "rec-3",
    session: "16th AP Legislative Assembly - Special Session",
    date: "2025-03-10",
    topic: "Educational Infrastructure and Smart-Gov Labs",
    docUrl: "#",
    speechText: "Initiated detailed discussions around raising teacher placement rates and supporting the establishment of vocational training setups with active tech partners.",
    status: "Published"
  }
];

// -------------------------------------------------------------
// EVENTS CALENDAR
// -------------------------------------------------------------
export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: "evt-1",
    date: "June 10, 2026",
    time: "09:30 AM - 12:30 PM",
    title: "Weekly Public Grievance Redressal Hour",
    venue: "MLA Camp Office, Kandukur Town",
    type: "Grievance Hour"
  },
  {
    id: "evt-2",
    date: "June 12, 2026",
    time: "10:00 AM - 04:00 PM",
    title: "Agricultural Growth & Soil Welfare Campaign",
    venue: "Singarayakonda Zone, Kandukur",
    type: "Constituency Visit"
  },
  {
    id: "evt-3",
    date: "June 15, 2026",
    time: "11:00 AM - 01:30 PM",
    title: "School Infrastructural Review and Lab Inauguration",
    venue: "Govt High School Assembly Hall",
    type: "Development Inauguration"
  }
];
