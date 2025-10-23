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
            <button className="btn btn-primary">View Projects</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
