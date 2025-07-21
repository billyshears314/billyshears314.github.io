type Technology = {
  name: string;
  icon: string;
};

type Experience = {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: Technology[];
};

type ExperienceProps = {
  item: Experience;
};

export default function Experience({ item }: ExperienceProps) {
  return (
    <div className="border-black">
      <div>{item.startDate}</div>
      <div>{item.endDate}</div>
      <div>{item.position}</div>
      <div>{item.company}</div>
      <div>{item.location}</div>
      <div>{item.summary}</div>
      <div>
        {item.responsibilities.map((responsibility) => {
          return <div>{responsibility}</div>;
        })}
      </div>
      <div>
        {item.technologies.map((technology) => {
          return <div>{technology.name}</div>;
        })}
      </div>
    </div>
  );
}
