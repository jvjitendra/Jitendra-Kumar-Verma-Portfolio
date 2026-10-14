export const PERSONAL_INFO = {
  name: "Jitendra Kumar Verma",
  role: "Software Engineer & Product Builder",
  headline: "Building high-performance developer tools, ambient AI workspaces, and reliable web software.",
  bio: "Full-stack engineer passionate about developer experience, autonomous workflows, and distributed systems. Turning challenging problems into polished, production-ready products.",
  location: "Chandigarh, India",
  email: "jvjitendra.work@gmail.com",
  socials: {
    github: "https://github.com/jvjitendra",
    linkedin: "https://www.linkedin.com/in/jvjitendra",
    instagram: "https://www.instagram.com/jv_jitendra/",
  },
  photos: {
    hero: "/assets/curated/hero_cu_sitting.jpg",
    collegeFull: "/assets/curated/cu_campus_milestone.jpg",
  }
};

// ONLY THE TOP 3 FLAGSHIP PROJECTS - High Signal, Zero Fluff
export const FLAGSHIP_PROJECTS = [
  {
    id: "devpilot",
    title: "DevPilot",
    tagline: "Deterministic AI Developer Workspace & Verification Engine",
    badge: "Flagship Product",
    period: "2026 • 8th Sem Capstone",
    repoUrl: "https://github.com/jvjitendra/DevPilot",
    liveUrl: "https://dev-pilot-ten.vercel.app",
    featuredImage: "/assets/projects/devpilot.png",
    description: "An AI-powered development workspace designed for safe, deterministic code changes. Instead of unguided generative guessing, DevPilot parses codebase ASTs, creates structured diff plans, verifies changes with test harnesses, and enforces human approval gates before writing code.",
    highlights: [
      "Zero code exfiltration with local FastAPI context processing",
      "9-stage deterministic pipeline from AST parsing to patch generation",
      "Mandatory human review gate before patches apply to project trees",
      "End-to-end token encryption (AES/Fernet) for API provider keys"
    ],
    stack: ["FastAPI", "Python", "React", "TypeScript", "Vite", "AST Parser", "Pytest"]
  },
  {
    id: "vaani",
    title: "Vaani AI Workspace",
    tagline: "Calm, Multi-Modal Thought Canvas & AI Environment",
    badge: "Interactive AI",
    period: "2025 • 7th Sem",
    repoUrl: "https://github.com/jvjitendra/vaani-ai-workspace",
    liveUrl: "https://vaani-ai-workspace.vercel.app",
    featuredImage: "/assets/projects/vaani.png",
    description: "A calm, celestial-themed AI workspace built to eliminate conversation clutter and cognitive fatigue. Features real-time voice input, dynamic prompt presets (Plan, Learn, Build, Research), and responsive token streaming.",
    highlights: [
      "Distraction-free ambient workspace tuned for deep evening work",
      "One-click intent switching for instant context adaptation",
      "Real-time voice input capture using Web Audio API",
      "Ultra-low latency streaming response rendering"
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Web Audio API", "Vercel"]
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "High-Focus Task Lifecycle & Priority Management Platform",
    badge: "Full-Stack App",
    period: "2025 • 6th Sem",
    repoUrl: "https://github.com/jvjitendra/task-manager",
    liveUrl: "https://task-manager-frontend-tau-lemon.vercel.app",
    featuredImage: "/assets/projects/taskflow.png",
    description: "A streamlined task and priority management tool built for clarity and speed. Engineered with secure server-side authentication, relational state mappings, and optimistic UI updates for instant interaction feedback.",
    highlights: [
      "Server-side password hashing and secure JWT authentication cycles",
      "Optimistic UI updates for instant task status reordering",
      "Zero-bloat minimalist workspace with persistent session states",
      "Mobile-responsive touch controls and clean keyboard shortcuts"
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT Auth", "REST API"]
  }
];

// High-impact skills overview for fast recruiter scanning
export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"]
  },
  {
    name: "Backend & Systems",
    skills: ["FastAPI", "RESTful APIs", "PostgreSQL", "SQLite", "SQLAlchemy", "JWT & Auth"]
  },
  {
    name: "Frontend & UI",
    skills: ["React", "Vite", "Tailwind CSS", "HTML5 & Web APIs", "Responsive Design"]
  },
  {
    name: "Tools & Verification",
    skills: ["Git & GitHub", "Docker Basics", "Pytest", "Postman", "Linux CLI"]
  }
];

