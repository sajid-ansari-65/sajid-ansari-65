const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Developer", icon: "🌐" },
  { title: "WordPress Developer", icon: "📝" },
  { title: "React / Next.js Developer", icon: "⚛️" },
  { title: "Cloud & DevOps (AWS)", icon: "☁️" },
];

const technologies = [
  { name: "HTML 5" },
  { name: "CSS 3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React JS" },
  { name: "Next JS" },
  { name: "Node JS" },
  { name: "MongoDB" },
  { name: "Three JS" },
  { name: "Git" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Python" },
  { name: "Java" },
  { name: "WordPress" },
];

const experiences = [
  {
    title: "Remote Freelancer Full Stack Developer",
    company_name: "Freelance",
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Building and maintaining full-stack web applications using React.js, Node.js, and related technologies.",
      "Developing custom WordPress themes and plugins for clients worldwide.",
      "Implementing cloud solutions using AWS services including EC2, S3, Lambda, and RDS.",
      "Collaborating with international clients to deliver high-quality, responsive web solutions.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Nandan Global",
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developed and maintained WordPress websites for the company's clients.",
      "Created custom themes and plugins to meet specific business requirements.",
      "Optimized website performance and implemented SEO best practices.",
      "Collaborated with the design team to implement pixel-perfect responsive designs.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Self-Employed",
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Developed REST APIs using Node.js and Express.js with MongoDB and SQL databases.",
      "Built interactive front-end applications using React.js and Angular.",
      "Implemented authentication, authorization, and security best practices.",
      "Deployed applications on cloud platforms including Heroku and AWS.",
    ],
  },
];

const projects = [
  {
    name: "Score Board App",
    description:
      "A real-time score tracking application built with TypeScript, featuring a clean and intuitive UI for tracking and managing scores across various games and competitions.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/sajid-ansari-65/score-board",
  },
  {
    name: "Todo API",
    description:
      "A robust RESTful API built with Node.js for managing tasks and to-do items, featuring CRUD operations, user authentication, and database integration with MongoDB.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "expressjs", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/sajid-ansari-65/Todo-api-nodejs",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and professional experience as a remote freelancer and full-stack developer, deployed on GitHub Pages.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    source_code_link:
      "https://github.com/sajid-ansari-65/sajid-ansari-65.github.io",
  },
  {
    name: "Slideshow Plugin",
    description:
      "A custom WordPress slideshow gallery plugin that provides an elegant way to display image galleries with smooth transitions and customizable settings.",
    tags: [
      { name: "php", color: "pink-text-gradient" },
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/sajid-ansari-65/slideshow-plugin",
  },
];

export { navLinks, services, technologies, experiences, projects };
