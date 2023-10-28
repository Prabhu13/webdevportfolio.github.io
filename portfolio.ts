import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Prabhakar Yadav',
  title: "Software Engineer",
  description:
    "Highly skilled and versatile computer science masters student with a strong background in version control, programming, database management, DevOps, web technologies and a range of tools. Adept at collaborating with cross-functional teams and delivering results in fast-paced environments.",
  resumeLink:
    'https://drive.google.com/file/d/1wBzGfVUr4fryZn_EfUd01OQZF2wFkF3V/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'Prabhu13',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://whimsical-cajeta-19d63d.netlify.app/',
  linkedin: 'https://www.linkedin.com/in/prabhakar13/',
  github: 'https://github.com/Prabhu13',
  facebook: 'https://www.facebook.com/prabhakar.yadav.161009/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Nodejs, Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nodejs',
          iconifyTag: 'skill-icons:nodejs-dark',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions and Bitbucket'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Google Cloud Platform',
          iconifyTag: 'skill-icons:gcp-light',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Kubernetes',
          iconifyTag: 'skill-icons:kubernetes',
        },
      ],
    },
    {
      title: 'Data Science',
      lottieAnimationFile: '/lottie/skills/data_analytics.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in creating data pipeline and ETL process'
        ),
        emoji(
          '⚡ Scripting different tools to support the ETL process'
        ),
        emoji(
          '⚡ Highly qualified in Statistics and figuring decision making dashboard'
        ),
        emoji('⚡ Creating visualization tool using free Libraries or Licensed tools like PowerBI and Tableau'),
        emoji(
          '⚡ Experience in developing efficient Machine Learning model that can be applied in actual practice'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Tableau',
          iconifyTag: 'logos:tableau-icon',
        },
        {
          skillName: 'PowerBI',
          iconifyTag: 'simple-icons:powerbi',
        },
        {
          skillName: 'Matplotlib',
          iconifyTag: 'devicon:matplotlib',
        },
        {
          skillName: 'ScikitLearn',
          iconifyTag: 'devicon:scikitlearn',
        },
        {
          skillName: 'Statistics',
          iconifyTag: 'flat-color-icons:statistics',
        },
        {
          skillName: 'Numpy',
          iconifyTag: 'logos:numpy',
        },
        {
          skillName: 'Pandas',
          iconifyTag: 'devicon:pandas-wordmark',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'New Jersey Institute of Technology',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2023 - December 2024',
    desc: 'Learned different subjects which gave deep practical knowledge on it',
    grade: 'Grade N/A',
    descBullets: [
      'Web Technologies',
      'Data Structures',
      'Data Mining',
      'Data Base Management Systems'
    ],
  },
  {
    schoolName: 'Ramrao Adik Institute of Technology, Mumbai University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'August 2014 - June 2018',
    desc: 'Learned different subjects which gave deep practical knowledge on it',
    grade: 'Grade A',
    descBullets: [
      'Computer Networks',
      'Object Oriented Programming in Java',
      'Operating Systems',
      'Computer Architecture',
      'Artificial Intillegence',
      'Machine Learning'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'Ingram Micro',
    companyLogo: '/img/icons/common/ingram.png',
    date: 'July 2018 – March 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Vue.js, PHP, Bootstrap, jQuery, Chart.js and some other libraries. ',
  },
  {
    role: 'API Engineer',
    company: 'CMA CGM Logistics',
    companyLogo: '/img/icons/common/cma1.png',
    date: 'Apr 2022 – Aug 2023',
    desc: 'I worked as Full Stack Engineer and instituted RESTful APIs with proper error handling and logging. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs and created changes in Shipwire.com product for and helped in backend enhancements',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/Prabhu13/webdevportfolio.github.io',
    link: 'https://whimsical-cajeta-19d63d.netlify.app/',
  },
  {
    name: 'Blood Bank Campaign Management System',
    desc: 'To create a CRUD based website in php for blood bank campaign in different locations',
    github: 'https://github.com/Prabhu13/BloodBank',
  },
  {
    name: 'Party Tracker',
    desc: 'Party as a punishment tracker is a website to track lists of defaulters. created using PHP, jQuery, AJAX, Bootstrap',
    github: 'https://github.com/Prabhu13/Party',
  },
  {
    name: 'Real Estate Property Listing and Selling',
    desc: 'Real Estate is a website for listing properties for sale, rent. Admin can list, edit, delete and update listings.',
    github: 'https://github.com/Prabhu13/Real-Estate',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Prabhakar',
  description:
    'A passionate Full Stack Web Developer and Data Scientist.',
  author: 'Prabhakar Yadav',
  image: 'https://avatars3.githubusercontent.com/Prabhu13',
  url: 'https://whimsical-cajeta-19d63d.netlify.app/',
  keywords: [
    'Prabhakar',
    'Prabhakar Yadav',
    '@Prabhu13',
    'Prabhu13',
    'Portfolio',
    'Prabhakar Portfolio ',
    'Prabhakar Yadav Portfolio',
  ],
};
