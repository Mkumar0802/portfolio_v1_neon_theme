// src/pages/WorkPage.tsx (or WorkPage.jsx)
import { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  blurb: string;
  image?: string;                 // optional thumbnail
  category: "Web App" | "Dashboard" | "Landing Page" | "Integration" | "Chatbot" | "Other" | "LLM App" | "API Development" | "Full-Stack Development";
  tech: string[];
  period?: string;
  role?: string;
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;           // if you host a long-form writeup
  };
  highlights?: string[];          // bullet points for the drawer
};

const PROJECTS: Project[] = [
  {
    id: "chat-ollama",
    title: "Chat with Ollama - Local LLM Chat UI (Streamlit)",
    blurb: "An interactive chat interface built with Streamlit that connects to Ollama models (like Mistral and DeepSeek) running locally. It supports real-time streaming responses, chat history management, and model selection, offering a lightweight yet powerful personal AI assistant experience.",
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1757524449/chat_ollama_dphmhu.png",
    category: "LLM App",
    tech: ["Python", "LLM", "Ollama", "Streamlit"],
    // period: "2024 – 2025",
    // role: "Full-Stack Developer",
    links: {
      // live: "#", 
      repo: "https://github.com/Mkumar0802/GPT.git",
      // caseStudy: "" 
    },
    highlights: [
      "Implemented real-time streaming responses using Ollama's API for a dynamic chat experience.",
      "Designed a chat history system with session management, persistence, and export/download options.",
      "Added model selection support (Mistral, DeepSeek, etc.) with dynamic switching.",
      "Developed a clean and responsive UI in Streamlit for seamless user experience.",
      // "Integrated CI/CD practices for maintaining and deploying the application efficiently."
    ],
  },

  {
    id: "pdf-rag",
    title: "PDF Q&A (RAG-ready) — Streamlit + OpenRouter",
    blurb: "Ask questions about any PDF via a clean Streamlit UI. Extracts text with PyPDF and queries LLMs through OpenRouter, with docs and deployment guides included.",
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1757524444/pdf-rag_ojbkvs.png",
    category: "LLM App",
    tech: ["Python", "Streamlit", "OpenRouter"],
    // period: "2025",
    // role: "Full-stack",
    links: {
      // live: "#", 
      repo: "https://github.com/Mkumar0802/Pdf_Rag"
    },
    highlights: [
      "Upload ≤ 5MB PDFs; robust size checks & text extraction",
      "Q&A powered by OpenRouter (default: gpt-3.5; easy swap to gpt-4o)",
      "Session chat history + daily JSON logging",
      "Secrets via .env; example + .gitignore to prevent leaks",
      "Docs: README + /docs (Getting Started, Config, Troubleshooting, Deploy)",
      "Ready for RAG: planned chunking/embeddings (FAISS/Chroma) and citations"
    ],
  },
  {
    id: "smart-hr-automation",
    title: "Smart HR Automation",
    blurb: "Google Workspace integration for HR workflows: auto-parse resumes, sync with Sheets/Drive, and streamline candidate processing.",
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1757524448/smarthr_automation_lsql7s.png",
    category: "Web App",
    tech: ["Python", "Google API"],
    // period: "2024–2025",
    // role: "Backend & Integration",
    links: {
      //  live: "#", 
      repo: "https://github.com/Mkumar0802/smart-hr-automation-python"
    },
    highlights: [
      "Automated Gmail → Drive → Sheets workflow",
      "Resume parsing & candidate ranking with NLP/GPT",
      // "Streamlit dashboard for upload, review, and sync",
      "Secure secret handling via env + GCP Secret Manager",
    ],
  }
  ,
  {
    id: "node-sequelize-crud-api",
    title: "Node.js + Sequelize CRUD API with MySQL",
    blurb: "A RESTful API built using Node.js, Express, and Sequelize ORM for performing CRUD operations on a MySQL database. The API supports pagination, validation, and error handling, offering a robust back-end solution for web applications.",
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1759146135/node_sequlize.png",  // Image to represent the project
    category: "API Development",
    tech: ["Node.js", "Sequelize", "Express", "MySQL", "RESTful API"],
    links: {
      // live: "http://localhost:4000", // or remove if no live version
      repo: "https://github.com/Mkumar0802/node-seq-mysql",
      caseStudy: "" // Add if applicable
    },
    highlights: [
      "Built a fully functional RESTful API with CRUD operations (Create, Read, Update, Delete) using Sequelize ORM.",
      "Implemented pagination and search filters for efficient data retrieval in large datasets.",
      "Used Zod for input validation to ensure data integrity and provide detailed error messages.",
      "Configured MySQL database with Sequelize migrations and models for smooth data handling.",
      "Developed a clean and modular architecture for scalability and maintainability.",
      "Implemented robust error handling with custom messages and HTTP status codes for better debugging."
    ]
  },
  {
    "id": "task-management-app",
    "title": "MERN Task Management Application",
    "blurb": "A full-stack MERN (MongoDB, Express.js, React, Node.js) task management application with user authentication and real-time task operations. This application allows users to manage tasks with a responsive user interface, authentication, and secure task management features.",
    "image": "https://res.cloudinary.com/dc6wggob7/image/upload/v1759242349/Screenshot_From_2025-09-30_19-54-32_o8v7im.png",  // Image to represent the project
    "category": "Full-Stack Development",
    "tech": ["MongoDB", "Express", "React", "Node.js", "JWT", "bcrypt", "Tailwind CSS", "Redux"],
    "links": {
      "live": "https://vocal-banoffee-6ef5bb.netlify.app/",
      "repo": "https://github.com/Mkumar0802/React-Task-Management.git",
      "caseStudy": "" // Add if applicable
    },
    "highlights": [
      "User authentication with JWT-based login and password hashing using bcrypt.",
      "Create, read, update, and delete tasks with user-specific isolation.",
      "Real-time task management with task status toggling between Pending and Completed.",
      "Responsive and modern UI designed with Tailwind CSS.",
      "Protected routes for task management ensuring only authenticated users can access their tasks.",
      "Full stack application that includes front-end and back-end with secure API routes."
    ],

  },
  {
    id: "landmarklivings",
    title: "LANDMARKLIVINGS",
    blurb: "A fully responsive real estate landing page for Landmark Livings, showcasing properties and services. Built with PHP Mailer for contact form functionality, HTML, Tailwind CSS for styling, and responsive design optimized for mobile and tablet users.",
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1762150503/Screenshot_From_2025-11-03_11-44-03_aaedi6.png",
    category: "Landing Page",
    tech: ["HTML", "PHP Mailer", "Tailwind CSS", "Responsive Design", "Mobile-First", "Tablet-Optimized"],
    links: {
      live: "https://relaxed-beijinho-3f35e0.netlify.app/",
      repo: "https://github.com/Mkumar0802/Real-State.git"
    },
    highlights: [
      "Mobile-first and tablet-responsive layout for real estate clients",
      "Contact form with PHP Mailer integration for lead generation",
      "Property showcase with image sliders and detailed information",
      "Tailwind CSS for a clean and modern design",
      "SEO-friendly structure to increase visibility"
    ]
  },

  {
    id: "dementia-care",
    title: "Dementia Care",
    blurb: "A responsive landing page for dementia care services. Built using React.js with a simple, mobile-first design. Features include integration with NodeMailer for contact form submissions, WhatsApp API for quick customer communication, and Twilio for messaging services. Client feedback, service details, and a promotional banner are also integrated.",
    category: "Landing Page",
    tech: ["React.js", "NodeMailer", "WhatsApp API", "Twilio", "Tailwind CSS", "Mobile-First", "Tablet-Optimized"],
    links: {
      live: "https://dementia-care.netlify.app/",
      repo: "https://github.com/Mkumar0802/Dementia-Care"
    },
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1762150573/Screenshot_From_2025-11-03_11-45-49_gsib7k.png",
    highlights: [
      "Mobile-first and tablet-responsive layout for optimal viewing across devices",
      "Integrated NodeMailer for handling contact form submissions",
      "WhatsApp API integration for instant communication with clients",
      "Twilio messaging service integration for SMS-based customer interaction",
      "Client feedback section for showcasing testimonials and reviews",
      "Detailed list of services offered for dementia care",
      "Promotional banner for upcoming events or promotions"
    ]
  },

  {
    id: "doctor-on-call",
    title: "Doctor On Call",
    blurb: "A fully responsive landing page for Doctor On Call services. Built with React.js and optimized for mobile-first design, this page integrates NodeMailer for form submissions, WhatsApp API for quick customer communication, and Twilio for SMS-based interactions. Features client feedback, detailed services, a promotional banner, and an added Google Campaign page for promotions.",
    category: "Landing Page",
    tech: ["React.js", "NodeMailer", "WhatsApp API", "Twilio", "Tailwind CSS", "Mobile-First", "Tablet-Optimized", "Google Campaign"],
    links: {
      live: "https://dynamic-seahorse-82fffb.netlify.app/",
      repo: "https://github.com/Mkumar0802/Doctor-on-Call"
    },
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1762151027/Screenshot_From_2025-11-03_11-53-31_eqfft2.png",
    highlights: [
      "Mobile-first and tablet-responsive layout for optimal viewing across all devices",
      "Integrated NodeMailer to handle contact form submissions and lead generation",
      "WhatsApp API integration for real-time communication with clients",
      "Twilio messaging service for SMS notifications to users",
      "Client feedback section to showcase testimonials and reviews",
      "Detailed services section to highlight healthcare offerings",
      "Promotional banner for announcing upcoming events, discounts, or new features",
      "Integrated Google Campaign page for promoting special offers and driving traffic"
    ]
  },

  {
    id: "medical-equipment-consumables",
    title: "Medical Equipment & Consumables",
    blurb: "A fully responsive landing page for showcasing medical equipment and consumables services. Built with React.js and optimized for mobile-first design, this page integrates NodeMailer, WhatsApp API, and Twilio. It includes product descriptions, rental and purchase services, client feedback, promotional banner, and a Google Campaign page for promotions.",
    category: "Landing Page",
    tech: ["React.js", "NodeMailer", "WhatsApp API", "Twilio", "Tailwind CSS", "Mobile-First", "Tablet-Optimized", "Google Campaign"],
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1762150650/Screenshot_From_2025-11-03_11-46-46_cr4avk.png",
    links: {
      live: "https://medical-equipment-chennai-seo.netlify.app/",
      repo: "https://github.com/Mkumar0802/Medical-Equioment-chennai-SEO"
    },
    highlights: [
      "Mobile-first and tablet-responsive layout for optimal viewing across all devices",
      "Integrated NodeMailer to handle contact form submissions and lead generation",
      "WhatsApp API integration for real-time communication with clients",
      "Twilio messaging service for SMS notifications to users",
      "Product descriptions for each medical equipment and consumable",
      "Rental and purchase service options for medical equipment",
      "Detailed services section for renting or purchasing equipment",
      "Promotional banner for announcing upcoming events, discounts, or new products",
      "Integrated Google Campaign page for promoting special offers and driving traffic"
    ]
  },

  {
    id: "ophthalmology-ui",
    title: "Ophthalmology UI",
    blurb: "A fully responsive landing page for Ophthalmology UI services. Built with React.js and optimized for mobile-first design, this page integrates NodeMailer, WhatsApp API, and Twilio. The site includes client feedback, detailed services, a promotional banner, and a Google Campaign page to help with promotions and advertisements.",
    category: "Landing Page",
    tech: ["React.js", "NodeMailer", "WhatsApp API", "Twilio", "Tailwind CSS", "Mobile-First", "Tablet-Optimized", "Google Campaign"],
    links: {
      live: "https://preeminent-heliotrope-396351.netlify.app/",
      repo: "https://github.com/Mkumar0802/Ophthalmology-Ul-"
    },
    image: "https://res.cloudinary.com/dc6wggob7/image/upload/v1762150651/Screenshot_From_2025-11-03_11-47-00_b7ol1k.png",
    highlights: [
      "Mobile-first and tablet-responsive layout for optimal viewing across all devices",
      "Integrated NodeMailer to handle contact form submissions and lead generation",
      "WhatsApp API integration for real-time communication with clients",
      "Twilio messaging service for SMS notifications to users",
      "Client feedback section to showcase testimonials and reviews",
      "Detailed services section to highlight healthcare offerings",
      "Promotional banner for announcing upcoming events, discounts, or new features",
      "Integrated Google Campaign page for promoting special offers and driving traffic"
    ]
  },
  {
    id: "srrr-institute",
    title: "SRRR Institute Private Limited",
    blurb: "A fully responsive educational website for SRRR Institute, featuring PHP mail integration for contact forms and optimized for high speed and performance across all devices.",
    image: "/projects/srr-ins.png",
    category: "Landing Page",
    tech: ["PHP Mailer", "Responsive Design", "Speed Optimization", "HTML", "CSS"],
    links: {
      live: "https://srrrinstitute.com/",
    },
    highlights: [
      "Integrated PHP Mailer for reliable email delivery from contact forms.",
      "Fully responsive design ensuring seamless experience on mobile, tablet, and desktop.",
      "Significant speed optimizations for faster page load times.",
      "Modern UI/UX tailored for educational institution requirements."
    ]
  }




];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

