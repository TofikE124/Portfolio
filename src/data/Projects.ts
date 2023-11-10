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
    id: "6",
    title: "Kanban Task Managment App",
    imageURL: "/projects/KanbanTaskManagment.png",
    description: "",
    categories: ["React", "Local Storage", "Typescript"],
    websiteURL: "https://graceful-cupcake-664f77.netlify.app/",
    codeURL: "https://github.com/TofikE124/Kanban-task-managment",
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