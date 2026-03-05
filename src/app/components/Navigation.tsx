import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { LoginDialog } from "./dialogs/LoginDialog";
import { RequestAccessDialog } from "./dialogs/RequestAccessDialog";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRequestAccessOpen, setIsRequestAccessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/robotics_club_dark.png" 
              alt="RCA Robotics Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-black text-white">
              RCA <span className="text-cyan-400">Robotics</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Login
            </button>
            <motion.button
              onClick={() => setIsRequestAccessOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Request Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-cyan-400/30 blur-xl" />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-cyan-500/20"
      >
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 space-y-3 border-t border-cyan-500/20">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => setIsRequestAccessOpen(true)}
              className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-center"
            >
              Request Access
            </button>
          </div>
        </div>
      </motion.div>

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <RequestAccessDialog open={isRequestAccessOpen} onOpenChange={setIsRequestAccessOpen} />
    </motion.nav>
  );
}
