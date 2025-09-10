// src/pages/WorkPage.tsx (or WorkPage.jsx)
import { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  blurb: string;
  image?: string;                 // optional thumbnail
  category: "Web App" | "Dashboard" | "Landing Page" | "Integration" | "Chatbot" | "Other" | "LLM App";
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
   image: "/public/projects/chat_ollama.png",
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
  image: "/public/projects/pdf-rag.png",
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
  image: "/public/projects/smarthr_automation.png",
  category: "Web App",
  tech: ["Python", "Google API"],
  // period: "2024–2025",
  // role: "Backend & Integration",
  links: {
    //  live: "#", 
    repo: "https://github.com/Mkumar0802/smart-hr-automation-python" },
  highlights: [
    "Automated Gmail → Drive → Sheets workflow",
    "Resume parsing & candidate ranking with NLP/GPT",
    // "Streamlit dashboard for upload, review, and sync",
    "Secure secret handling via env + GCP Secret Manager",
  ],
}
,
  // {
  //   id: "sell-do-bridge",
  //   title: "Sell.do + Internal CRM Bridge",
  //   blurb: "Two-way sync, dedupe logic, and lead stage automations.",
  //   image: "/images/projects/sell-do-bridge.webp",
  //   category: "Integration",
  //   tech: ["Node.js", "REST", "MySQL", "BullMQ"],
  //   period: "2023",
  //   role: "Backend",
  //   links: { live: "#", repo: "" },
  //   highlights: [
  //     "Idempotent sync workers",
  //     "Conflict resolution + audit trail",
  //     "Alerting & backoff retries",
  //   ],
  // },
  // {
  //   id: "react-landing",
  //   title: "Marketing Landing Pages",
  //   blurb: "High-converting, fast, responsive landing pages with A/B hooks.",
  //   image: "/images/projects/landing-pages.webp",
  //   category: "Landing Page",
  //   tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
  //   period: "2022 – 2025",
  //   role: "Frontend",
  //   links: { live: "#", repo: "" },
  //   highlights: [
  //     "CLS-safe animations, lazy images",
  //     "Form analytics + funnel events",
  //     "SEO best practices",
  //   ],
  // },
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
    <section className="min-h-screen py-24 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-black neon-text-blue glitch" data-text="VIEW MY WORK">
            VIEW MY WORK
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A curated selection of apps, integrations, and dashboards I’ve built.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
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