function classNames(...s: (string | false | undefined)[]) {
  return s.filter(Boolean).join(" ");
}

const WorkPage = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");
  const [drawerProject, setDrawerProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter(p => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const text =
        (p.title + " " + p.blurb + " " + p.tech.join(" ") + " " + (p.role ?? "")).toLowerCase();
      const qOk = q ? text.includes(q) : true;
      return catOk && qOk;
    });
  }, [query, activeCat]);

  return (
    <section id="work" className="min-h-screen py-24 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-black neon-text-blue glitch" data-text="VIEW MY WORK">
            VIEW MY WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A curated selection of apps I’ve built.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                aria-label={`Filter by ${cat}`}
                aria-pressed={activeCat === cat}
                className={classNames(
                  "px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200",
                  activeCat === cat
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-primary/30 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-sm w-full">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by tech, title, or role..."
              aria-label="Search projects by technology, title, or role"
              className="w-full bg-card border border-primary/20 rounded-lg px-4 py-3 pr-10 outline-none focus:border-primary/60"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">⌘K</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className={classNames(
                "bg-card border border-primary/20 rounded-lg overflow-hidden group fade-in-up",
                `delay-${(i + 1) * 100}`
              )}
            >
              {/* Thumb */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="font-mono">No preview</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 px-2 py-1 text-xs font-mono bg-background/70 backdrop-blur border border-primary/30 rounded">
                  {p.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-lg font-display font-bold neon-text-pink mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.blurb}</p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-1 border border-accent/30 rounded text-xs font-mono text-accent/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                {(p.period || p.role) && (
                  <div className="text-xs font-mono text-muted-foreground mb-4 flex flex-wrap gap-x-4 gap-y-1">
                    {p.period && <span>🗓 {p.period}</span>}
                    {p.role && <span>👤 {p.role}</span>}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {p.links?.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded transition-all duration-200"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {p.links?.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 border border-primary/50 text-foreground hover:border-primary/80 rounded transition-all duration-200"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {(p.highlights?.length || p.links?.caseStudy) && (
                    <button
                      onClick={() => setDrawerProject(p)}
                      className="ml-auto px-3 py-2 border border-primary/30 hover:border-primary/60 rounded font-semibold text-sm"
                    >
                      Case Study
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects match your search.</p>
          </div>
        )}
      </div>

      {/* Case Study Drawer */}
      {drawerProject && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setDrawerProject(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 h-full w-full sm:w-[540px] bg-background border-l border-primary/20 shadow-xl p-6 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-display font-bold neon-text-green">{drawerProject.title}</h4>
              <button
                aria-label="Close"
                onClick={() => setDrawerProject(null)}
                className="p-2 border border-primary/30 rounded hover:border-primary/60"
              >
                <FaTimes />
              </button>
            </div>

            <p className="text-muted-foreground mb-4">{drawerProject.blurb}</p>

            {drawerProject.highlights?.length ? (
              <>
                <h5 className="font-display font-bold neon-text-pink mb-2">Highlights</h5>
                <ul className="space-y-2 mb-6">
                  {drawerProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {drawerProject.links?.caseStudy && (
              <a
                href={drawerProject.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded"
              >
                Full Case Study <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkPage;
