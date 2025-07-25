import Experience from "./Experience";

type Technology = {
  name: string;
  icon: any;
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

type ExperienceSectionProps = {
  data: Experience[];
};

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="mb-8 text-left">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <Experience key={index} item={item} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