// Clean Education Journey
export const EDUCATION_DATA = [
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "Chandigarh University",
    location: "Punjab, India",
    period: "2023 — 2026",
    grade: "CGPA: 7.32 / 10",
    note: "Lateral Entry (LEET) into 3rd Semester. Ranked in top 10 examination performers.",
    photo: "/assets/curated/cu_campus_milestone.jpg"
  },
  {
    degree: "Diploma in Engineering (Computer Science)",
    school: "Aryan Institute of Engg. & Technology (AIET)",
    location: "Bhubaneswar, Odisha",
    period: "2020 — 2023",
    grade: "71.81% (Top 5 cohort rank)",
    note: "Built core fundamentals in C/C++, Java, DBMS, and network architectures.",
    photo: null
  },
  {
    degree: "Secondary School (Class X)",
    school: "Bharat Singh Public School",
    location: "Bokaro, Jharkhand",
    period: "CBSE Board",
    grade: "CGPA: 8.2 / 10",
    note: "Consistently among the top three academic performers from Classes 6 to 10.",
    photo: null
  }
];

// Curated Travel & Beyond The Code Gallery (No repeated images)
export const BEYOND_CODE_GALLERY = [
  {
    id: "g-1",
    title: "Midnight Monochrome",
    tag: "Late Night Sprints",
    src: "/assets/gallery/01_streetwear_mirror.jpg",
    caption: "Casual moments between long coding sessions and building products."
  },
  {
    id: "g-2",
    title: "Mountain Ridges & Clear Skies",
    tag: "Highland Escapes",
    src: "/assets/gallery/02_mussoorie_ridge.jpg",
    caption: "Heading up to the hills to clear the head and reset focus."
  },
  {
    id: "g-3",
    title: "Highway Tunnel Ride",
    tag: "Two Wheels & Open Roads",
    src: "/assets/gallery/03_tunnel_bike.jpg",
    caption: "Early morning solo ride through mountain highway tunnels."
  },
  {
    id: "g-4",
    title: "Himalayan Enfield Trails",
    tag: "Mountain Riding",
    src: "/assets/gallery/04_enfield_mountain.jpg",
    caption: "Taking the Royal Enfield through rugged mountain roads."
  },
  {
    id: "g-5",
    title: "Valley Mist & Pine Valleys",
    tag: "Quiet Horizons",
    src: "/assets/gallery/05_misty_valley.jpg",
    caption: "Foggy mountain morning pause before heading back to the terminal."
  },
  {
    id: "g-6",
    title: "Sunny Roadside Pitstop",
    tag: "Roadtrips & Sunshine",
    src: "/assets/gallery/06_sunny_highway.jpg",
    caption: "Mid-ride pitstop on a bright northern highway corridor."
  }
];

// Interactive Bot Knowledge Base for instant recruiter Q&A
export const BOT_KNOWLEDGE = {
  greetings: "Hi there! I'm Jitendra's AI assistant. Ask me anything about his projects, technical stack, background, or how to get in touch!",
  projects: "Jitendra's top 3 flagship projects are:\n1. 🛠️ **DevPilot**: AI developer workspace with deterministic AST parsing and verification gates (FastAPI + React).\n2. 🌌 **Vaani**: Calm cosmic AI workspace with voice interaction and dynamic intents.\n3. 📋 **TaskFlow**: Full-stack task management platform with JWT auth and optimistic UI updates.",
  stack: "Jitendra specializes in:\n• **Languages**: Python, TypeScript, JavaScript, SQL, Java, C++\n• **Backend**: FastAPI, REST APIs, PostgreSQL, SQLite, SQLAlchemy\n• **Frontend**: React, Vite, Tailwind CSS\n• **Tooling**: Git, Pytest, Postman, Linux",
  education: "Jitendra is completing his B.E. in Computer Science at Chandigarh University (2023–2026, LEET entry, CGPA 7.32/10). Previously, he graduated with a Diploma in Engineering from AIET Bhubaneswar with 71.81% (top 5 rank).",
  contact: "You can reach Jitendra directly at **jvjitendra.work@gmail.com**, or connect with him on LinkedIn (in/jvjitendra) and GitHub (@jvjitendra)!",
  default: "I can help you explore Jitendra's work! Try asking about his **top projects**, **tech stack**, **education**, or **contact info**."
};
