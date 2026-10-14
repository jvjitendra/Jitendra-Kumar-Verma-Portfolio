export const PERSONAL_INFO = {
  name: "Jitendra Kumar Verma",
  role: "Computer Science Student • Software & Full-Stack Builder",
  headline: "Architecting deterministic developer tools, intelligent agent systems, and resilient full-stack platforms.",
  bio: "Computer Science & Engineering student at Chandigarh University (2023–2026) with deep passion for software engineering, scalable backend systems, and full-stack development. Building deterministic developer tools, AST code engines, and responsive web platforms.",
  location: "Chandigarh, India",
  email: "jvjitendra.work@gmail.com",
  socials: {
    github: "https://github.com/jvjitendra",
    linkedin: "https://www.linkedin.com/in/jvjitendra",
    instagram: "https://www.instagram.com/jv_jitendra/",
  },
  photos: {
    hero: "/assets/curated/cu_formal_portrait.jpg",
    campusMilestone: "/assets/curated/cu_campus_milestone.jpg",
    campusSitting: "/assets/curated/hero_cu_sitting.jpg",
  }
};

// 5 HIGH-DEPTH FLAGSHIP PROJECTS WITH VERIFIED ARCHITECTURE
export const DETAILED_PROJECTS = [
  {
    id: "devpilot",
    title: "DevPilot",
    tagline: "Deterministic AI Developer Workspace & Verification Engine",
    badge: "8th Semester Capstone",
    semester: "Semester 8 (Final Year)",
    timeline: "2026 • Production",
    repoUrl: "https://github.com/jvjitendra/DevPilot",
    liveUrl: "https://dev-pilot-ten.vercel.app",
    featuredImage: "/assets/projects/devpilot.png",
    overview: "DevPilot replaces unguided, hallucination-prone code generation with a bounded 9-stage deterministic pipeline. It analyzes local repository AST trees, builds structured modification plans, runs isolated Pytest verification gates, and enforces human-in-the-loop review before any code touches the repository.",
    problem: "Conventional AI coding assistants frequently hallucinate project directories, introduce breaking syntax regressions, and exfiltrate entire source repositories over public network connections without developer safety controls.",
    architecture: "Dual-tier design: React/TypeScript client-side control hub interacting with a local FastAPI backend orchestration engine. Employs a 9-stage deterministic generation pipeline: AST context extraction → symbol table analysis → diff planning → sandboxed patch generation → Pytest harness validation → human approval gate.",
    highlights: [
      "Zero Code Exfiltration: Bounded local context analyzer",
      "9-Stage Deterministic Generation Pipeline",
      "Mandatory Human-in-the-Loop Verification Gate before applying patches",
      "Token encryption via AES/Fernet for multi-provider API keys"
    ],
    stack: ["FastAPI", "Python", "React", "TypeScript", "Vite", "AST Parser", "Pytest", "AES/Fernet Encryption"]
  },
  {
    id: "vaani",
    title: "Vaani AI Workspace",
    tagline: "Calm, Multi-Modal Thought Canvas & Conversational Intelligence",
    badge: "7th Semester System",
    semester: "Semester 7",
    timeline: "2025 • Deployed",
    repoUrl: "https://github.com/jvjitendra/vaani-ai-workspace",
    liveUrl: "https://vaani-ai-workspace-frontend.vercel.app/",
    featuredImage: "/assets/projects/vaani.png",
    overview: "Vaani is a celestial-themed workspace engineered for high-focus cognitive work, multi-model querying, voice interaction, and structured problem synthesis without notification friction.",
    problem: "Most AI interfaces are cluttered, high-anxiety chat streams filled with repetitive clutter, rigid linear threads, and harsh visual contrast that interrupt focused thought.",
    architecture: "React and Vite architecture featuring ambient canvas layers, dynamic prompt orchestration (Plan, Learn, Build, Research), real-time Web Audio API capture, and streaming token rendering.",
    highlights: [
      "Ambient cosmic visual language tuned for long night sessions",
      "Dynamic prompt orchestration engine with one-click intent switches",
      "Real-time voice input capture & streaming state feedback",
      "Integrated 'Neptune' focus presets and quick navigation shortcuts"
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Web Audio API", "Lucide Icons", "Vercel"]
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "High-Focus Task Lifecycle & Priority Management Platform",
    badge: "6th Semester Product",
    semester: "Semester 6",
    timeline: "2025 • Deployed",
    repoUrl: "https://github.com/jvjitendra/task-manager",
    liveUrl: "https://task-manager-frontend-tau-lemon.vercel.app",
    featuredImage: "/assets/projects/taskflow.png",
    overview: "A task management system engineered for clarity, state persistence, and streamlined workflow execution. Features server-side hashed authentication, organized priority lanes, and fluid state management.",
    problem: "Personal task tools often become bloated with over-engineered team settings, resulting in slow load times, complex interfaces, and poor mobile usability.",
    architecture: "Decoupled architecture: RESTful backend service with JWT authentication, robust password hashing, relational task status mappings, coupled with a responsive frontend featuring optimistic UI updates.",
    highlights: [
      "Server-side password hashing and secure token renewal cycles",
      "Optimistic UI updates for immediate priority reordering",
      "Clean minimal workspace design with zero cognitive overload",
      "Persistent session states with graceful offline fallbacks"
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT Auth", "REST API"]
  },
  {
    id: "flipkart-analytics",
    title: "Flipkart Sales Intelligence Dashboard",
    tagline: "Interactive Retail Analytics & Revenue Optimization Suite",
    badge: "5th Semester BI Suite",
    semester: "Semester 5",
    timeline: "2024 • Analytics",
    repoUrl: null,
    liveUrl: null,
    featuredImage: "/assets/projects/flipkart_analytics.jpg",
    overview: "A comprehensive business intelligence dashboard modeling Flipkart e-commerce transactional data. Built to extract actionable insights into category-level profit margins, customer return behaviors, regional demand spikes, and sales velocity.",
    problem: "Raw multi-table retail logs are unwieldy, containing inconsistent schemas, missing fulfillment markers, and fragmented buyer demographics that conceal loss-making product categories.",
    architecture: "Multi-stage Power Query ETL pipeline → Star schema data model with custom DAX measures for Year-over-Year (YoY) growth, customer churn rates, discount elasticity, and fulfillment efficiency KPIs.",
    highlights: [
      "Star schema data model connecting sales, logistics, returns, and customers",
      "Advanced DAX measures: moving averages, profit margin variances, return frequency",
      "Interactive drill-down cross-filtering across geographic territories and brands",
      "Data sanitation pipeline eliminating duplicated SKU identifiers"
    ],
    stack: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling", "Exploratory Data Analysis"]
  },
  {
    id: "user-management-api",
    title: "Enterprise User Management REST API",
    tagline: "High-Concurrence Scalable Backend Service with RBAC",
    badge: "4th Semester Backend",
    semester: "Semester 4",
    timeline: "2024 • Backend",
    repoUrl: null,
    liveUrl: null,
    featuredImage: "/assets/projects/user_mgmt_api.jpg",
    overview: "A robust backend service engineered for user authentication, hierarchical role-based access control (RBAC), and session auditing. Built with strict validation schemas and database transaction safety.",
    problem: "Academic backend projects frequently neglect edge cases like concurrent profile updates, unvalidated request bodies, SQL injection vulnerabilities, and proper password salting.",
    architecture: "Layered backend architecture: Controller Layer → Service Business Logic → DAO Data Access → Database Engine. Implements Argon2 / bcrypt hashing, rate limiting, and structured OpenAPI / Swagger documentation.",
    highlights: [
      "Granular RBAC with role inheritance (Superadmin, Admin, Auditor, Standard User)",
      "Strict data validation and sanitization using declarative Pydantic schemas",
      "Automated test suite covering unit endpoints and concurrency race conditions",
      "Comprehensive OpenAPI (Swagger) live interactive documentation"
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Pytest", "Swagger UI"]
  }
];

// High-impact technical competencies across SDE, Full-Stack & Systems
export const SKILL_GROUPS = [
  {
    category: "Languages & Core CS",
    description: "Core algorithms, data structures, and production languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "DSA", "OOP"]
  },
  {
    category: "Backend & Systems",
    description: "High-throughput, secure RESTful APIs & database architectures",
    skills: ["FastAPI", "Node.js", "Express", "REST APIs", "PostgreSQL", "SQLite", "SQLAlchemy", "JWT & Argon2", "RBAC"]
  },
  {
    category: "Frontend & Full-Stack UI",
    description: "Responsive, accessible, stateful web applications & interfaces",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API", "Optimistic UI", "Responsive Design"]
  },
  {
    category: "Data Analytics & BI",
    description: "Data modeling, business intelligence & interactive dashboards",
    skills: ["Power BI", "DAX Measures", "Star Schema", "ETL Pipelines", "Power Query", "Excel", "Data Sanitation"]
  },
  {
    category: "DevOps & Verification",
    description: "Testing integrity, sandboxed execution, and deployment",
    skills: ["Git & GitHub", "Pytest", "Postman", "Linux CLI", "AST Analysis", "Docker Basics", "Vercel"]
  }
];

// Complete Education details
export const EDUCATION_LIST = [
  {
    degree: "B.E. in Computer Science & Engineering (LEET)",
    school: "Chandigarh University",
    location: "Punjab, India",
    period: "2023 — 2026",
    grade: "CGPA: 7.32 / 10",
    leadershipRole: "Class Representative (CR) • 4 Consecutive Semesters",
    highlights: "Secured direct 2nd-year admission (Semester 3) as a Lateral Entry (LEET) engineering student following diploma merit. Balanced advanced computer science coursework with active student stewardship, serving as elected Class Representative (CR) across 4 consecutive semesters (Semesters 3, 4, 5 & 6) while ranking in Top 10 in university examinations in every semester.",
    points: [
      "Elected Class Representative (CR) continuously across 4 consecutive semesters (Semesters 3, 4, 5 & 6), driving student-faculty coordination, lab allocations, and deadline enforcement",
      "Secured direct 2nd-year entry via Lateral Entry (LEET), completing 4-year degree requirements in 3 academic years with zero backlogs",
      "Ranked in Top 10 in university examinations across all semesters (CGPA: 7.32 / 10)",
      "Coordinated directly with Department Heads (HOD) and senior professors for departmental hackathons, symposiums, and student initiatives"
    ],
    photo: "/assets/curated/cu_campus_milestone.jpg",
    sittingPhoto: "/assets/curated/hero_cu_sitting.jpg"
  },
  {
    degree: "Diploma in Engineering",
    school: "Aryan Institute of Engineering & Technology (AIET)",
    location: "Bhubaneswar, Odisha",
    period: "Completed in 2023",
    grade: "Score: 71.81%",
    leadershipRole: "Class Representative (CR) • All 3 Years",
    highlights: "Served as the elected Class Representative (CR) across all 3 years for his section. Managed student-faculty coordination, departmental laboratory sessions, and major college events with high commendation from the Principal and Department HOD.",
    points: [
      "Elected Class Representative (CR) across all 3 academic years (6 semesters) for his section, coordinating schedules, assignments, and faculty communication",
      "Ranked in Top 5 students across the entire engineering cohort (Score: 71.81%) with consistent academic standing",
      "Spearheaded organization of departmental cultural functions, technical events, and student symposiums with high commendation from the Principal and HOD",
      "Maintained 100% operational discipline, student advocacy, and flawless laboratory coordination"
    ],
    photo: null,
    sittingPhoto: null
  },
  {
    degree: "Secondary School Examination (Class X)",
    school: "Bharat Singh Public School",
    location: "Bokaro, Jharkhand",
    period: "CBSE Board",
    grade: "CGPA: 8.2 / 10",
    leadershipRole: "Gandhi House Captain & Head",
    highlights: "Enrolled in Class 4 and maintained continuous academic excellence and leadership through Class 10. Selected as Gandhi House Captain to head student council activities and lead inter-house competitions.",
    points: [
      "Appointed Gandhi House Captain & Head: led student body council, organized annual sports, cultural fests, and inter-house debates",
      "Maintained Top 5 academic standing consecutively from Class 6 through Class 10",
      "Achieved CGPA: 8.2 / 10 in CBSE Class X Board Examination with distinction in Mathematics and Science",
      "Awarded multiple school recognitions for disciplined conduct, event coordination, and team leadership"
    ],
    photo: null,
    sittingPhoto: null
  }
];

// All 9 travel & motorcycle lifestyle photographs (No repetition)
export const TRAVEL_GALLERY_ALL = [
  {
    id: "t-1",
    title: "Midnight Monochrome",
    tag: "Chandigarh, India",
    src: "/assets/gallery/01_streetwear_mirror.jpg",
    caption: "Late-night build sessions and casual downtime in Chandigarh. Unwinding between deep terminal sprints."
  },
  {
    id: "t-2",
    title: "Mountain Ridges & Clear Skies",
    tag: "Mussoorie, Uttarakhand, India",
    src: "/assets/gallery/02_mussoorie_ridge.jpg",
    caption: "High-ridge overlook by the Queen of Hills in Mussoorie. Clear mountain horizons to reset perspective."
  },
  {
    id: "t-3",
    title: "Highway Tunnel Expedition",
    tag: "Barog Tunnel, Himachal Pradesh",
    src: "/assets/gallery/03_tunnel_bike.jpg",
    caption: "Early morning solo motorcycle ride cruising through the mountain pass of Barog Tunnel. Pure rhythm and road ahead."
  },
  {
    id: "t-4",
    title: "Off-Road Himalayan Trails",
    tag: "Kasol, Parvati Valley, Himachal Pradesh",
    src: "/assets/gallery/04_enfield_mountain.jpg",
    caption: "Riding the Royal Enfield through unpaved hillside trails in Kasol, Parvati Valley. Demands patience, balance, and quiet focus."
  },
  {
    id: "t-5",
    title: "Rock Garden Sculpture Trails",
    tag: "Rock Garden, Chandigarh, India",
    src: "/assets/gallery/05_rock_garden_chandigarh.jpg",
    caption: "Wandering through the iconic stone mosaic corridors and open courtyards of Rock Garden on a sunny afternoon."
  },
  {
    id: "t-6",
    title: "Sunny Roadside Pitstop",
    tag: "Shimla, Himachal Pradesh",
    src: "/assets/gallery/06_sunny_highway.jpg",
    caption: "Quick roadside breather under bright blue skies along the winding pine highway of Shimla."
  },
  {
    id: "t-7",
    title: "Highland Breeze & Altitude",
    tag: "Chail, Himachal Pradesh",
    src: "/assets/gallery/07_outdoor_mountain_shot.jpg",
    caption: "Standing high above the cloudline on the peaceful pine ridges of Chail with endless valley views."
  },
  {
    id: "t-8",
    title: "The Alpine Ridge Corridor",
    tag: "Jibhi, Himachal Pradesh",
    src: "/assets/gallery/09_highway_landscape.jpg",
    caption: "Sweeping green alpine ridges and winding mountain passes cutting through the highland beauty of Jibhi."
  },
  {
    id: "t-9",
    title: "Valley Mist & Pine Slopes",
    tag: "Manali, Himachal Pradesh",
    src: "/assets/gallery/05_misty_valley.jpg",
    caption: "Cool morning valley mist rising through the dense pine and deodar forests of Manali. Disconnecting to recharge clarity."
  }
];

// Interactive Bot Knowledge Base with verified cross-checking
export const BOT_CROSS_CHECK = {
  greetings: "Hi! I'm Jitendra's verified portfolio assistant. I can answer questions about his software engineering projects, tech stack, suitable job roles, academic standing, or direct contact info. What would you like to explore?",
  roles: "💻 **Technical Capabilities & Practical Focus**:\n• **Software Developer & Full-Stack Builder**: Practical experience building responsive web platforms with React, TypeScript, FastAPI, and Node.js.\n• **Backend & Systems Software**: Designing high-throughput REST APIs, relational database schemas, Argon2 security, and Pytest verification.\n• **Data Analytics & BI**: Business intelligence dashboards with Power BI, Star Schema, and DAX modeling.\n\n🌟 **Academic & Leadership Standing**: 3 live deployed platforms, elected Class Representative (CR) across both colleges, and top 10 examination rank in every semester.",
  devpilot: "🛠️ **DevPilot (8th Sem Final Year Capstone)**:\n• Deterministic AI developer workspace.\n• Uses local AST parsing and isolated Pytest verification gates.\n• Mandatory human-in-the-loop review before any patch is applied.\n• Zero code exfiltration with 100% local FastAPI backend execution.",
  vaani: "🌌 **Vaani AI Workspace (7th Sem)**:\n• Ambient celestial-themed AI workspace.\n• Real-time voice capture via Web Audio API.\n• Dynamic intent switching (Plan, Learn, Build, Research) with ultra-fast token streaming.",
  taskflow: "📋 **TaskFlow (6th Sem)**:\n• High-focus task and priority lifecycle platform.\n• Server-side hashed authentication (JWT) with optimistic UI updates for instant drag-and-drop feedback.",
  flipkart: "📊 **Flipkart Sales Intelligence (5th Sem)**:\n• Business intelligence dashboard modeling transactional retail data.\n• Power BI Star Schema, DAX metrics (YoY growth, margin variances, return frequencies).",
  usermgmt: "🔐 **Enterprise User Management REST API (4th Sem)**:\n• High-concurrency backend built with FastAPI, PostgreSQL, and SQLAlchemy.\n• Hierarchical Role-Based Access Control (RBAC), Argon2 password hashing, and live Swagger documentation.",
  education: "🎓 **Academic & Leadership Background**:\n1. **Chandigarh University**: B.E. Computer Science (2023–2026, CGPA: 7.32/10). Admitted as LEET student, elected Class Representative (CR) for 4 consecutive semesters (3rd–6th), top 10 examination rank in every semester.\n2. **AIET Bhubaneswar**: Diploma in Engineering (Completed in 2023, Score: 71.81%). Elected Class Representative (CR) all 3 years, top 5 cohort rank.\n3. **Bharat Singh Public School**: CBSE Class 10 (CGPA: 8.2/10). Elected Gandhi House Captain & Head, top 5 rank Classes 6–10.",
  location: "📍 **Hometown & Current Base**:\n• **Hometown & Roots**: Ranchi, Jharkhand, India.\n• **Current Academic Base**: Chandigarh University, Punjab.\n• **Relocation & Availability**: Open to on-site, hybrid, and remote software engineering opportunities across India (Bengaluru, Hyderabad, Pune, Gurugram, Noida).",
  stack: "⚡ **Core Technical Stack**:\n• **Languages**: Python, TypeScript, JavaScript, SQL, Java, C++\n• **Backend**: FastAPI, Node.js, Express, REST APIs, PostgreSQL, SQLite, SQLAlchemy, JWT Auth\n• **Frontend**: React, Vite, Tailwind CSS, Web Audio API\n• **Data & BI**: Power BI, DAX, Star Schema, Power Query\n• **DevOps & Verification**: Git & GitHub, Pytest, Postman, Linux CLI",
  contact: "📬 **Contact Jitendra**:\n• **Email**: jvjitendra.work@gmail.com\n• **LinkedIn**: linkedin.com/in/jvjitendra\n• **GitHub**: github.com/jvjitendra\n• **Instagram**: @jv_jitendra",
  default: "I can verify any detail on this page! You can ask about **Software Projects**, **DevPilot**, **Vaani**, **TaskFlow**, **Flipkart Analytics**, **Tech Stack**, **Education & Leadership**, **Hometown (Ranchi)**, or **Contact info**."
};
