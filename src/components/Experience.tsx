import './../styles/experience.css';

type ExperienceDataType = {
  year: string;
  position: string;
  company: string;
  featuredTech: Array<string>;
  summary: Array<string>;
};

function Experience({ experienceData }: { experienceData: ExperienceDataType }) {
  return (
    <div className='experience'>
      <div className='experience--container'>
        <div className='experience--headline'>
          <p className='experience--year'>{experienceData.year}</p>
          <h4 className='experience--position'>{experienceData.position}</h4>
          <h4 className='experience--company'>{experienceData.company}</h4>
        </div>
        <ul className='experience--tech-list'>
          {experienceData.featuredTech.map((tech, index) => (
            <li className='experience--tech-item' key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <ul className='experience--summary'>
        {experienceData.summary.map((paragraph, index) => (
          <li className='experience--summary-paragraph' key={index}>
            <span className='experience--summary-pointer'></span>
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
