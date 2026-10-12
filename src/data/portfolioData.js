export const PERSONAL_INFO = {
  name: "Jitendra Kumar Verma",
  role: "Software Engineer & Product Builder",
  headline: "Engineering deterministic developer tools, autonomous agent systems, and resilient backend architectures.",
  bio: "Full-stack engineer specializing in developer infrastructure, AST-bounded code workflows, and high-concurrency systems. Focused on transforming theoretical logic into dependable, production-ready software.",
  location: "Chandigarh, India",
  email: "jvjitendra.work@gmail.com",
  socials: {
    github: "https://github.com/jvjitendra",
    linkedin: "https://www.linkedin.com/in/jvjitendra",
    instagram: "https://www.instagram.com/jv_jitendra/",
  },
  photos: {
    hero: "/assets/curated/cu_formal_portrait.jpg",
    collegeFull: "/assets/curated/cu_campus_milestone.jpg",
  }
};

export const PROJECTS_DATA = [
  {
    id: "devpilot",
    title: "DevPilot",
    tagline: "Deterministic AI-Powered Developer Workspace & Workflow Engine",
    category: "AI & Developer Tools",
    status: "Working & Deployed",
    badge: "8th Sem Capstone",
    semester: "Semester 8 (Final Year)",
    timeline: "2026",
    repoUrl: "https://github.com/jvjitendra/DevPilot",
    liveUrl: "https://dev-pilot-ten.vercel.app",
    featuredImage: "/assets/projects/devpilot.png",
    overview: "DevPilot is an AI developer workspace engineered for deterministic code generation and bounded execution. Replaces unguided code hallucination with strict repository AST parsing, structured implementation planning, AES/Fernet encrypted token storage, and isolated verification gates with mandatory human review.",
    problem: "Generic AI assistants frequently hallucinate file paths, break existing syntax, and exfiltrate codebase context over open channels without safety boundaries.",
    architecture: "Dual-tier design: React/TypeScript client-side control hub interacting with a local FastAPI backend orchestration engine. Employs a 9-stage deterministic generation pipeline: AST context extraction → symbol table analysis → diff planning → sandboxed patch generation → Pytest harness validation → human approval gate.",
    stack: ["FastAPI", "Python", "React", "TypeScript", "Vite", "AST Parser", "Pytest", "AES/Fernet Encryption"],
    highlights: [
      "Zero Code Exfiltration: Bounded local context analyzer",
      "9-Stage Deterministic Generation Pipeline",
      "Mandatory Human-in-the-Loop Verification Gate before applying patches",
      "Token encryption via AES/Fernet for multi-provider API keys"
    ],
    challenges: "Building deterministic patch verification requires resolving conflicting diff contexts and handling diverse project directory topologies without inducing syntax regressions.",
    metrics: "100% Local FastAPI execution option; strict zero-leakage security boundaries."
  },
  {
    id: "vaani",
    title: "Vaani AI Workspace",
    tagline: "Calm, Multi-Modal Thought Canvas & Conversational Intelligence",
    category: "AI & Intelligent Systems",
    status: "Working & Deployed",
    badge: "7th Sem Advanced System",
    semester: "Semester 7",
    timeline: "2025",
    repoUrl: "https://github.com/jvjitendra/vaani-ai-workspace",
    liveUrl: "https://vaani-ai-workspace.vercel.app",
    featuredImage: "/assets/projects/vaani.png",
    overview: "Vaani is a celestial-themed workspace engineered for high-focus cognitive work, multi-model querying, voice interaction, and structured problem synthesis without notification friction.",
    problem: "Most AI interfaces are cluttered, high-anxiety chat streams filled with repetitive clutter, rigid linear threads, and harsh visual contrast that interrupt focused thought.",
    architecture: "React and Vite architecture featuring ambient canvas layers, dynamic prompt orchestration (Plan, Learn, Build, Research), real-time Web Audio API capture, and streaming token rendering.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Web Audio API", "Lucide Icons", "Vercel"],
    highlights: [
      "Ambient cosmic visual language tuned for long night sessions",
      "Dynamic prompt orchestration engine with one-click intent switches",
      "Real-time voice input capture & streaming state feedback",
      "Integrated 'Neptune' focus presets and quick navigation shortcuts"
    ],
    challenges: "Maintaining high-performance smooth particle and planet orbital ambient effects without causing frame-rate drops or high memory usage on mobile devices.",
    metrics: "Sub-second initial paint, 60fps ambient visual rendering, zero telemetry bloat."
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "High-Focus Task Lifecycle & Priority Management Platform",
    category: "Full-Stack & Productivity",
    status: "Working & Deployed",
    badge: "6th Sem Production Product",
    semester: "Semester 6",
    timeline: "2025",
    repoUrl: "https://github.com/jvjitendra/task-manager",
    liveUrl: "https://task-manager-frontend-tau-lemon.vercel.app",
    featuredImage: "/assets/projects/taskflow.png",
    overview: "A task management system engineered for clarity, state persistence, and streamlined workflow execution. Features server-side hashed authentication, organized priority lanes, and fluid state management.",
    problem: "Personal task tools often become bloated with over-engineered team settings, resulting in slow load times, complex interfaces, and poor mobile usability.",
    architecture: "Decoupled architecture: RESTful backend service with JWT authentication, robust password hashing, relational task status mappings, coupled with a responsive frontend featuring optimistic UI updates.",
    stack: ["React", "Node.js / Express", "REST API", "JWT Auth", "PostgreSQL / SQLite"],
    highlights: [
      "Server-side password hashing and secure token renewal cycles",
      "Optimistic UI updates for immediate priority reordering",
      "Clean minimal workspace design with zero cognitive overload",
      "Persistent session states with graceful offline fallbacks"
    ],
    challenges: "Handling rapid task state mutations while preventing race conditions between asynchronous backend sync and client drag-and-drop actions.",
    metrics: "Instantaneous client-side state feedback, fully mobile-responsive touch controls."
  },
  {
    id: "flipkart-analytics",
    title: "Flipkart Sales Intelligence Dashboard",
    tagline: "Interactive Retail Analytics & Revenue Optimization Suite",
    category: "Data Analytics",
    status: "Completed",
    badge: "5th Sem Analytics",
    semester: "Semester 5",
    timeline: "2024",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "A comprehensive business intelligence dashboard modeling Flipkart e-commerce transactional data. Built to extract actionable insights into category-level profit margins, customer return behaviors, regional demand spikes, and sales velocity.",
    problem: "Raw multi-table retail logs are unwieldy, containing inconsistent schemas, missing fulfillment markers, and fragmented buyer demographics that conceal loss-making product categories.",
    architecture: "Multi-stage Power Query ETL pipeline → Star schema data model with custom DAX measures for Year-over-Year (YoY) growth, customer churn rates, discount elasticity, and fulfillment efficiency KPIs.",
    stack: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling", "Exploratory Data Analysis"],
    highlights: [
      "Star schema data model connecting sales, logistics, returns, and customers",
      "Advanced DAX measures: moving averages, profit margin variances, return frequency",
      "Interactive drill-down cross-filtering across geographic territories and brands",
      "Data sanitation pipeline eliminating duplicated SKU identifiers"
    ],
    challenges: "Accurately computing net realized profit while factoring in dynamic logistics return fees and promotional discounts without skewing historical cohort metrics.",
    metrics: "Identified low-margin SKU anomalies and delivered drill-down capability across 50,000+ transaction rows."
  },
  {
    id: "user-management-api",
    title: "Enterprise User Management REST API",
    tagline: "High-Concurrence Scalable Backend Service with RBAC",
    category: "Backend & Systems",
    status: "Working Locally",
    badge: "4th Sem Backend Architecture",
    semester: "Semester 4",
    timeline: "2024",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "A robust backend service engineered for user authentication, hierarchical role-based access control (RBAC), and session auditing. Built with strict validation schemas and database transaction safety.",
    problem: "Academic backend projects frequently neglect edge cases like concurrent profile updates, unvalidated request bodies, SQL injection vulnerabilities, and proper password salting.",
    architecture: "Layered backend architecture: Controller Layer → Service Business Logic → DAO Data Access → Database Engine. Implements Argon2 / bcrypt hashing, rate limiting, and structured OpenAPI / Swagger documentation.",
    stack: ["Python", "FastAPI / Flask", "SQLAlchemy", "PostgreSQL", "Pydantic", "Pytest", "Swagger UI"],
    highlights: [
      "Granular RBAC with role inheritance (Superadmin, Admin, Auditor, Standard User)",
      "Strict data validation and sanitization using declarative Pydantic schemas",
      "Automated test suite covering unit endpoints and concurrency race conditions",
      "Comprehensive OpenAPI (Swagger) live interactive documentation"
    ],
    challenges: "Designing clean migration paths and idempotent database fixtures for CI test runs.",
    metrics: "100% test coverage across core auth endpoints; sub-15ms response latency."
  },
  {
    id: "ai-id-verification",
    title: "AI-Driven ID Verification System",
    tagline: "Automated Document OCR & Facial Liveness Matching Prototype",
    category: "AI & Intelligent Systems",
    status: "Experimental Prototype",
    badge: "5th Sem Computer Vision",
    semester: "Semester 5",
    timeline: "2024",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "An experimental automated identity verification pipeline combining optical character recognition (OCR) with computer vision face matching to detect identity spoofing and extract credential data.",
    problem: "Manual identity verification for campus and institutional onboarding is slow, prone to clerical errors, and vulnerable to printed photo fraud.",
    architecture: "Image preprocessing pipeline (denoising, perspective correction) → OCR text extraction → Facial landmark detection & cosine similarity comparison between ID photo and webcam capture.",
    stack: ["Python", "OpenCV", "Tesseract OCR", "DeepFace / Face-Recognition", "NumPy"],
    highlights: [
      "Automatic document perspective distortion rectification",
      "Text extraction with confidence scoring across government ID layouts",
      "Vector cosine similarity matching for photo identity correlation",
      "Tamper detection for font inconsistencies and edge artifacts"
    ],
    challenges: "Dealing with glare and low-resolution student ID cards without triggering false rejection rates.",
    metrics: "Successfully parses standard rectangular ID formats with ~91% OCR accuracy on clear inputs."
  },
  {
    id: "student-attendance-system",
    title: "Student Attendance Management System",
    tagline: "Automated Academic Attendance Tracking & Report Generator",
    category: "Academic Engineering",
    status: "Completed (Academic)",
    badge: "3rd Sem LEET Project",
    semester: "Semester 3 (LEET Entry)",
    timeline: "2023",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "A desktop and web academic record system built upon joining Chandigarh University (Lateral Entry) to modernize student attendance logging, calculate semester percentage thresholds, and generate regulatory compliance reports.",
    problem: "Paper-based attendance registers result in lost records, time wastage during lectures, and tedious manual semester aggregation calculations.",
    architecture: "Client-server architecture featuring faculty and student portals, relational attendance tables with compound date-lecture keys, and automated PDF report generation.",
    stack: ["Java", "MySQL", "JDBC", "HTML/CSS", "Bootstrap"],
    highlights: [
      "Automated low-attendance warning triggers (<75% threshold alerts)",
      "Role-based views for faculty marking and student history inspection",
      "Exportable summary logs in CSV and printable formats"
    ],
    challenges: "Optimizing relational queries to aggregate multi-semester attendance across thousands of records without interface freezing.",
    metrics: "Deployed and validated across test batches during 3rd semester."
  },
  {
    id: "cisco-network-simulation",
    title: "Enterprise Multi-Subnet Network Simulation",
    tagline: "VLAN Segmentation, OSPF Routing & Access Control via Cisco Packet Tracer",
    category: "Networks & Infrastructure",
    status: "Completed (Academic)",
    badge: "Diploma Final Capstone",
    semester: "Diploma Final Sem",
    timeline: "2023",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "A comprehensive virtualized network architecture simulating a corporate campus with segmented VLANs, inter-VLAN routing, dynamic OSPF routing protocol, DHCP relay, and firewall Access Control Lists (ACLs).",
    problem: "Designing secure, isolated enterprise network zones (Executive, Finance, Engineering, Guest) without broadcast storms or unauthorized cross-subnet packet leakage.",
    architecture: "Hierarchical Core-Distribution-Access network model built in Cisco Packet Tracer with redundant gateway paths and NAT translation.",
    stack: ["Cisco Packet Tracer", "TCP/IP", "VLAN", "OSPF", "Access Control Lists (ACL)", "DHCP / NAT"],
    highlights: [
      "VLAN segmentation with 802.1Q trunking across managed switches",
      "Dynamic multi-area OSPF routing configuration for automated link failover",
      "Extended IP ACLs restricting Guest subnet access to internal corporate databases",
      "Automated IP pool allocation via centralized DHCP servers"
    ],
    challenges: "Debugging route redistribution and wildcard mask mismatches across multi-router borders.",
    metrics: "Verified 100% ICMP ping convergence across all authorized subnets."
  },
  {
    id: "movie-ticket-booking",
    title: "Cinema Seat Reservation Engine",
    tagline: "Concurrent Seat Selection & Ticket Booking System",
    category: "Academic Engineering",
    status: "Completed (Academic)",
    badge: "Diploma Project",
    semester: "Diploma Semester 5",
    timeline: "2022 — 2023",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "A software application modeling cinema hall seat matrices, dynamic showtime allocations, and real-time seat lock state handling to prevent double booking.",
    problem: "Managing concurrent transactions where two customers attempt to select the same cinema seat within the same second.",
    architecture: "Stateful seat matrix tracking: Available → Reserved (Temporary Lock) → Booked. Built with transactional integrity rules.",
    stack: ["Java / C++", "MySQL", "Object-Oriented Design", "Swing / Web UI"],
    highlights: [
      "Interactive 2D cinema hall seating grid with tiered pricing categories",
      "Temporary holding locks with countdown timer to release unpurchased seats",
      "Automated ticket generation with unique booking reference hashes"
    ],
    challenges: "Implementing transactional rollback when checkout steps fail or time out.",
    metrics: "Validated zero duplicate bookings in simulated concurrency tests."
  },
  {
    id: "sudoku-solver",
    title: "Algorithmic Sudoku Solver",
    tagline: "Optimized Recursive Backtracking Grid Solver",
    category: "Algorithms & Logic",
    status: "Completed",
    badge: "Algorithm Benchmark",
    semester: "Diploma Semester 4",
    timeline: "2022",
    repoUrl: "https://github.com/jvjitendra",
    liveUrl: null,
    featuredImage: null,
    overview: "An algorithmic engine implementing constrained recursive backtracking and constraint satisfaction heuristics to solve standard 9x9 Sudoku puzzles instantly.",
    problem: "Demonstrating systematic state-space tree traversal and pruning strategies without stack overflows on difficult grids.",
    architecture: "Pure algorithmic implementation with bitmasking row/column/box validation checks to accelerate board validity queries.",
    stack: ["C++", "Data Structures & Algorithms", "Backtracking"],
    highlights: [
      "Bitmask optimization for instantaneous candidate validation",
      "Solves complex expert-level puzzles in single-digit milliseconds",
      "Detects contradictory puzzle configurations with graceful failure"
    ],
    challenges: "Minimizing redundant branch traversal on puzzles with minimal starting clues.",
    metrics: "Average solve time < 2ms across benchmark puzzles."
  }
];

