import { motion } from 'framer-motion';
import { aboutImage } from '@/data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-darkGray section-animation">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div 
              className="relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={aboutImage}
                alt="Abhishek working on code" 
                className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold font-poppins mb-4">
              Full Stack 3D Animated Web Developer & Software Developer
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm a passionate developer from Pilibhit, Bisalpur, India with expertise in creating visually stunning and 
              functionally robust web applications. My journey in tech started with web development and expanded to 
              3D animation and software development.
            </p>
            
            <p className="text-gray-300 mb-6">
              I specialize in building responsive websites, interactive user interfaces, and complex web applications 
              using modern frameworks and technologies. My background in 3D animation allows me to bring unique visual 
              elements to my projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Pilibhit, Bisalpur, India</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>abhistudent240@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9149072825</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Computer Science</span>
              </div>
            </div>
            
            <div className="mt-8">
              <motion.a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-primary to-secondary text-dark font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
