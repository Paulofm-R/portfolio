import { useState } from "react";
import EducationCard from "./EducationCard";

type EducationType = {
  title: string;
  course: string;
  type: string;
  date: string;
  grade: number;
  skillsList: string[];
};

const educationInfo: EducationType[] = [
  {
    title: "ESMAD",
    course: "Web Information Technologies and Systems",
    type: "Bachelor's degree",
    date: "July 2023",
    grade: 15,
    skillsList: ["HTML/CSS", "JS: React & Node.js", "Python", "Unity/C#"],
  },
  {
    title: "ISEP",
    course: "Computer Engineering - Games, Graphics, and Interactive Systems",
    type: "Master's degree",
    date: "October 2025",
    grade: 15,
    skillsList: [
      "Unity/C#",
      "Work in groups of 8 people",
      "Voice Command and Hand-Tracking",
    ],
  },
];

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // se o mesmo card for clicado, recolhe; caso contrário, expande o novo
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container-fluid" id="education">
      <div className="row justify-content" id="EducationTitle">
        <p>Education</p>
      </div>
      <div
        className="row justify-content-around align-items-start"
        id="EducationCards"
      >
        {educationInfo.map((info, index) => (
          <EducationCard
            key={index}
            {...info}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