export const EDUCATION_DATA = [
  {
    id: "bachelor",
    degree: "B.E. in Computer Science & Engineering (Lateral Entry / LEET)",
    institution: "Chandigarh University",
    location: "Gharuan, Mohali, Punjab",
    period: "2023 — 2026",
    grade: "CGPA: 7.32 / 10",
    rankNote: "Reported consistently among the top ten students in college examinations.",
    focus: "Admitted directly into 3rd Semester via Lateral Entry (LEET) following Diploma. Advanced into Distributed Systems, Cloud Computing, Full-Stack Architecture, and Autonomous Agent Systems (Culminating in DevPilot as 8th Semester Capstone).",
    photo: "/assets/curated/cu_campus_milestone.jpg",
    photoCaption: "At Chandigarh University campus — Lateral entry transition into advanced computing and production systems."
  },
  {
    id: "diploma",
    degree: "Diploma in Engineering",
    institution: "Aryan Institute of Engineering & Technology (AIET)",
    location: "Bhubaneswar, Odisha",
    period: "2020 — 2023",
    grade: "Score: 71.81%",
    rankNote: "Reported among the top five students during the diploma program.",
    focus: "Rigorous technical foundation in Computer Engineering: Operating Systems, C/C++, Java, DBMS, and Cisco networking simulation. Provided the direct qualification for Lateral Entry (LEET) into B.E. 3rd semester.",
    photo: null,
    photoCaption: null
  },
  {
    id: "school",
    degree: "Secondary School Examination (Class X)",
    institution: "Bharat Singh Public School",
    location: "Bokaro, Jharkhand",
    period: "CBSE Board",
    grade: "CGPA: 8.2 / 10",
    rankNote: "Consistently among the top three academic performers throughout Classes 6 to 10.",
    focus: "Foundational Mathematics, Physical Sciences, Logic & Computer Applications.",
    photo: null,
    photoCaption: null
  }
];

