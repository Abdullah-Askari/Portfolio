import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Task Manager Mobile App",
    description: "A modern task management mobile application built with React Native and Firebase",
    subDescription: [
      "Developed a cross-platform mobile app using React Native and NativeWind (TailwindCSS for React Native)",
      "Implemented real-time data synchronization and user authentication using Firebase",
      "Created intuitive task management features including categories, priorities, and due dates",
      "Designed a clean, modern UI with smooth animations and gestures for better user experience",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/TaskApp.jpeg",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react-native.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name:"Expo",
        path:"/assets/logos/expo.svg",
      }
    ],
  },
  {
    id: 2,
    title: "Jira Clone - Project Management",
    description:
      "A modern Jira-inspired project management web application built with React and Firebase",
    subDescription: [
      "Developed a responsive project management system with React and Tailwind CSS",
      "Implemented secure user authentication and authorization using Firebase Authentication",
      "Built efficient state management using Zustand for optimal performance",
      "Created drag-and-drop kanban boards, issue tracking, and project organization features",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/jira-clone.jpeg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 3,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "NexusChat - Real-time Chat Application",
    description: "A real-time chat application built with React Native, Expo, and Firebase",
    subDescription: [
      "Developed a mobile chat app with React Native and Expo for cross-platform deployment",
      "Implemented Firebase authentication with login, signup, and password recovery",
      "Built one-on-one messaging with real-time synchronization between users",
      "Designed user discovery and direct messaging features for registered users",
    ],
    href: "https://github.com/Abdullah-Askari/NexusChat",
    logo: "",
    image: "/assets/projects/NexusChat.jpeg",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react-native.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "/assets/logos/expo.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  }
];

export const myExperiences = [
  {
    id: 1,
    date: "2025",
    title: "Web Development Internship",
    job: "React Developer",
    contents: [
      "Developed responsive web applications using React and modern JavaScript",
      "Implemented component-based architecture and state management",
      "Collaborated with team members on frontend features and UI improvements",
      "Learned best practices in React development and web design patterns",
    ],
  },
];

export const experiences = myExperiences;

export const mySocials = [
  {
    name: "Github",
    href:"https://github.com/Abdullah-Askari",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/abdullah-askari/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/abdullah.askari_",
    icon: "/assets/socials/instagram.svg",
  },
];