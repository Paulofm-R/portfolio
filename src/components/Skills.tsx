import SkillCard from "./SkillCard";

const SkillsList = [
  {
    title: "Game",
    skillList: [
      {
        skill: "Unity",
        percentage: 80,
      },
      {
        skill: "C#",
        percentage: 80,
      },
      {
        skill: "Python",
        percentage: 60,
      },
      {
        skill: "JavaScript",
        percentage: 35,
      },
    ],
  },
  {
    title: "Front-End",
    skillList: [
      {
        skill: "HTML/CSS",
        percentage: 85,
      },
      {
        skill: "JavaScript",
        percentage: 80,
      },
      {
        skill: "React",
        percentage: 75,
      },
      {
        skill: "React-Native",
        percentage: 50,
      },
    ],
  },
  {
    title: "Back-End",
    skillList: [
      {
        skill: "Node.js",
        percentage: 80,
      },
      {
        skill: "API REST",
        percentage: 60,
      },
      {
        skill: "MongoDB",
        percentage: 50,
      },
      {
        skill: "MySQL",
        percentage: 35,
      },
    ],
  },
  {
    title: "Tools & Others",
    skillList: [
      {
        skill: "VC Code",
        percentage: 85,
      },
      {
        skill: "Figma",
        percentage: 80,
      },
      {
        skill: "Canvas",
        percentage: 80,
      },
      {
        skill: "Git & GitHub",
        percentage: 65,
      },
      {
        skill: "Adobe Photoshop & Illustrator ",
        percentage: 60,
      },
      {
        skill: "UI/UX",
        percentage: 35,
      },
      {
        skill: "Marketing Digital",
        percentage: 20,
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div className="container-fluid" id="skills">
        <div className="row justify-content" id="SkillsTitle">
          <p>Skills</p>
        </div>
        <div className="row justify-content-between" id="SkillCards">
          {SkillsList.map((skills, index) => (
            <SkillCard key={index} {...skills} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
