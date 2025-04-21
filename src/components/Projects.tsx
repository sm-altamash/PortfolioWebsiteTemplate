
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  link: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Meal Tracking System",
      description: "A comprehensive system to track meal orders and deliveries with reporting features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      category: "web-app",
      techStack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      link: "#"
    },
    {
      id: 2,
      title: "Ticketing Management Services",
      description: "A ticketing platform for customer support with automated workflows and analytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "web-app",
      techStack: ["PHP", "MySQL", "jQuery", "AJAX", "Bootstrap"],
      link: "#"
    },
    {
      id: 3,
      title: "FrozenFlakes Website",
      description: "A responsive e-commerce website with product catalog and shopping cart functionality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      category: "website",
      techStack: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
      link: "#"
    },
    {
      id: 4,
      title: "OrdoPromo Platform",
      description: "A marketing platform for promotional campaigns and customer engagement.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      category: "web-app",
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 5,
      title: "Medicare Website",
      description: "A healthcare service provider website with appointment scheduling system.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
      category: "website",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#"
    },
    {
      id: 6,
      title: "DataTable Integration Tool",
      description: "A tool for seamless integration of DataTables with various backends.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      category: "tool",
      techStack: ["JavaScript", "jQuery", "DataTables", "PHP"],
      link: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-app", label: "Web Apps" },
    { id: "website", label: "Websites" },
    { id: "tool", label: "Tools" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          sectionRef.current.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding bg-white scroll-reveal transform translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <a href={project.link} className="text-blue-600 hover:text-blue-800" aria-label="External link">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Interested in working together? Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
