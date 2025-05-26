import { motion } from 'framer-motion';
import { educationHistory } from '@/data/portfolioData';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-darkGray section-animation">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My <span className="text-primary">Education</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My academic journey and continuous learning that has shaped my technical expertise.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-12">
            {educationHistory.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item relative pl-8 ${index !== educationHistory.length - 1 ? 'pb-12' : ''}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-dark rounded-xl p-6 shadow-lg border border-gray-800">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold font-poppins text-primary">{item.title}</h3>
                    <span className="text-sm bg-lightGray px-3 py-1 rounded-full">{item.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-3">{item.institution}</h4>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="mb-3">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">🔖 Certificates:</h5>
                    <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                      {item.certificates.map((certificate, certIndex) => (
                        <li key={certIndex}>{certificate}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">🧠 Skills Gained:</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                        >
                          {skill}
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

export default EducationSection;
