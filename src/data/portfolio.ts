import type {
  NavLink,
  SocialLink,
  SkillCategory,
  Project,
  Achievement,
  Certification,
  CourseworkItem,
} from '@/types';

export const profile = {
  name: 'Sharugesh T',
  title: 'Software Developer | Full-Stack Development | Cybersecurity',
  email: 'sharugesh28@gmail.com',
  linkedin: 'https://linkedin.com/in/sharugesh-t-9aa848356',
  github: 'https://github.com/sharuges2303',
  tryhackme: 'https://tryhackme.com/p/sharugesh',
  languages: ['Tamil', 'English'],
  cgpa: '8.0',
  education: 'B.E. Cybersecurity Engineering',
  college: 'J.J. College of Engineering & Technology, Trichy',
  collegeYears: '2024–2028',
  careerObjective: 'Seeking a Software Development Internship or Entry-Level Software Developer role.',
};

export const heroContent = {
  greeting: "Hi, I'm Sharugesh T.",
  headline: 'Building Secure Software. Engineering Intelligent Experiences.',
  description:
    "I'm a Software Developer and B.E. Cybersecurity Engineering student passionate about building secure, scalable full-stack applications and exploring the intersection of software engineering and cybersecurity.",
  roles: ['Software Developer', 'Full-Stack Developer', 'Cybersecurity Enthusiast'],
};

