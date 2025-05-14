

export const SkillBar = ({ name, percent, className }) => {
    return (
      <div className="progress my-3">
        <div className={className}>
          <p>
            {name} <span className="text-white float-right">{percent}%</span>
          </p>
        </div>
      </div>
    );
  };
  