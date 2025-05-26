import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const handleNavClick = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold font-poppins text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Abhi</span>shek
          <span className="hidden md:inline-block text-sm font-normal ml-2 text-gray-400">Full Stack Developer</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button onClick={() => handleNavClick('home')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Home</button>
          <button onClick={() => handleNavClick('about')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">About</button>
          <button onClick={() => handleNavClick('skills')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Skills</button>
          <button onClick={() => handleNavClick('education')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Education</button>
          <button onClick={() => handleNavClick('experience')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Experience</button>
          <button onClick={() => handleNavClick('projects')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Projects</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link py-2 px-1 font-medium hover:text-primary transition-colors border-b-2 border-transparent">Contact</button>
        </motion.nav>
        
        {/* Mobile menu button */}
        <motion.button 
          id="mobile-menu-button" 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`mobile-menu absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-gray-800 md:hidden ${
          mobileMenuOpen ? 'active' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => handleNavClick('home')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('skills')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => handleNavClick('education')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Education
          </button>
          <button 
            onClick={() => handleNavClick('experience')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Experience
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="py-2 px-4 font-medium hover:bg-lightGray hover:text-primary rounded transition-colors text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
