import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  course: string;
  type: string;
  date: string;
  grade: number;
  skillsList: string[];
  isExpanded: boolean;
  onToggle: () => void;
};

const EducationCard = ({ title, course, type, date, grade, skillsList, isExpanded, onToggle }: Props) => {

  const navigate = useNavigate();

  const GoToProjects = (title: string) => {
    const encoded = encodeURIComponent(title); // evitar problemas com espaços
    navigate(`/projects/${encoded}`)
  }

  return (
    <div
      className="col-3 EducationCard"
      onClick={onToggle}
    >
      <p className="EducationCardTitle">{title}</p>
      <p>{course}</p>
      <p>{type}</p>
      <p>{date}</p>
      <p>Final Average Grade: {grade}</p>
      {isExpanded && (
        <div>
          <hr />
          <p className="EducationCardMainSkillsTitle">Main Skills Acquired</p>
          <ul>
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div className="text-center">
            <button className="btn btn-primary" onClick={() => GoToProjects(title)}>View Projects</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