export const aboutContent = {
  heading: 'Beyond Code, Building Solutions.',
  summary:
    "I am a Software Developer and B.E. Cybersecurity Engineering student at J.J. College of Engineering & Technology, with hands-on experience in developing and deploying full-stack applications. My experience includes contributing to a production-ready gamified student management platform, developing secure mobile applications, designing REST APIs, and building an automated web vulnerability scanner. I focus on combining practical software engineering with secure application development, authentication, database design, and web security. I am eager to contribute to real-world engineering teams and continue growing as a software developer.",
  cards: [
    { label: 'Education', value: 'B.E. Cybersecurity Engineering', icon: 'GraduationCap' },
    { label: 'CGPA', value: '8.0', icon: 'Award' },
    { label: 'Primary Interests', value: 'Full-Stack Development & Cybersecurity', icon: 'Code2' },
    { label: 'Career Goal', value: 'Software Dev Internship / Entry-Level Role', icon: 'Target' },
  ],
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Cybersecurity', href: '#cybersecurity' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/sharuges2303', icon: 'Github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sharugesh-t-9aa848356', icon: 'Linkedin' },
  { label: 'TryHackMe', url: 'https://tryhackme.com/p/sharugesh', icon: 'Shield' },
  { label: 'Email', url: 'mailto:sharugesh28@gmail.com', icon: 'Mail' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 'Advanced', description: 'Object-oriented programming, Spring ecosystem' },
      { name: 'SQL', level: 'Advanced', description: 'Query design, schema modeling, optimization' },
      { name: 'Python', level: 'Basic', description: 'Scripting, automation, security tooling' },
      { name: 'C', level: 'Basic', description: 'Systems programming fundamentals' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', level: 'Advanced', description: 'REST APIs, dependency injection, configuration' },
      { name: 'Spring Security', level: 'Advanced', description: 'Authentication, authorization, JWT' },
      { name: 'Node.js', level: 'Advanced', description: 'Server-side JavaScript runtime' },
      { name: 'FastAPI', level: 'Advanced', description: 'Python web framework for APIs' },
      { name: 'REST APIs', level: 'Advanced', description: 'Design, documentation, and integration' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    icon: 'Smartphone',
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Component architecture, hooks, state management' },
      { name: 'Flutter', level: 'Advanced', description: 'Cross-platform mobile development' },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Advanced', description: 'Relational database design and queries' },
      { name: 'MongoDB', level: 'Advanced', description: 'NoSQL document database' },
      { name: 'Git', level: 'Advanced', description: 'Version control and collaboration' },
      { name: 'Docker', level: 'Basic', description: 'Containerization for development' },
      { name: 'WSL', level: 'Advanced', description: 'Windows Subsystem for Linux' },
      { name: 'Linux Command Line', level: 'Advanced', description: 'Shell, scripting, system operations' },
    ],
  },
  {
    title: 'Cybersecurity & Digital Forensics',
    icon: 'Shield',
    skills: [
      { name: 'Web & API Security', level: 'Advanced', description: 'OWASP, vulnerability assessment' },
      { name: 'Nmap', level: 'Advanced', description: 'Network discovery and port scanning' },
      { name: 'Burp Suite', level: 'Advanced', description: 'Web application security testing' },
      { name: 'Wireshark', level: 'Advanced', description: 'Network protocol analysis' },
      { name: 'FTK', level: 'Basic', description: 'Disk forensics investigation' },
      { name: 'Volatility', level: 'Basic', description: 'Memory forensics framework' },
      { name: 'Disk & Memory Analysis', level: 'Basic', description: 'Forensic artifact extraction' },
      { name: 'Log Analysis', level: 'Advanced', description: 'Security event investigation' },
      { name: 'Network Traffic Analysis', level: 'Advanced', description: 'Packet-level inspection' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'pragatix',
    index: '01',
    title: 'PragatiX — Gamified Student Management Platform',
    category: 'Full-Stack Development',
    stack: ['Flutter', 'React.js', 'Spring Boot', 'MySQL'],
    description:
      'Contributed to the development of a production-ready student management platform designed to support college-wide academic and activity management. The platform integrates role-based access control, attendance management, discipline management, activity assignment, automated notifications, and gamification features to support student engagement and progress tracking.',
    contributions: [
      'Role-based access control for Admin, HOD, CC, and students.',
      'Gamification features including XP, rewards, streaks, and team-based activities.',
      'Attendance and discipline management.',
      'Activity assignment and student progress tracking.',
      'Automated notification modules.',
    ],
    visualTheme: 'dashboard',
  },
  {
    id: 'fitvision',
    index: '02',
    title: 'FitVision — Sports Talent Recognition Platform',
    category: 'Mobile Development & Secure Application Engineering',
    stack: ['Flutter', 'Python', 'MongoDB', 'JWT'],
    description:
      'Led full-stack development of an Android application designed to support sports talent registration, performance tracking, scholarship matching, and scouting workflows. Worked on backend APIs, database design, authentication, and secure file handling to support the platform\'s core functionality.',
    contributions: [
      'REST API and backend development.',
      'JWT authentication.',
      'Password hashing.',
      'Secure file uploads and video uploads.',
      'Talent registration and performance tracking.',
      'Scholarship matching for scouting workflows.',
    ],
    visualTheme: 'athletic',
  },
  {
    id: 'vuln-scanner',
    index: '03',
    title: 'Automated Web Vulnerability Scanner',
    category: 'Cybersecurity & Security Automation',
    stack: ['Python', 'Nmap'],
    description:
      'Developed a Python-based tool to automate web vulnerability assessment. Integrated Nmap for port scanning, implemented SQL Injection and Cross-Site Scripting (XSS) detection, parsed scan outputs, and generated structured PDF reports.',
    contributions: [
      'Automated web vulnerability assessment.',
      'Nmap integration for port scanning.',
      'SQL Injection detection.',
      'XSS detection.',
      'Scan-output parsing.',
      'Structured PDF report generation.',
    ],
    visualTheme: 'terminal',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'HackFinity 2025',
    event: 'National-Level 24-Hour Hackathon',
    placement: 'Participant',
    icon: 'Trophy',
  },
  {
    title: 'NeuraHack 2.0',
    event: 'Dakshaa T26',
    placement: 'Participant',
    icon: 'Code2',
  },
  {
    title: 'Cyber Aura \'25 — Cyber Hunt',
    event: 'Cyber Aura \'25',
    placement: '3rd Place',
    icon: 'Bug',
  },
  {
    title: 'Cyber Aura \'25 — Debugging',
    event: 'Cyber Aura \'25',
    placement: '2nd Place',
    icon: 'Terminal',
  },
  {
    title: 'Technical PPT Presentation',
    event: 'AVC College of Engineering',
    placement: '3rd Prize',
    icon: 'Presentation',
  },
];

export const coursework: CourseworkItem[] = [
  { name: 'Secure Software Development' },
  { name: 'Web and API Security' },
  { name: 'Network Security' },
  { name: 'Cryptography' },
  { name: 'Ethical Hacking' },
  { name: 'Digital Forensics and Incident Response' },
];

export const certifications: Certification[] = [
  { title: 'Java Programming', issuer: 'IIT Bombay' },
  { title: 'C Programming Training & Certification', issuer: 'IIT Bombay' },
  { title: 'Ethical Hacking', issuer: 'NPTEL' },
  { title: 'Introduction to Digital Forensics', issuer: 'Security Blue Team' },
];

export const cybersecTools = [
  { name: 'Nmap', description: 'Network reconnaissance and port scanning', icon: 'Radar' },
  { name: 'Burp Suite', description: 'Web application security testing proxy', icon: 'Globe' },
  { name: 'Wireshark', description: 'Network protocol and traffic analysis', icon: 'Activity' },
  { name: 'FTK', description: 'Disk forensics and evidence examination', icon: 'HardDrive' },
  { name: 'Volatility', description: 'Memory forensics and artifact extraction', icon: 'Cpu' },
  { name: 'Log Analysis', description: 'Security event and audit log review', icon: 'FileSearch' },
];

export const contactContent = {
  heading: "Let's Build Something Meaningful.",
  description:
    "I'm interested in software development internship opportunities, entry-level engineering roles, and projects involving full-stack development and cybersecurity. If you're working on an interesting problem, I'd be glad to connect.",
};
