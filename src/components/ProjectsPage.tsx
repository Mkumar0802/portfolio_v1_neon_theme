import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

// Project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsPage = () => {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Chat with Ollama - Local LLM Chat UI (Streamlit)",
      description: "This is a lightweight chat UI built using Streamlit that lets you chat with local LLM models running via Ollama. It supports multiple models like mistral, llama3, sqlcoder:15b, and deepseek-coder-v2, and stores your chat history locally.",
      image: "/project1.jpg", // Replace with actual image paths
      technologies: ["Python", "LLM", "Ollama", "Streamlit"],
      category: "AI/ML",
      githubUrl: "https://github.com/Mkumar0802/GPT.git",
      liveUrl: "https://yourproject1.com"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment integration and admin dashboard.",
      image: "/project2.jpg",
      technologies: ["MERN Stack", "Stripe API", "JWT Auth"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://yourproject2.com"
    },
    {
      id: 3,
      title: "WhatsApp Chatbot",
      description: "AI-powered WhatsApp chatbot for customer support with Gupshup integration.",
      image: "/project3.jpg",
      technologies: ["Node.js", "Express", "Gupshup API", "MongoDB"],
      category: "backend",
      githubUrl: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern UI/UX design.",
      image: "/project4.jpg",
      technologies: ["React.js", "TypeScript", "TailwindCSS"],
      category: "frontend",
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com"
    },
    {
      id: 5,
      title: "Laravel CRM",
      description: "Customer relationship management system built with Laravel.",
      image: "/project5.jpg",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/crm",
      liveUrl: "https://yourcrm.com"
    },
    {
      id: 6,
      title: "React Task Manager",
      description: "Drag and drop task management application with real-time updates.",
      image: "/project6.jpg",
      technologies: ["React.js", "Firebase", "Material UI"],
      category: "frontend",
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://yourtaskmanager.com"
    }
  ];

  // State for filtering
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Function to handle project click (for modal view)
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  // Function to close project detail view
  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen py-20 px-6 relative bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Back Button */}
      <div className="container mx-auto mb-8">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 fade-in-left"
        >
          <FaArrowLeft />
          Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="container mx-auto text-center mb-12 fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-black neon-text-blue mb-4">
          MY WORK
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and solution.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto mb-12 flex flex-wrap justify-center gap-4 fade-in-up delay-100">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-2 rounded-full border font-semibold transition-all duration-300 ${
              activeFilter === category.id 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'border-primary text-primary hover:bg-primary/10'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-300 group cursor-pointer fade-in-up delay-${(index % 3) * 100}`}
            onClick={() => handleProjectClick(project)}
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl opacity-30">Project Image</span>
              </div>
              {/* <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              /> */}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  <FaExternalLinkAlt />
                </button>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-display font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-muted/50 text-xs rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-6 fade-in">
          <div className="relative bg-card border border-primary/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors duration-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image */}
            <div className="h-64 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl opacity-30">Project Image</span>
              </div>
              {/* <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold neon-text-blue mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold neon-text-pink mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted/50 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded-md"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
                
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-md"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="container mx-auto text-center py-12 fade-in">
          <h3 className="text-2xl font-display font-bold neon-text-pink mb-4">
            No projects found in this category
          </h3>
          <p className="text-muted-foreground">
            Try selecting a different category or check back later for new projects.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;