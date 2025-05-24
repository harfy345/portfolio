import {
  mobile,
  backend,
  creator,
  web,
  loml,
  yoom,
  py_flask,
  javascript,

  php,
  html,
  css,
  reactjs,

  meta,
  aora,
  muhc,
  clife,
  inlibro,
  morganStanley,
  systemexAutomation,
  nodejs,
  tailwind,
  git,
  docker,
  fdm,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desktop Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer - Automation/Integration",
    company_name: "Systemex Automation",
    icon: systemexAutomation,
    iconBg: "#383E56",
    date: "25 MAR - Present",
    points: [
      "Project Leadership: Successfully lead projects from concept to deployment, managing the entire lifecycle including requirements gathering, design, development, testing, and deployment.",
      "Client Interaction: Collaborated with clients to understand and document chnical and functional requirements, ensuring solutions meet their needs.",
    "Team Support: Provided technical assistance and mentorship to colleagues, resolving complex issues in their projects and improving overall team productivity.",
    "Robot Integration and Testing: Conducted rigorous testing of code on industrial robots, ensuring seamless functionality, performance, and integration within automated systems.",
    ],
  },
   {
    title: "Java/Scala Developer",
    company_name: "Morgan Stanley",
    icon: morganStanley,
    iconBg: "#383E56",
    date: "2024 MAR - 2025 MAR",
    points: [
      "Worked closely with business stakeholders to gather requirements and implement rulebased fraud detection modules.",
      "Developed custom frameworks using Java and Scala, utilizing Apache Spark to process large volumes of transactions, trades, and account data.",
      "Applied business-provided rules to identify suspicious activities and generate real-time fraud alerts.",
      "Designed a robust system to efficiently distribute alerts to compliance officers, streamlining their review and investigation process.",
      "Ensured 100% test case and code coverage for all modules, maintaining high-quality and reliable code.",
      "Created multiple frameworks to improve code reusability.",
      "Developed a scalable framework, improving fraud detection accuracy and reducing false positives.",
    ],
  },
  {
    title: "Software Engineer Consultant",
    company_name: "FDM Group",
    icon: fdm,
    iconBg: "#383E56",
    date: "2024 MAR - 2025 MAR",
    points: [
      "Worked on multiple projects, including developing web applications that integrated with OpenAI API for tools like budget calculators, resume scanners, and resume filtering systems.",
      "Utilized Java Spring Boot for backend development, ensuring seamless API integration and efficient data processing.",
      "Leveraged SQL for database management and optimized queries to handle large-scale data.",
      "Focused on building scalable, reliable systems while maintaining high code quality and test coverage.",
      "Built a fully customizable chatbot with a C# backend and Angular frontend, using OpenAI to answer questions related to any topic (in our case, it was our website), providing a seamless user support experience.",
    ],
  },
  {
    title: "FULL STACK DEVELOPER",
    company_name: "McGill university health center",
    icon: muhc,
    iconBg: "#383E56",
    date: "2023 APR - 2023 NOV",
    points: [
      `Developed a streamlined content uploading system for the MUHC website's "MUHC in
      the Media" section, facilitating easier content management and prominently featuring
      it on the website's homepage. This initiative involved creating requisite 􀂦les, themes,
      and blocks.`,
      `Implemented a ticketing system to enable internal teams to e􀂨ciently report, track,
      and resolve bugs, ensuring greater visibility, reproducibility, and resolution.`,
      `Implementing responsive design and ensuring cross-browser compatibility.`,
      `Participating in code reviews and providing constructive feedback to other developers.`,
    ],
  },
  {
    title: "Full stack developer - Intern",
    company_name: "Inlibro inc",
    icon: inlibro,
    iconBg: "#383E56",
    date: "April 2021 - Augest 2021",
    points: [
      "Developing and maintaining web applications using Linux, github, perl, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer (Freelance)",
    company_name: "H&A solutions (My company)",
    icon: meta,
    iconBg: "#383E56",
    date: "2019 - present",
    points: [
      "Offering freelance services in web, mobile, and desktop application development.",
      "Specializing in crafting custom solutions tailored to meet the unique needs of each client.",
      "Focusing on innovation and efficiency to deliver high-quality applications.",
      "Enhancing user experience and driving business growth through innovative solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Aora AI",
    description:
      "full stack react native app using appwrite for the backend and the storage. An app to share AI generated video",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "NativeWind",
        color: "pink-text-gradient",
      },
    ],
    image: aora,
    source_code_link: "https://github.com/harfy345/Aora-react-native",
  },
  {
    name: "Yoom",
    description:
      "Secure and stylish virtual meetings with Yoom, featuring Next.js for performance, Clerk for authentication, and Tailwind CSS for sleek design",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: yoom,
    source_code_link: "https://github.com/harfy345/Yoom",
  },
  {
    name: "Love Of My Life (LOML)",
    description:
      "Web-based platform that allows users to search and find a partner, fully made with PHP and phpmyadmin for database. Also, it has a messaging system.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "phpmysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: loml,
    source_code_link: "https://github.com/harfy345/LOML",
  },
  {
    name: "Scalable Python-flask site",
    description:
      "Web application that enables users to add, remove their notes from their accounts, fully scalable and has auth.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "pink-text-gradient",
      },
    ],
    image: py_flask,
    source_code_link: "https://github.com/harfy345/python-flask-website-with-auth",
  },
  
];

export { services, technologies, experiences, testimonials, projects };