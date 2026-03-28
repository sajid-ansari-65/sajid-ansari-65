const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Developer", icon: "🌐" },
  { title: "WordPress Expert", icon: "📝" },
  { title: "React / Next.js Developer", icon: "⚛️" },
  { title: "Cloud & DevOps (AWS)", icon: "☁️" },
];

const technologies = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React JS" },
  { name: "Next JS" },
  { name: "Node JS" },
  { name: "Nest JS" },
  { name: "WordPress" },
  { name: "PHP" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Redux" },
  { name: "Tailwind CSS" },
  { name: "Git" },
];

const experiences = [
  {
    title: "Senior / Lead Web Developer",
    company_name: "Guzman y Gomez (Australia)",
    iconBg: "#383E56",
    date: "June 2020 - Present",
    points: [
      "Leading full-stack development in scrum teams for Australia's leading Mexican restaurant chain.",
      "Built WordPress customizations and full-stack features using Node.js, Nest.js, and React.",
      "Developed RESTful APIs and microservices for order processing flows integrated with UberEats, DoorDash, MenuLog, and Deliveroo.",
      "Architected the Resto 365 Admin Panel and Online Ordering System handling thousands of daily orders.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company_name: "Uplers (Remote)",
    iconBg: "#E6DEDD",
    date: "October 2020 - April 2021",
    points: [
      "Developed and maintained WordPress sites with custom theme and plugin development.",
      "Implemented Figma-to-WordPress designs with pixel-perfect accuracy.",
      "Customized WooCommerce stores with advanced e-commerce functionality.",
      "Optimized website performance, SEO, and cross-browser compatibility.",
    ],
  },
  {
    title: "Senior PHP Developer",
    company_name: "CodeWorks Consulting",
    iconBg: "#383E56",
    date: "June 2019 - October 2020",
    points: [
      "Built e-commerce platforms and WooCommerce-based solutions for clients like DollarSprout.",
      "Created RESTful APIs and integrated third-party services for business automation.",
      "Mentored junior developers and conducted code reviews to maintain high code quality.",
      "Implemented CI/CD pipelines and automated testing workflows.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Lanet Team Software Solution",
    iconBg: "#E6DEDD",
    date: "October 2018 - May 2021",
    points: [
      "Developed WordPress, WooCommerce, and Laravel applications across multiple client projects.",
      "Built projects including MuscleBox (fitness subscription), Digital Workshop Center, Upfit, and Fritz and Rose.",
      "Implemented payment gateway integrations with Stripe, PayPal, and Razorpay.",
      "Collaborated with cross-functional teams to deliver scalable web solutions.",
    ],
  },
];

const projects = [
  {
    name: "GYG Online Ordering",
    description:
      "A full-scale online ordering system for Guzman y Gomez restaurants across Australia, handling thousands of daily orders with real-time menu management, payment processing, and delivery integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "nestjs", color: "pink-text-gradient" },
    ],
    source_code_link: "https://order.guzmanygomez.com.au/",
  },
  {
    name: "GYG Resto 365 Admin",
    description:
      "An enterprise admin panel for managing restaurant operations, menus, staff, and order workflows for 200+ Guzman y Gomez locations with role-based access control.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    source_code_link: "https://www.guzmanygomez.com/",
  },
  {
    name: "DollarSprout",
    description:
      "A high-traffic personal finance blog and media platform built with WordPress, featuring custom theme development, podcast integration, and optimized for SEO performance.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "php", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    source_code_link: "https://dollarsprout.com/",
  },
  {
    name: "Capauth SSO Backend",
    description:
      "A Django-based Single Sign-On (SSO) authentication backend for Capabara, providing secure user authentication, session management, and API authorization across multiple services.",
    tags: [
      { name: "django", color: "green-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "rest-api", color: "pink-text-gradient" },
    ],
    source_code_link: "https://app.capabara.com/mycapabara",
  },
];

export { navLinks, services, technologies, experiences, projects };
