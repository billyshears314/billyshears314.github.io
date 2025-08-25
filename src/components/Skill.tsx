import Icon from "@mdi/react";
import { skillMap } from "../constants";
import type { SkillKey } from "../types/types";

// type Skill = {
//   name: NameKey;
//   level?: "Beginner" | "Intermediate" | "Expert";
//   // icon: IconKey;
// };

type SkillProps = {
  skill: SkillKey;
};

export default function Skill({ skill }: SkillProps) {
  console.log("SKILL: " + skill);
  const { name, icon } = skillMap[skill];

  if (!icon) {
    return <div>{name}</div>; // fallback if icon not found
  }

  function renderIcon(
    icon: string | React.ComponentType<{ size?: number | string }>
  ) {
    if (typeof icon === "string") {
      return <Icon path={icon} size={0.6} />;
    } else {
      const ReactIcon = icon;
      return <ReactIcon size={13} />;
    }
  }

  return (
    <div className="flex my-[1px] bg-primary/50 rounded-lg items-center h-6 px-2">
      {renderIcon(icon)}
      <div className="ml-1 -mt-[2px] text-sm semibold">{name}</div>
    </div>
  );
}
