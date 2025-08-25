import Skill from "./Skill";
import type { SkillKey } from "../types/types";

// type Skill = {
//   name: string;
//   level?: "Beginner" | "Intermediate" | "Expert";
//   //icon: any; // TODO: Fix - Have a types file with everything there
// };

type SkillSectionProps = {
  skills: SkillKey[];
};

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <div>
      <h2 className="text-2xl text-left mb-6 font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          return <Skill skill={skill} />;
        })}
      </div>
    </div>
  );
}
