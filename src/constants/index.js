import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  skitlearn,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  opensource,
  nuces,
  github,
  tesla,
  shopify,
  vendortrack,
  flightpulse,
  carrent,
  jobit,
  darazbot,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer Aspirant",
    company_name: "Fast NUCES",
    icon: nuces,
    iconBg: "#0092DC",
    date: "June 2024 - Now",
    points: [
"Developing and maintaining machine learning models and AI-powered applications using Python and relevant ML frameworks (e.g., TensorFlow, PyTorch, Scikit-learn).",

    "Collaborating with cross-functional teams including data scientists, product managers, and engineers to deliver intelligent, data-driven solutions.",

    "Ensuring models are scalable, efficient, and production-ready through robust testing, validation, and optimization.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Open Source Contributions",
    icon: opensource,
    iconBg: "#E6DEDD",
    date: "February 2023 - Ongoing",
    points: [

      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",

    
    ],
  },
  {
    title: "Data Analysis and Data Science Work",
    company_name: "Open source Contributions",
    icon: github,
    iconBg: "#383E56",
    date: "November 2023 - Now",
    points: [
    "Developing and maintaining data pipelines, statistical models, and analytical solutions using Python, SQL, and relevant data science libraries.",
    "Collaborating with cross-functional teams including analysts, product managers, and engineers to translate business problems into data-driven insights.",
    "Designing and implementing data visualizations and dashboards to effectively communicate findings to technical and non-technical stakeholders.",
    "Participating in peer reviews of data analyses and models, and providing constructive feedback to improve accuracy and efficiency.",


    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Open Source Contributions",
    icon: github,
    iconBg: "#842D93",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shahzaib proved me wrong.",
    name: "Saba Imtiaaz",
    designation: "CFO",
    company: "Sarsabz Fertilizers Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a AI/ML Engineer who truly cares about their clients' success like Shahzaib does.",
    name: "Muneer Shahnawaz",
    designation: "COO",
    company: "Dev Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shahzaib analyzed our user data and uncovered key insights, we were able to improve our strategy and boost performance by 50%.!",
    name: "Ayesha Baig",
    designation: "CTO",
    company: "682 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VendorTrack",
    description:
      "The Vendor Track is a comprehensive solution for managing vendors, contracts, budgets, expenses, and more. It streamlines operations, improves collaboration between teams, and provides insightful dashboards for decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vendortrack,
    source_code_link: "https://github.com/ShahzaibAli-1/Vendor-Management-System-DB-Project-",
  },
  {
    name: "FlightPulse",
    description:
      "This project leverages machine learning to analyze and predict departure delays, utilizing flight details, weather information, and delay records to uncover key patterns and build predictive models. ",
    tags: [
      {
        name: "Sckit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib & Seaborn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: flightpulse,
    source_code_link: "https://github.com/ShahzaibAli-1/Advanced-Flight-Departure-Delay-Analysis",
  },
  {
    name: "DarazBot",
    description:
      "This smart chatbot helps users find the best mobile phones on Daraz with personalized recommendations. It scrapes real-time data from Daraz, analyzes features, prices, and reviews, and suggests top options based on user preferences.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: darazbot,
    source_code_link: "https://github.com/ShahzaibAli-1/Daraz-Chatbot",
  },
];

export { services, technologies, experiences, testimonials, projects };
