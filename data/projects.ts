export type TechnologiesUsed =
  | "NodeJs"
  | "ReactJs"
  | "NextJs"
  | "JavaScript"
  | "Typescript"
  | "Express"
  | "Graphql"
  | "PostgreSql"
  | "MongoDb"
  | "HTML&CSS"
  | "Sass"
  | "MUI"
  | "TailwindCss"
  | "ChakraUi";
export type Project = {
  name: string;
  description: string;
  githubRepoUrl: string;
  technologiesUsed: TechnologiesUsed[];
  imageSrc: string;
  previewUrl: string;
};
const projects: Project[] = [
  {
    name: "Brisk System",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    previewUrl: "",
    githubRepoUrl: "",
    imageSrc: "/images/example.png",
    technologiesUsed: [
      "NodeJs",
      "ReactJs",
      "Typescript",
      "Graphql",
      "MUI",
      "PostgreSql",
    ],
  },
  {
    name: "Where in The World",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    previewUrl: "",
    githubRepoUrl: "https://github.com/KranzAklilu/where-in-the-world",
    imageSrc: "/images/example.png",
    technologiesUsed: ["ReactJs", "JavaScript", "HTML&CSS"],
  },
  {
    name: "Portfolio",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    previewUrl: "",
    githubRepoUrl: "https://github.com/KranzAklilu/where-in-the-world",
    imageSrc: "/images/example.png",
    technologiesUsed: ["NextJs", "Typescript", "TailwindCss"],
  },
  {
    name: "Ogani",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    previewUrl: "",
    githubRepoUrl: "https://github.com/KranzAklilu/where-in-the-world",
    imageSrc: "/images/example.png",
    technologiesUsed: ["ReactJs", "Typescript", "ChakraUi"],
  },
  {
    name: "Daily Meal",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    previewUrl: "",
    githubRepoUrl: "https://github.com/KranzAklilu/where-in-the-world",
    imageSrc: "/images/example.png",
    technologiesUsed: ["ReactJs", "JavaScript", "HTML&CSS"],
  },
];
export default projects;
