
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);

  // Animation trigger when in view
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
          sectionRef.current.classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Form submission simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-in-out active:opacity-100 active:translate-y-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4 animate-fade-in-down">
            Contact Me
          </h2>
          <p className="section-subtitle mx-auto animate-fade-in-down delay-200">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Contact Info Card */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-blue-100/90 via-white to-blue-50/80 rounded-2xl p-8 h-full shadow-2xl transition-transform duration-700 transform-gpu hover:scale-[1.025] animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
              <p className="text-gray-700 mb-8">
                I'm open to freelance opportunities, full-time positions, and collaborating on interesting projects. 
                Feel free to reach out if you have any questions or just want to say hello!
              </p>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-blue-600">
                    <Mail className="text-blue-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-blue-600 hover:underline">hello@example.com</a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-blue-600">
                    <Phone className="text-blue-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Phone</h4>
                    <a href="tel:+12345678901" className="text-blue-600 hover:underline">+1 (234) 567-8901</a>
                  </div>
                </div>
                {/* Github */}
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition duration-300 group-hover:bg-gray-900">
                    <Github className="text-blue-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      github.com/yourname
                    </a>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition duration-300 group-hover:bg-blue-700">
                    <Linkedin className="text-blue-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      linkedin.com/in/yourname
                    </a>
                  </div>
                </div>
              </div>
              {/* Social links */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110 shadow hover:shadow-lg"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200 transform hover:scale-110 shadow hover:shadow-lg"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Card */}
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up transition-transform duration-700 delay-200 hover:scale-[1.02]"
              style={{ boxShadow: "0 8px 48px 0 rgba(56,108,255,0.10)" }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input focus:shadow-lg focus:scale-105 transition duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input focus:shadow-lg focus:scale-105 transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="form-input resize-none focus:shadow-lg focus:scale-105 transition duration-200"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full py-3 tracking-wide text-lg shadow-md hover:shadow-xl transition-all duration-300
                    ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Custom Animations (Fade in up/down) */}
      <style>
        {`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-18px);
          animation: fadeInDown 1s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .active .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .active .animate-fade-in-down {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes fadeInUp {
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Contact;
