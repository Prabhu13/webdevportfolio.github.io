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
  title: "Computer Science Graduate Student",
  description:
    "Highly skilled and versatile computer science master's student with a strong background in version control, programming, database management, DevOps, web technologies, data analysis, machine learning, and a range of tools related to data science. Adept at collaborating with cross-functional teams and delivering results in fast-paced environments.",
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
  {
    Stack: 'Statistics',
    progressPercentage: '80',
  },
  {
    Stack: 'Data Mining',
    progressPercentage: '75',
  },
  {
    Stack: 'Data Analysis',
    progressPercentage: '80',
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
    desc: 'I worked as a frontend web developer, creating web-based admin dashboards with Vue.js, PHP, Bootstrap, jQuery, and Chart.js for multiple applications. Additionally, I developed a Python utility for overseeing ETL processes, facilitating data transfers from Google Cloud Storage to Redshift tables and converting API structures from YAML to Excel. I designed interactive logistics dashboards using Domo cards and reports, leveraging advanced data visualization to monitor inventory and shipments in real-time. I also established data pipelines from MySQL to BigQuery in GCP and integrated them with PowerBI for dynamic insights. These efforts optimized logistics, reduced costs, and improved delivery times while continuously refining data management processes for data-driven logistics improvements. ',
  },
  {
    role: 'API Engineer',
    company: 'CMA CGM Logistics',
    companyLogo: '/img/icons/common/cma1.png',
    date: 'Apr 2022 – Aug 2023',
    desc: 'As a Full Stack Engineer, I not only developed robust RESTful APIs with comprehensive error handling but also ventured into data science tasks. This included creating a Python utility for ETL processes, enabling the transfer of data from Google Cloud Storage to Redshift tables, and converting API structures from YAML to Excel for enhanced Business Analyst comprehension. Additionally, I designed interactive dashboards using tools like Domo to visualize key performance indicators and harnessed advanced data visualization techniques to provide real-time insights into inventory and shipment tracking. I integrated data pipelines from MySQL to BigQuery within Google Cloud Platform (GCP), coupled with PowerBI dashboards and monitoring features. This enabled data-driven decision-making and optimized logistics operations, reducing costs and improving delivery times. Throughout, I maintained a commitment to continuous data management process refinement through tools like Domo cards and reports, ensuring an efficient and streamlined data infrastructure.',
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
  {
    name: 'Credit Consumption Prediction Challenge',
    desc: 'Prepared and cleaned the acquired training and test data obtained from GreyAtom. Using different libraries of Python such as Numpy, Sklearn, pandas, matplotlib found insights and applied machine learning algorithms for the prediction.',
  },
  {
    name: 'Mahindra First Choice Predicting New Location',
    desc: 'Identifying the ownership pattern of cars throughout the country. Captures the problem wherein information regarding spending patterns identified. Applied different python libraries on data to select next best location for new Center. Sklearn, Seaborn, Numpy, pandas, ensembling',
  },
  {
    name: 'Sentiment Analysis Hackathon',
    desc: 'Used regex and NLTK library to find the sentiments from the given twitter data by GreyAtom. Preprocessed text, and applied NLP techniques to find whether twitterati have Positive, Negative or Neutral feedback towards given brand.',
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