export const JOURNEY_NODES = [
  {
    id: "node-1",
    phase: "Phase 01: Foundations",
    title: "Bharat Singh Public School, Bokaro",
    period: "Classes 6 — 10",
    summary: "Built an early analytical discipline and curiosity for science and mathematics. Maintained consistent top-three academic standing throughout Classes 6 to 10, graduating CBSE Class 10 with an 8.2 CGPA.",
    badge: "Schooling"
  },
  {
    id: "node-2",
    phase: "Phase 02: Diploma Immersion",
    title: "AIET, Bhubaneswar",
    period: "2020 — 2023",
    summary: "Deep-dived into hands-on computer engineering fundamentals: C/C++, Java, relational databases, and Cisco network simulations. Ranked in the top 5 of the cohort (71.81%), earning direct Lateral Entry eligibility.",
    badge: "Diploma"
  },
  {
    id: "node-3",
    phase: "Phase 03: LEET & Advanced CSE",
    title: "Chandigarh University (3rd — 6th Sem)",
    period: "2023 — 2025",
    summary: "Entered 3rd Semester via LEET. Scaled from academic Java/MySQL attendance tools to enterprise REST services, business intelligence dashboards (Flipkart Analytics), and full-stack platforms (TaskFlow).",
    badge: "B.E. 3rd-6th Sem"
  },
  {
    id: "node-4",
    phase: "Phase 04: Flagship Autonomous Systems",
    title: "Final Year & Beyond (7th — 8th Sem)",
    period: "2025 — 2026",
    summary: "Engineered high-agency production software: Vaani (ambient thought workspace) and DevPilot (8th-semester flagship deterministic AI coding workspace with bounded context and verification gates).",
    badge: "8th Sem Capstone"
  }
];

