/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Athreya's Portfolio",
  description:
    "A full-stack developer passionate about building scalable and impactful solutions. I thrive on creating seamless systems and focus on building efficient and user-friendly solutions.",
  og: {
    title: "Athreya Akondi Portfolio",
    type: "website",
    url: "https://athreya.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Athreya Akondi",
  logo_name: "Athreya Akondi",
  nickname: "Athreya",
  subTitle:
    "A full-stack developer passionate about building scalable and impactful solutions. I thrive on creating seamless systems and focus on building efficient and user-friendly solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1IDdcDwnLHIFKUMUg5PeKtJIlo8N3h5yK/view?usp=sharing",
  portfolio_repository: "https://github.com/akondi-athreya/Portfolio",
  githubProfile: "https://github.com/akondi-athreya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/akondi-athreya",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/athreya-akondi-/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:akondiathreya@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Next.js, and Tailwind CSS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating and managing backend APIs with Node.js, Express.js, and MongoDB",
        "⚡ Implementing authentication and security features including JWT and OTP verification",
        "⚡ Handling real-time data and event-driven architectures",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "black",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Tailwind css",
          fontAwesomeClassname: "",
          style: {
            color: "#06BCFF",
          },
        },
        {
          skillName: "ReactNative",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#06BCFF",
          },
        },
        {
          skillName: "Expo Dev",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "black",
          },
        },

        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "DataBase",
      fileName: "BlogsImg",
      skills: [
        "⚡ Proficient in database design, modeling, and normalization",
        "⚡ Experience with relational (SQL) and NoSQL databases",
        "⚡ Optimizing database performance, indexing, and query tuning",
        "⚡ Implementing database security and strategies",
        // "⚡ Working with cloud-based databases on AWS, GCP, and Azure",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },

        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Programming",
      fileName: "Programmer",
      skills: [
        "⚡ Strong command of Java for building object-oriented and scalable applications",
        "⚡ Skilled in Python for scripting, data manipulation.",
        "⚡ Experienced in writing clean, efficient, and well-documented code across multiple languages",
        "⚡ Familiar with debugging, testing, and optimizing code in C, C++, Java, and Python",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "",
          style: {
            // color: "black",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "",
          style: {
            // color: "#F24E1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "",
          style: {
            // color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/athreya_akondi/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akondi_athreya",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/akondi_athreya",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Athreya_Akondi",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/akondi_athreya/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Prakash Junior College",
      subtitle: "MPC",
      logo_path: "spjc_logo.gif",
      alt_name: "SPJC",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Completed my intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC).",
        "⚡ Actively participated in academic and extracurricular activities, enhancing my teamwork and time management skills.",
      ],
      website_link: "https://sriprakash.org/sri4/index.php/institutions/spjc",
    },
    {
      title: "Aditya College of Engineering",
      subtitle: "Artificial Intelligence and Machine Learning",
      logo_path: "aditya_logo.png",
      alt_name: "ADITYA UNIVERSITY",
      duration: "2022 - 2026 (PRESENT)",
      descriptions: [
        "⚡ Currently pursuing a degree in Artificial Intelligence and Machine Learning, gaining in-depth knowledge of AI concepts.",
        "⚡ Actively involved in research, focusing on developing innovative algorithms in Machine Learning and Data Science.",
        "⚡ Engaged in practical projects and coursework, applying knowledge to solve real-world problems.",
        "⚡ Associated with the multimedia department, contributing to the creation of documentary films and interviews, enhancing my communication and creative skills.",
      ],
      website_link: "https://acet.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML & CSS",
      subtitle: "Certiport",
      logo_path: "it-specialist-html-and-css.png",
      certificate_link:
        "https://www.credly.com/badges/1b72ce36-4926-49bb-8102-dda0368c00c4/public_url",
      alt_name: "Certiport",
      dingdong: "-",
      // color_code: "#8C151599",
    },
    {
      title: "Java",
      subtitle: "Certiport",
      logo_path: "it-specialist-java.png",
      certificate_link:
        "https://www.credly.com/badges/ac7dc961-6917-4c4b-bce9-7fd2bcf84408/public_url",
      alt_name: "Certiport",
      dingdong: "-",
      // color_code: "#00000099",
    },
    {
      title: "Programming Essentials in Python",
      subtitle: "Cisco",
      logo_path: "certificate_icon.svg",
      certificate_link: "/skills/Programming_Essentials_in_Python.png",
      alt_name: "Cisco",
      dingdong: "",
      // color_code: "#0C9D5899",
    },
    {
      title: "Programming Essentials in C",
      subtitle: "Cisco",
      logo_path: "certificate_icon.svg",
      certificate_link: "/skills/Programming_Essentials_in_C.png",
      alt_name: "Cisco",
      // color_code: "#1F70C199",
    },
    {
      title: "JavaScript Essentials 1",
      subtitle: "Cisco",
      logo_path: "jse1.png",
      certificate_link: "/skills/javascriptEssentials1.png",
      alt_name: "Cisco",
      // color_code: "#D83B0199",
    },
    {
      title: "JavaScript Essentials 2",
      subtitle: "Cisco",
      logo_path: "jse2.png",
      certificate_link: "/skills/javascriptEssentials2.png",
      alt_name: "Cisco",
      // color_code: "#1F70C199",
    },
    {
      title: "Azure AI Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "/skills/aiFundamentals.png",
      alt_name: "Microsoft",
      // color_code: "#0C9D5899",
    },
    {
      title: "Azure AI Engineer Associate",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "/skills/aiassociate.png",
      alt_name: "Microsoft",
      // color_code: "#00000099",
    },
    {
      title: "JavaScript (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/f1fd1b37ff4f",
      alt_name: "HackerRank",
      // color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Works and Internships",
  description:
    "I Have been Involved in Various Projects and Internships. Here are some of my work experiences.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Programmer Intern",
          company: "Technical Hub",
          company_url: "https://technicalhub.io",
          logo_path: "thub_logo.png",
          duration: "Feb 2024 - May 2024",
          location: "Surampalem.",
          description:
            "Gained extensive hands-on experience in Data Structures using C programming by implementing various algorithms and data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Developed a deep understanding of memory management, pointer manipulation, and algorithm optimization. Strengthened problem-solving and analytical skills by tackling complex coding challenges and optimizing solutions for efficiency and performance.",
          color: "#000000",
        },
        {
          title: "Summer Developer Intern",
          company: "Technical Hub",
          company_url: "https://technicalhub.io",
          logo_path: "thub_logo.png",
          duration: "Jun 2024 - Jul 2024",
          location: "Surampalem.",
          description:
            "Developed a feature-rich Coding Contest Reminder Web Application using React for the frontend and Node.js for the backend. Integrated APIs from multiple competitive programming platforms, including LeetCode, CodeChef, Codeforces, and GeeksforGeeks, to fetch and display upcoming contests in real-time. Implemented a user-friendly interface with filtering and sorting options, allowing users to track contests efficiently. Ensured seamless backend communication and optimized performance for a smooth user experience.",
          color: "#ee3c26",
        },
        {
          title: "Super Intern",
          company: "Technical Hub",
          company_url: "https://technicalhub.io",
          logo_path: "thub_logo.png",
          duration: "Jul 2025 - present",
          location: "Surampalem.",
          description:
            "Working on a project called HRMS, which is a Human Resource Management System. It is a web application that helps companies manage their employees, payroll, and other HR-related tasks. The project is being developed using Next.js for the frontend, Node.js (Express.js) for the backend and Flutter for Mobile Application. My role is to develop the backend and REST APIs of the application.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Passionate in Full Stack Development",
          // company: "twitter24.",
          company_url: "#",
          logo_path: "github_logo.png",
          duration: "",
          location: "",
          description:
            "Developed multiple full-stack web applications using React, Node.js, MongoDB ( MERN Stack ) and latest Frameworks like Tailwind CSS, Next.js . Gained hands-on experience in API integration, authentication, real-time data fetching, and UI/UX optimization while working on diverse projects for startups and college events.",
          color: "#000000",
        },
        {
          title: "AI enthusiast",
          // company: "twitter24.",
          company_url: "#",
          logo_path: "ai.png",
          duration: "",
          location: "",
          description:
            "Passionate about Artificial Intelligence and its applications. Continuously learning and exploring the latest advancements in AI, including machine learning, deep learning, and natural language processing. Eager to apply AI techniques to solve real-world problems and contribute to innovative projects.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Developed multiple full-stack web applications using React, Node.js, MongoDB ( MERN Stack ) and latest Frameworks like Tailwind CSS, Next.js . Gained hands-on experience in API integration, authentication, real-time data fetching, and UI/UX optimization while working on diverse projects for startups and college events.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ba_contact_me.png",
    description:
      "I am available on almost every social media. You can message me. I can help you with ML, AI, Full Stack Dev and React Native, Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "1-39/6, Ramaraju Nagar, Bendapudi Post, Annavaram.",
    locality: "533406",
    country: "INDIA",
    region: "Andhra Pradesh",
    postalCode: "533406",
    streetAddress: "Ramaraju Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/a9SVZPW24n6WXW3i8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
