import Skill from "./Skill";

type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Expert";
  icon: any; // TODO: Fix - Have a types file with everything there
};

type SkillSectionProps = {
  skills: Skill[];
};

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <div>
      <h2 className="text-2xl text-left mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          return <Skill item={skill} />;
        })}
      </div>
    </div>
  );
}
