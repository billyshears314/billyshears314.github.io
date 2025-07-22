import Icon from "@mdi/react";
import {
  mdiTailwind,
  mdiGit,
  mdiReact,
  mdiAngular,
  mdiVuejs,
  mdiDocker,
  mdiKubernetes,
} from "@mdi/js";

const iconMap = {
  tailwind: mdiTailwind,
  git: mdiGit,
  react: mdiReact,
  angular: mdiAngular,
  vuejs: mdiVuejs,
  docker: mdiDocker,
  kubernetes: mdiKubernetes,
};

type IconKey = keyof typeof iconMap;

type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Expert";
  icon: IconKey;
};

type SkillProps = {
  item: Skill;
};

export default function Skill({ item }: SkillProps) {
  return (
    <div className="flex p-1 bg-primary/50 rounded-lg items-center h-5 px-2">
      <Icon path={iconMap[item.icon]} size={0.6} />
      <div className="ml-1 text-xxs semibold">{item.name}</div>
    </div>
  );
}