export const CERTIFICATIONS_DATA = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL — IIT Kharagpur",
    category: "Cloud Systems",
    highlight: "Virtualization architectures, elasticity, distributed storage, and cloud service models."
  },
  {
    name: "Foundation of Cloud IoT & Edge Machine Learning",
    issuer: "NPTEL — IIT Kanpur",
    category: "Edge & IoT",
    highlight: "Sensor telemetry, edge inference, protocol optimization, and distributed stream processing."
  },
  {
    name: "AWS Certified Database – Specialty",
    issuer: "AWS / Specialized Track",
    category: "Cloud Data",
    highlight: "Relational, document, key-value, and memory-cached persistence architectures."
  },
  {
    name: "Databases & SQL for Data Science with Python",
    issuer: "IBM / Coursera",
    category: "Data Science",
    highlight: "Relational query optimization, complex aggregations, joins, and data pipeline transformations."
  },
  {
    name: "Introduction to Databases",
    issuer: "Meta — Coursera",
    category: "Database Engineering",
    highlight: "Normalization rules, foreign key constraints, ACID transaction properties, and indexing."
  },
  {
    name: "Programming for Everybody (Python)",
    issuer: "University of Michigan — Coursera",
    category: "Core Software",
    highlight: "Data structures, modular program architecture, regular expressions, and network sockets."
  },
  {
    name: "Internet of Things: Design Concepts & Use Cases",
    issuer: "NITTTR Chandigarh",
    category: "Embedded Systems",
    highlight: "Microcontroller telemetry, MQTT protocols, and real-time physical sensor integration."
  },
  {
    name: "Solidity Smart Contracts",
    issuer: "Infosys Springboard",
    category: "Decentralized",
    highlight: "EVM mechanics, state machines, contract security auditing, and token standard implementations."
  }
];

