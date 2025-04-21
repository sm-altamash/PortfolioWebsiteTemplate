
import { useEffect, useRef } from "react";
import { Code, FileCode, Table, Database } from "lucide-react";

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    icon: string;
    customIcon?: React.ReactNode;
  }[];
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
        { name: "JavaScript", icon: "javascript", customIcon: <Code className="w-10 h-10 text-yellow-500" /> },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Tailwind CSS", icon: "tailwind", customIcon: <Code className="w-10 h-10 text-sky-500" /> },
        { name: "jQuery", icon: "jquery" },
        { name: "AJAX", icon: "ajax", customIcon: <FileCode className="w-10 h-10 text-blue-600" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: "php" },
        { name: "Laravel", icon: "laravel" },
        { name: "MySQL", icon: "mysql" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "GitLab", icon: "gitlab" },
        { name: "VS Code", icon: "vscode" },
        { name: "DataTables", icon: "datatables", customIcon: <Table className="w-10 h-10 text-blue-700" /> },
      ]
    }
  ];
  
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-blue-50 scroll-reveal transform translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">My Skills</h2>
          <p className="section-subtitle mx-auto">
            I specialize in these technologies to create powerful web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-card" 
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      {skill.customIcon ? (
                        skill.customIcon
                      ) : (
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                          alt={skill.name}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                          }}
                          className="w-10 h-10"
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md inline-block">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Skills</h3>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Frontend Development</span>
                  <span className="text-sm font-medium text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Backend Development</span>
                  <span className="text-sm font-medium text-blue-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Database Management</span>
                  <span className="text-sm font-medium text-blue-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">UI/UX Design</span>
                  <span className="text-sm font-medium text-blue-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
