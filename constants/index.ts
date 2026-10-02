import type { ProjectItem, ExperienceItem, SocialItem, NavItem } from "./types";

export const navLinks: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experiences", href: "#experiences" },
  { name: "Contact", href: "#contact" },
];

export const myProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Task Manager Mobile App",
    description: "A modern task management mobile application built with React Native and Firebase",
    href: "https://github.com/Abdullah-Askari/TaskApp",
    logo: "/assets/logos/react-native.svg",
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
        name: "Expo",
        path: "/assets/logos/expo.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Jira Clone - Project Management",
    description: "A modern Jira-inspired project management web application built with React and Firebase",
    href: "https://github.com/Abdullah-Askari",
    logo: "/assets/logos/react.svg",
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
    href: "https://github.com/Abdullah-Askari/NexusChat",
    logo: "/assets/logos/react-native.svg",
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
  },
  {
    id: 4,
    title: "UPortal - University Portal Clone",
    description: "A University of Central Punjab portal clone mobile app built with React Native and Firebase",
    href: "https://github.com/Abdullah-Askari/UPortal",
    logo: "/assets/logos/react-native.svg",
    image: "/assets/projects/UPortal.jpg",
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
        name: "Expo",
        path: "/assets/logos/expo.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
];

export const myExperiences: ExperienceItem[] = [
  {
    id: 1,
    date: "July 2025 - Sep 2025",
    title: "Z2A Tech",
    job: "Web Developer Intern",
    contents: [
      "Built web applications using modern technologies.",
      "Implemented dynamic features using JavaScript.",
      "Understood and implemented state management.",
    ],
  },
];

export const experiences = myExperiences;

export const mySocials: SocialItem[] = [
  {
    name: "Github",
    href: "https://github.com/Abdullah-Askari",
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