export const SKILLS_DATA = [
  {
    category: "Core Languages",
    description: "Languages used in production systems, algorithmic solutions, and backend services.",
    skills: [
      { name: "Python", level: "Extensively Used", note: "Primary language for FastAPI, AI pipelines, AST parsing & automation" },
      { name: "JavaScript / TypeScript", level: "Extensively Used", note: "Modern React frontends, Node.js runtimes, typed full-stack interfaces" },
      { name: "SQL", level: "Extensively Used", note: "Complex analytical queries, relational schemas, indexing & transactions" },
      { name: "Java", level: "Project-Specific", note: "Object-oriented architectures, JDBC connections, academic systems" },
      { name: "C++", level: "Foundational / Algorithms", note: "Constraint backtracking algorithms, memory models & benchmarks" }
    ]
  },
  {
    category: "Backend & Systems Architecture",
    description: "Architecting reliable, deterministic, and scalable backend services.",
    skills: [
      { name: "FastAPI", level: "Extensively Used", note: "Asynchronous APIs, Pydantic validation, OpenAPI documentation" },
      { name: "REST API Design", level: "Extensively Used", note: "Resource modeling, idempotent endpoints, structured response codes" },
      { name: "SQLAlchemy & ORM", level: "Project-Specific", note: "Session lifecycles, database migrations, and schema mappings" },
      { name: "Auth & Cryptography", level: "Project-Specific", note: "JWT tokens, AES/Fernet token encryption, bcrypt password hashing" },
      { name: "Flask", level: "Project-Specific", note: "Microservices and prototype endpoint orchestration" }
    ]
  },
  {
    category: "Databases & Persistence",
    description: "Relational design, indexing, and high-integrity storage.",
    skills: [
      { name: "PostgreSQL", level: "Project-Specific", note: "ACID transactions, relational schemas, and production services" },
      { name: "MySQL", level: "Project-Specific", note: "Relational database normalization and academic project backends" },
      { name: "SQLite", level: "Extensively Used", note: "Embedded local application databases and fast testing fixtures" }
    ]
  },
  {
    category: "Frontend & Interface Engineering",
    description: "Constructing responsive, high-contrast, accessible interfaces.",
    skills: [
      { name: "React", level: "Extensively Used", note: "Component architectures, custom hooks, and reactive state stores" },
      { name: "Vite", level: "Extensively Used", note: "Fast build pipelines, modern module bundling, and zero-delay HMR" },
      { name: "Tailwind CSS", level: "Extensively Used", note: "Design system tokens, custom palettes, and responsive layouts" },
      { name: "Semantic Web & A11y", level: "Extensively Used", note: "Accessible navigation, ARIA semantics, and keyboard operability" }
    ]
  },
  {
    category: "Data Intelligence & Analytics",
    description: "Transforming raw transactional records into high-impact dashboards.",
    skills: [
      { name: "Power BI & DAX", level: "Project-Specific", note: "Star schemas, measures, time intelligence, visual dashboards" },
      { name: "Power Query", level: "Project-Specific", note: "M-code transformations, data cleansing, schema merging" },
      { name: "Pandas & Exploratory DA", level: "Project-Specific", note: "Data normalization, anomaly inspection, CSV parsing" },
      { name: "Tabular Modeling", level: "Foundational", note: "Financial metrics, cohort segmentation, and variance tracking" }
    ]
  },
  {
    category: "Tooling & Quality Verification",
    description: "Development hygiene, version control, and reliability gates.",
    skills: [
      { name: "Git & GitHub", level: "Extensively Used", note: "Branch management, semantic commit histories, pull requests" },
      { name: "Pytest", level: "Project-Specific", note: "Automated test suites, unit endpoints, and mock fixtures" },
      { name: "Postman", level: "Extensively Used", note: "API contract testing, environment variables, headers" },
      { name: "VS Code & Terminal", level: "Daily Driver", note: "Shell scripting, development tooling, CLI execution" }
    ]
  }
];

