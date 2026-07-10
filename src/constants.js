// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import socketioLogo from './assets/tech_logo/Socketio.png'; // added import
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import zustandLogo from './assets/tech_logo/zustand.png'; // added import
import shadcnLogo from './assets/tech_logo/shadcn.png'; // fixed import path
import ChatAppLogo from './assets/work_logo/chataap.png';
import PassOpLogo from './assets/work_logo/passop.png';
import ItaskLogo from './assets/work_logo/itask.png';
import NetflixLogo from './assets/work_logo/netflix.png';
import jwtauth from './assets/tech_logo/jwt.png';
import razorpayLogo from './assets/tech_logo/razorpay.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import FramerMotion from './assets/tech_logo/Framer.png';
import interviewIQLogo from './assets/work_logo/interview.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'Shadcn UI', logo: shadcnLogo },
      { name: 'Framer Motion', logo: FramerMotion },

       // fixed property name to `logo`
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Socket.IO', logo: socketioLogo }, // added Socket.IO logo
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name:'JWT Authentication',logo:jwtauth},
      {name:'Razorpay',logo:razorpayLogo},
      {name:'Firebase',logo:firebaseLogo}
    

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
     {
      id: 0,
      title: "AI Interviewer Agent — InterviewIQ",
      description:"Architected a production AI SaaS with a 6-model fallback chain (Gemini/Claude), achieving 99%+ uptime for resume parsing and automated interviews. I engineered a real-time Web Speech API voice pipeline with an AI evaluation engine and Recharts analytics dashboard. Security and monetization were handled via OAuth 2.0/JWT and a Razorpay credit system with HMAC-SHA256 verification, all deployed through Vercel CI/CD.",
      image: interviewIQLogo,
      tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Gemini API", "Claude API", "Web Speech API", "OAuth 2.0", "Razorpay", "Recharts"],
      github: "https://github.com/ShantannuDev2003/InterviewIQ",
      webapp: "https://interviewiq-client-c870.onrender.com/",
    },
    {
  id: 1,
  title: "LeadPilot AI - AI Enhanced CRM Platform",
  description:"Built an AI-powered CRM platform that streamlines sales workflows through secure JWT authentication, Kanban-based drag-and-drop lead management, and comprehensive contact, task, and note management. Integrated OpenRouter LLMs to generate AI-powered lead summaries, personalized emails, and actionable sales insights. Developed an analytics dashboard with real-time KPIs including pipeline value, win rate, average deal size, and stage-wise conversions, while ensuring robust validation using Zod across REST APIs. Deployed the application with a scalable full-stack architecture using Vercel, Render, and MongoDB Atlas.",
  image: LeadPilotLogo,
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "OpenRouter AI",
    "JWT",
    "Tailwind CSS"  
  ],
  github: "https://github.com/ShantannuDev2003/LeadPilot-AI",
  webapp: "https://lead-pilot-ai-mu.vercel.app/login"
},
   
    {
      id: 2,
      title: "Real Time Chat Application",
      description:"Developed a real-time chat platform that enables both personal and group conversations with a sleek, fully responsive user interface. Implemented secure authentication using JWT and integrated file handling through Multer for seamless image and document sharing. Leveraged Socket.io to power instant messaging with emoji support, while using Zustand for efficient and smooth state management. The result was a highly interactive, user-friendly, and scalable communication platform built with clean, modular, and maintainable code architecture.",
      image: ChatAppLogo,
      tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Zustand", "Socket.io"],
      github: "https://github.com/ShantannuDev2003/chat-app-client",
      webapp: "https://chat-app-client-52po.vercel.app/auth",
    },
   
    {
      id: 3,
       title: "Password Manager",
  description:
    "Developed a secure and feature-rich password management application with encrypted data storage and a modern user interface. Implemented core functionalities including create, update, delete, and clipboard copy for saved passwords. Integrated real-time toast notifications and animated visual feedback to deliver a smooth and responsive user experience.",
  image: PassOpLogo,
  tags: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React"],
  github: "https://github.com/ShantannuDev2003/password-manager",
  webapp: "https://password-manager-usfv.vercel.app/",
    },
    {
  id: 4,
  title: "iTask — Advanced To-Do Application",
  description:
    "Built a modern and responsive task management application with advanced features such as voice-driven task creation, drag-and-drop reordering, and a real-time productivity dashboard. Implemented customizable themes, dark/light mode, and category tagging for a personalized experience. Integrated overdue detection, completion tracking, and local persistence using localStorage to ensure offline functionality. Delivered a polished, interactive, and efficient productivity tool with a sleek React + Tailwind CSS frontend and clean, modular architecture.",
  image: ItaskLogo,
  tags: ["React", "Tailwind CSS", "Web Speech API", "localStorage", "Drag and Drop", "Vite"],
  github: "https://github.com/ShantannuDev2003/Todo-list",
  webapp: "https://todo-list-nine-beta-22.vercel.app/",
},
    {
  "id": 5,
  "title": "CandidateIQ — Multi-Source Candidate Data Transformer",
  "description": "Built a production-grade ETL pipeline that ingests candidate data from multiple sources (ATS JSON, GitHub profile API), normalizes and deduplicates fields into one canonical profile, and scores each field with a confidence rating (0–1) with full provenance tracking. Engineered a runtime config-driven projection layer that reshapes output schema without code changes — supporting field remapping, E.164 phone normalization, ISO-3166 country codes, and YYYY-MM date standardization. Exposed via a REST API with a React dashboard featuring file upload, visual config builder, confidence bar charts, color-coded skill chips, and a searchable provenance table.",
  "image": "CandidateIQLogo",
  "tags": [
    "Node.js",
    "ES Modules",
    "JavaScript",
    "Commander.js",
    "Axios",
    "Zod",
    "libphonenumber-js",
    "date-fns",
    "i18n-iso-countries",
    "Vitest",
    "JSON"
  ],
  "github": "https://github.com/ShantannuDev2003/candidate-transformer"
},
{
  id: 6,
  title: "Netflix Clone",
  description:
    "Built a responsive Netflix landing page using HTML and CSS, replicating the official website's design and layout. Implemented hero sections, feature showcases, FAQ accordion structure, and a clean dark-themed UI inspired by Netflix. Optimized for all screen sizes to deliver a smooth and realistic streaming platform interface.",
  image: NetflixLogo,
  tags: ["HTML", "CSS", "Responsive Design"],
  github: "https://github.com/ShantannuDev2003/netflic-clone-hmtl-css-",
  webapp: "https://netflixclonelandingpage-five.vercel.app/",
}


  ];
