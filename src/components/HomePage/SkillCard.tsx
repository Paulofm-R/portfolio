type SkillList = {
  skill: string;
  percentage: number;
};

type Props = {
  title: string;
  skillList: SkillList[];
};

const SkillCard = (props: Props) => {
  const { title, skillList } = props;

  return (
    <>
      <div className="col-3 SkillCard">
        <p>{title}</p>
        {skillList.map((item) => (
          <div className="SkillCardSkillList" key={item.skill}>
            <div className="skillsInfo">
              <span>{item.skill}</span>
              <span>{item.percentage}%</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label={"Animated striped example"}
              aria-valuenow={item.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillCard;
