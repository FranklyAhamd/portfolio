/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AbdulAzeez Ahmad",
  title: "Hi all, I'm Ahmad",
  subTitle: emoji(
    "A passionate Frontend Engineer 🚀 with experience building interactive and offline-first web applications using JavaScript, React.js, Next.js, HTML, and CSS. Skilled at creating responsive, user-friendly interfaces and integrating modern tools to deliver smooth, high-performance experiences. Always learning and building real-world solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FranklyAhamd/",
  linkedin: "https://www.linkedin.com/in/ahmad-abdulazeez-3193721b7/",
  gmail: "abdulazeezahmad234@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FRONTEND ENGINEER EXPLORING MODERN WEB TECHNOLOGIES AND TOOLS.",
  skills: [
    emoji(
      "⚡ Building responsive, user-friendly web applications using React.js and Next.js"
    ),
    emoji(
      "⚡ Build Progressive Web Applications (PWAs) for offline-first and online experiences"
    ),
    emoji(
      "⚡ Integrate third-party services like Firebase for authentication and database"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "IndexedDB",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University Oye-Ekiti (FUOYE)",
      logo: require("./assets/images/fuoye.png"),
      subHeader: "Bachelor of Science in Microbiology",
      duration: "Expected Graduation Year: 2025",
      desc: "Transitioned into frontend development alongside academic studies, building web apps and interactive projects.",
      descBullets: [
        "Expanded my skill set beyond microbiology by actively building real-world web applications during my studies.",
        "Built web projects alongside my university courses."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "AMJN Report Portal",
      companylogo: require("./assets/images/AMJN.png"),
      date: "May 2025 – Present",
      desc: "Developed the frontend of a report portal web app for admin members to submit and auto-collate monthly activity reports.",
      descBullets: [
        "Developed the frontend interface for a monthly report submission portal using JavaScript, HTML, CSS, and React.js.",
        "Collaborated with backend developers to ensure seamless data flow and system reliability."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Personal Projects & Freelance Work",
      companylogo: require("./assets/images/Ahmad.png"),
      date: "May 2019 – Present",
      desc: "Built multiple interactive web applications using JavaScript, React.js, and Next.js.",
      descBullets: [
        "Collaborated with local businesses to design user-friendly frontends and improve digital presence.",
        "Integrated Firebase for authentication and real-time database in client projects."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS AND CLIENT WORK",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Personal Portfolio",
      projectDesc:
        "My personal portfolio website built with React.js and deployed on GitHub Pages",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://franklyahamd.github.io/my-portfolio/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Frontend Development Certification",
      subtitle:
        "Completed certification for frontend development with React.js and modern JavaScript",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Frontend Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I occasionally write about frontend development and my learning journey.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Getting Started with React.js",
      description:
        "A beginner's guide to setting up your first React.js application and understanding core concepts."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE WHEN I GET THE OPPORTUNITY"),

  talks: [
    {
      title: "Introduction to Web Development",
      subtitle: "A talk for beginners interested in web development",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I SHARE MY THOUGHTS ON FRONTEND DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://voca.ro/1eruti5TOexa"],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234-913 125 5073",
  email_address: "abdulazeezahmad234@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
