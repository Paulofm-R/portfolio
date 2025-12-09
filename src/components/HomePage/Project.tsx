import ProjectCard from "./ProjectCard";

type ProjectType = {
  title: string;
  descrition: string;
  date: string;
  skillsList: string[];
  logo: string;
  visual: string[];
};

const projectInfo: ProjectType[] = [
  {
    title: "MimiCry",
    descrition:
      "This project was developed for the Gdevelop Big Game Jam #8, which took place between November 7th and November 16th, 2025, with the theme 'Take Control'.",
    date: "Nov-2025 to Nov-2025",
    skillsList: ["GDevelop", "Game 2D", "Platform Game", "Pixel Art"],
    logo: "https://phyrowns.sirv.com/Portfolio/Projects/Mimicry-logo.png",
    visual: ["https://phyrowns.sirv.com/Portfolio/Projects/Mimicry-videodemo.mp4"],
  },
  {
    title: "Eletric Strider",
    descrition: "Project created for the 2 Buttons Jam 2025 Game Jam.",
    date: "Nov-2025 to Dec-2025",
    skillsList: ["Unity", "Game 2D", "C#", "Game Develop"],
    logo: "https://phyrowns.sirv.com/Portfolio/Projects/EletricStrider-logo.png",
    visual: ["https://phyrowns.sirv.com/Portfolio/Projects/EletricStrider_VideoDemo.mp4"],
  },
];

const Project = () => {
  return (
    <div className="container-fluid" id="project">
      <div className="row justify-content" id="projectTitle">
        <p>Project</p>
      </div>
      <div
        className="row justify-content-around align-items-start"
        id="EducationCards"
      >
        {projectInfo.map((info, index) => (
          <ProjectCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Project;
