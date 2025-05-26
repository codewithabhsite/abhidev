import { motion } from 'framer-motion';
import { experienceHistory } from '@/data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-dark section-animation">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Work <span className="text-primary">Experience</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-12">
            {experienceHistory.map((experience, index) => (
              <motion.div 
                key={index}
                className="timeline-item relative pl-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-darkGray rounded-xl p-6 shadow-lg">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold font-poppins text-primary">{experience.title}</h3>
                    <span className="text-sm bg-dark px-3 py-1 rounded-full">{experience.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-3">{experience.company}</h4>
                  
                  <p className="text-gray-400 mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Key Responsibilities:</h5>
                    <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
