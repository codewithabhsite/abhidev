import { motion } from 'framer-motion';
import { skills, animation3DSkills } from '@/data/portfolioData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-dark section-animation">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I've developed expertise in various technologies throughout my career. Here's a breakdown of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-wrapper bg-darkGray rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-primary">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-lightGray rounded-full h-1.5">
                <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
              <div className="skill-details mt-3 text-sm text-gray-400">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 3D Animation Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">3D Animation <span className="text-primary">Skills</span></h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {animation3DSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-darkGray rounded-xl p-5 text-center hover:shadow-lg hover:shadow-primary/5 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-primary mb-4">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM2 12h20"></path>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.73 4a2 2 0 0 0-3.46 0"></path>
                      <path d="M18.63 13a17.89 17.89 0 0 0-5.63-9"></path>
                      <path d="M19.54 16.65a24.7 24.7 0 0 0-1.31-8.47"></path>
                      <path d="M21.94 21.14a24.3 24.3 0 0 0-2.4-14.14"></path>
                      <path d="M4.26 5.67a24.3 24.3 0 0 0 2.4 14.14"></path>
                      <path d="M10.37 13a17.89 17.89 0 0 1 5.63-9"></path>
                      <path d="M5.37 16.65a24.7 24.7 0 0 1 1.31-8.47"></path>
                      <path d="M7.73 4a2 2 0 0 0-3.46 0"></path>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  )}
                </div>
                <h4 className="font-medium">{skill}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
