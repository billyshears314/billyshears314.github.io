type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type EducationProps = {
  item: Education;
};

export default function Education({ item }: EducationProps) {
  return (
    <div>
      <div>{item.institution}</div>
      <div>{item.degree}</div>
      <div>{item.startDate}</div>
      <div>{item.endDate}</div>
    </div>
  );
}
