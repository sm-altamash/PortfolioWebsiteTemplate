
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold mb-6">
            Dev<span className="text-blue-400">Portfolio</span>
          </a>
          
          <div className="flex space-x-8 mb-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="w-full max-w-md h-px bg-gray-700 mb-8"></div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p>Designed & Built with ❤️</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-8 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
