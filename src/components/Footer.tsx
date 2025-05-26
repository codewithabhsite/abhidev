import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-darkGray border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <motion.h2 
              className="text-2xl font-bold font-poppins"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">Abhi</span>shek Shukla
            </motion.h2>
            <motion.p 
              className="text-gray-400 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack 3D Animated Web Developer
            </motion.p>
          </div>
          
          <motion.div 
            className="flex space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-primary transition-colors">Home</button>
            <button onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-primary transition-colors">About</button>
            <button onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-primary transition-colors">Skills</button>
            <button onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-primary transition-colors">Projects</button>
            <button onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-primary transition-colors">Contact</button>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400">
            &copy; {currentYear} Abhishek Shukla. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
