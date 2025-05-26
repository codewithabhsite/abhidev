import { Skill, EducationItem, ExperienceItem, Project, ContactInfo } from '@/types';

export const skills: Skill[] = [
  {
    name: "HTML",
    proficiency: 95,
    description: "Expertise in semantic HTML5, accessibility standards, and modern markup practices."
  },
  {
    name: "CSS",
    proficiency: 80,
    description: "Strong understanding of CSS layouts, animations, Flexbox, Grid, and responsive design."
  },
  {
    name: "JavaScript",
    proficiency: 85,
    description: "Proficient in ES6+, DOM manipulation, async programming, and modern JS frameworks."
  },
  {
    name: "React",
    proficiency: 76,
    description: "Experience with React hooks, context API, state management, and component architecture."
  },
  {
    name: "Node.js",
    proficiency: 75,
    description: "Building RESTful APIs, server-side applications, and middleware integration."
  },
  {
    name: "MongoDB",
    proficiency: 70,
    description: "Database design, CRUD operations, aggregation pipelines, and data modeling."
  },
  {
    name: "Tailwind CSS",
    proficiency: 80,
    description: "Creating custom designs, responsive layouts, and component systems with utility classes."
  },
  {
    name: "Next.js",
    proficiency: 86,
    description: "Building SSR/SSG applications, API routes, and optimized React applications."
  },
  {
    name: "TypeScript",
    proficiency: 68,
    description: "Type systems, interfaces, generics, and integration with React/Node applications."
  },
  {
    name: "Framer Motion",
    proficiency: 60,
    description: "Creating fluid animations, transitions, and interactive motion effects for React apps."
  }
];

export const animation3DSkills = [
  "3D Modeling",
  "Texturing",
  "Animation",
  "Lighting"
];

export const educationHistory: EducationItem[] = [
  {
    title: "Learn Full Stack Web Development",
    institution: "Udemy Certified Program",
    period: "2017-2020",
    description: "Comprehensive program covering front-end and back-end technologies, database management, and deployment strategies.",
    certificates: [],
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Master in 3D Animation",
    institution: "Coursera/YouTube Advanced Training",
    period: "2020-2021",
    description: "Advanced training in 3D modeling, animation techniques, rendering, and visual effects creation.",
    certificates: [],
    skills: ["Blender", "3D Modeling", "Character Rigging", "Animation", "Rendering"]
  },
  {
    title: "Master in Web Development",
    institution: "Self-paced from Google/FreeCodeCamp",
    period: "2021-2023",
    description: "Advanced web development focusing on modern frameworks, responsive design, and performance optimization.",
    certificates: [],
    skills: ["React", "Redux", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Learn Software Development",
    institution: "Youtube/some paid courses",
    period: "2023-2025",
    description: "Expanding knowledge into broader software development including backend systems, APIs, and cloud technologies.",
    certificates: [],
    skills: ["Docker", "AWS", "CI/CD", "System Design", "GraphQL"]
  },
  {
    title: "AI & Machine Learning",
    institution: "Currently Learning",
    period: "2025-Present",
    description: "Exploring artificial intelligence, machine learning algorithms, and data science fundamentals.",
    certificates: ["In progress..."],
    skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis"]
  }
];

export const experienceHistory: ExperienceItem[] = [
  {
    title: "Main Programmer / Senior Coding Teacher",
    company: "Computer Science and Technology",
    period: "2022-2025",
    description: "Led development teams in creating educational software platforms while mentoring junior developers. Designed and implemented programming curriculum for advanced students, focusing on modern web technologies and software development practices.",
    responsibilities: [
      "Developing and maintaining educational software platforms",
      "Creating curriculum for advanced programming courses",
      "Mentoring junior developers and teaching students",
      "Implementing modern development workflows and practices",
      "Collaborating with education specialists to optimize learning outcomes"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS"]
  }
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "3D Web Experience",
    description: "Interactive 3D showcase for a product visualization with animations and user controls.",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f",
    technologies: ["Three.js", "WebGL", "GSAP", "React"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Full-stack productivity app with real-time updates, team collaboration and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts and filtering.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["React", "D3.js", "Socket.io", "Express"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Educational Platform",
    description: "Online learning platform with course management, video streaming, and progress tracking.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Social Network App",
    description: "Feature-rich social platform with real-time chat, user profiles, and content sharing.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    technologies: ["React", "GraphQL", "Apollo", "Firebase"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

export const contactInfo: ContactInfo = {
  location: "Pilibhit, Bisalpur, India",
  email: "abhistudent240@gmail.com",
  phone: "+91 9149072825",
  socialLinks: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};

export const profileImage = "/src/assets/profile.jpg";
export const aboutImage = "https://images.unsplash.com/photo-1544256718-3bcf237f3974";
