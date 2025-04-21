
import { useEffect, useRef } from "react";
import { Calendar, Briefcase } from "lucide-react";

type TimelineItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const experiences: TimelineItem[] = [
    {
      title: "Senior Full Stack Developer",
      company: "Bright Lines Solutions",
      period: "2022 - Present",
      description: "Leading development of web applications and managing client projects.",
      achievements: [
        "Led the development of Meal Tracking System, improving order processing efficiency by 40%.",
        "Implemented Ticketing Management Services that reduced response time by 35%.",
        "Optimized database queries, resulting in 50% faster application performance."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Bright Lines Solutions",
      period: "2019 - 2022",
      description: "Developed and maintained web applications using PHP, Laravel, MySQL, and JavaScript.",
      achievements: [
        "Built the FrozenFlakes e-commerce platform with seamless payment integration.",
        "Designed and developed OrdoPromo marketing platform used by over 50 clients.",
        "Created reusable components that reduced development time by 25%."
      ]
    },
    {
      title: "Web Developer",
      company: "Tech Innovations",
      period: "2017 - 2019",
      description: "Focused on frontend development with occasional backend work.",
      achievements: [
        "Developed responsive websites for clients across various industries.",
        "Implemented SEO best practices, increasing client site traffic by an average of 30%.",
        "Collaborated with design team to create intuitive user interfaces."
      ]
    }
  ];
  
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      period: "2013 - 2017",
      description: "Graduated with honors. Focused on web technologies and software engineering.",
      achievements: [
        "Dean's List for academic excellence for all semesters.",
        "Completed thesis on 'Optimizing Database Performance in Web Applications'.",
        "Led the university web development club."
      ]
    },
    {
      title: "Advanced Web Development Certification",
      company: "Tech Learning Institute",
      period: "2018",
      description: "Intensive 6-month program focused on modern web development technologies.",
      achievements: [
        "Completed 10 projects applying modern frontend and backend technologies.",
        "Received distinction for final project - an LMS with integrated payment system."
      ]
    }
  ];

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
      id="experience" 
      ref={sectionRef}
      className="section-padding bg-blue-50 scroll-reveal transform translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experiences.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                    <div className="flex items-center text-blue-600 text-sm mb-2">
                      <span className="font-medium">{item.company}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                    <div className="flex items-center text-blue-600 text-sm mb-2">
                      <span className="font-medium">{item.company}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
