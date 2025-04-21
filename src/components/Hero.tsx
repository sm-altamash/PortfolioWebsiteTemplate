
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypingComplete(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-slide-in">
            <p className="text-blue-600 font-semibold text-lg mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Fullstack <br /> 
              <span className="text-blue-700">Developer</span>
            </h1>
            
            <div className="h-16">
              <div className={`typing-container ${typingComplete ? 'animate-none' : 'animate-typing'}`}>
                <p className="text-lg md:text-xl text-gray-700">
                  I build responsive web applications and clean code.
                </p>
              </div>
              
              {typingComplete && (
                <p className="animate-fade-in text-lg md:text-xl text-gray-700">
                  Specializing in modern web technologies.
                </p>
              )}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center mt-10 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-bold">5+</span>
                </div>
                <p className="text-gray-700">Years<br/>Experience</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-bold">10+</span>
                </div>
                <p className="text-gray-700">Projects<br/>Completed</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 animate-bounce-light"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-blue-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
