export interface Project {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  categories: string[];
  websiteURL: string;
  codeURL: string;
}

const Projects: Project[] = [
  {
    id: "11",
    title: "Product Feedback App",
    imageURL: "/projects/ProductFeedbackApp.png",
    description: "",
    categories: ["Next.js", "Prisma", "Mysql", "Typescript"],
    websiteURL: "https://product-feedback-app-beta-five.vercel.app/",
    codeURL: "https://github.com/TofikE124/Product-Feedback-App",
  },
  {
    id: "7",
    title: "Designo",
    imageURL: "/projects/Designo.png",
    description: "",
    categories: ["React", "Typescript"],
    websiteURL: "https://gorgeous-brioche-7c0074.netlify.app/",
    codeURL: "https://github.com/TofikE124/Designo",
  },
  {
    id: "6",
    title: "Kanban Task Managment App",
    imageURL: "/projects/KanbanTaskManagment.png",
    description: "",
    categories: ["React", "Local Storage", "Typescript"],
    websiteURL: "https://graceful-cupcake-664f77.netlify.app/",
    codeURL: "https://github.com/TofikE124/Kanban-task-managment",
  },
  {
    id: "10",
    title: "Rock Paper Scissors Lizard Spock",
    imageURL: "/projects/RockPaperScissors.png",
    description: "",
    categories: ["Next.js"],
    websiteURL: "https://rock-paper-scissors-eta-sepia.vercel.app",
    codeURL: "https://github.com/TofikE124/rock-paper-scissors",
  },
  {
    id: "9",
    title: "Interactive comments section",
    imageURL: "/projects/InteractiveCommentsSection.png",
    description: "",
    categories: ["Next.js", "CSS", "NextAuth", "Primsa", "PostgresSQL"],
    websiteURL: "https://interactive-comments-section-pxi1.vercel.app/",
    codeURL: "https://github.com/TofikE124/interactive-comments-section",
  },
  {
    id: "1",
    title: "Audiophile",
    imageURL: "/projects/Audiophile.png",
    description: "",
    categories: ["React", "CSS"],
    websiteURL: "https://brilliant-begonia-545122.netlify.app/",
    codeURL: "https://github.com/TofikE124/Audiophile-Ecommerce-Website",
  },

  {
    id: "8",
    title: "Issue Tracker",
    imageURL: "/projects/IssueTracker.png",
    description: "",
    categories: ["Next.js", "CSS"],
    websiteURL: "https://issue-tracker-u639.vercel.app/",
    codeURL: "https://github.com/TofikE124/issue-tracker",
  },
  {
    id: "2",
    title: "Entrtainment Wep App",
    imageURL: "/projects/EntertainmentWebApp.jpg",
    description: "",
    categories: ["React", "Firebase", "CSS"],
    websiteURL: "https://startling-meerkat-af238a.netlify.app/",
    codeURL: "https://github.com/TofikE124/Entertainment-Wep-App",
  },
  {
    id: "3",
    title: "Multi Step Form",
    imageURL: "/projects/MultiStepForm.jpg",
    description: "",
    categories: ["React", "CSS"],
    websiteURL: "https://inspiring-truffle-aa8631.netlify.app/",
    codeURL: "https://github.com/TofikE124/MultiForm",
  },
  {
    id: "4",
    title: "Space Travel",
    imageURL: "/projects/SpaceTravel.jpg",
    description: "",
    categories: ["React", "CSS"],
    websiteURL: "https://symphonious-faun-36c411.netlify.app/",
    codeURL: "https://github.com/TofikE124/Space-Travel",
  },
  {
    id: "5",
    title: "Where in the world?",
    imageURL: "/projects/WhereInTheWorld.png",
    description: "",
    categories: ["React", "React Query", "Typescript"],
    websiteURL: "https://fanciful-crisp-3ecb19.netlify.app/",
    codeURL: "https://github.com/TofikE124/where-in-the-world-V2.0",
  },
];

export default Projects;