// Curated Beyond The Code Gallery — Mirror Selfie is FIRST, ZERO duplicate images
export const BEYOND_CODE_GALLERY = [
  {
    id: "g-1",
    title: "Midnight Monochrome & Streetwear",
    tag: "Late Nights & Style",
    src: "/assets/gallery/01_streetwear_mirror.jpg",
    caption: "Casual moments between long coding sprints and late-night builds. Keeping things effortless and grounded."
  },
  {
    id: "g-2",
    title: "Mountain Ridges & Clear Skies",
    tag: "Highland Escapes",
    src: "/assets/gallery/02_mussoorie_ridge.jpg",
    caption: "Stepping away from terminals to clear the head in the mountains. Open horizons restore clarity and focus."
  },
  {
    id: "g-3",
    title: "Tunnel Run on Two Wheels",
    tag: "Riding & Highways",
    src: "/assets/gallery/03_tunnel_bike.jpg",
    caption: "Early morning highway ride with the bike and helmet. Nothing beats the sound of the engine through an open tunnel."
  },
  {
    id: "g-4",
    title: "Off-Road Mountain Trails",
    tag: "Royal Enfield Rhythm",
    src: "/assets/gallery/04_enfield_mountain.jpg",
    caption: "Taking the Enfield through unpaved hillside trails. Rough roads teach balance, patience, and staying calm."
  },
  {
    id: "g-5",
    title: "Valley Mist & Foggy Passes",
    tag: "Quiet Horizons",
    src: "/assets/gallery/05_misty_valley.jpg",
    caption: "Pausing along the winding hillside on a misty morning. Pure quiet to reset before diving back into systems."
  },
  {
    id: "g-6",
    title: "Sunny Highway Detour",
    tag: "Roadtrips & Sunshine",
    src: "/assets/gallery/06_sunny_highway.jpg",
    caption: "Quick roadside pitstop on a bright sunny ride. Pure motion, fresh air, and good music."
  },
  {
    id: "g-7",
    title: "Outdoor Mountain Air",
    tag: "Fresh Perspectives",
    src: "/assets/gallery/07_outdoor_mountain_shot.jpg",
    caption: "Taking in the afternoon breeze after a long road trip. Disconnecting from code to reconnect with fresh ideas."
  },
  {
    id: "g-8",
    title: "Panoramic Hill Slopes",
    tag: "Vast Landscapes",
    src: "/assets/gallery/08_panoramic_hills.jpg",
    caption: "Endless pine-covered valley vistas. Wide perspectives make hard software problems feel smaller and simpler."
  },
  {
    id: "g-9",
    title: "The Open Asphalt Stretch",
    tag: "Endless Roads",
    src: "/assets/gallery/09_highway_landscape.jpg",
    caption: "Winding highway cutting through the hills. Pure focus on the curve ahead."
  }
];
