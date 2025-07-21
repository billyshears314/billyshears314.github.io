type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Expert";
  icon: string;
};

type SkillProps = {
  item: Skill;
};

export default function Skill({ item }: SkillProps) {
  return (
    <div>
      <div>{item.name}</div>
    </div>
  );
}
