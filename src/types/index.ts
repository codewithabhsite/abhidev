export interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  certificates: string[];
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}
