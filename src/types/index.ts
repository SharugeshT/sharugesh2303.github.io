export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Basic';
  description?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectContribution {
  text: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  stack: string[];
  description: string;
  contributions: string[];
  visualTheme: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Achievement {
  title: string;
  event: string;
  placement: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface CourseworkItem {
  name: string;
}
