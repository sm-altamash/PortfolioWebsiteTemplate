
import { Code, FileText, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-white scroll-reveal transform translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">About Me</h2>
          <p className="section-subtitle mx-auto">
            I'm a passionate fullstack developer with a focus on creating intuitive and dynamic web experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt="Developer workspace" 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fullstack Developer at Bright Lines Solutions</h3>
            <p className="text-gray-700 mb-6">
              I am a dedicated fullstack developer with extensive experience in building robust web applications 
              and websites. Currently working at <span className="highlight">Bright Lines Solutions</span>, 
              I've contributed to various projects including Meal Tracking System, Ticketing Management Services, 
              and client websites like FrozenFlakes, OrdoPromo, and Medicare.
            </p>
            <p className="text-gray-700 mb-8">
              My expertise spans across frontend and backend technologies, with a strong focus on creating 
              clean, maintainable code and delivering exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Code className="text-blue-600" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Clean Code</h4>
                <p className="text-sm text-gray-600">Writing maintainable, efficient code</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Users className="text-blue-600" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Collaboration</h4>
                <p className="text-sm text-gray-600">Working effectively in teams</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Documentation</h4>
                <p className="text-sm text-gray-600">Thorough documentation practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
