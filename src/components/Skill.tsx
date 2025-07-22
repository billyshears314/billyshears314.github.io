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

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

import { RiCss3Fill, RiNodejsLine } from "react-icons/ri";

const iconMap = {
  tailwind: mdiTailwind,
  git: mdiGit,
  react: mdiReact,
  angular: mdiAngular,
  vuejs: mdiVuejs,
  docker: mdiDocker,
  kubernetes: mdiKubernetes,
  html: SiHtml5,
  javascript: SiJavascript,
  typescript: SiTypescript,
  go: SiGo,
  php: SiPhp,
  python: SiPython,
  nextjs: SiNextdotjs,
  postgresql: SiPostgresql,
  css: RiCss3Fill,
  nodejs: RiNodejsLine,
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
  const icon = iconMap[item.icon];

  if (!icon) {
    return <div>{item.name}</div>; // fallback if icon not found
  }

  // function renderIcon(
  //   icon: string | React.ComponentType<{ size?: number | string }>
  // ) {
  //   if (typeof icon === "string") {
  //     console.log("STRING");
  //     // mdi path string
  //     return <Icon path={icon} size={0.6} />;
  //   } else {
  //     console.log("ELSE");
  //     // react-icons component
  //     const ReactIcon = icon;
  //     return <ReactIcon size={16} />;
  //   }
  // }

  function renderIcon(
    icon: string | React.ComponentType<{ size?: number | string }>
  ) {
    if (typeof icon === "string") {
      console.log("STRING");
      return <Icon path={icon} size={0.6} />;
    } else {
      console.log("ELSE");
      const ReactIcon = icon;
      return <ReactIcon size={13} />;
    }
  }

  return (
    <div className="flex p-1 bg-primary/50 rounded-lg items-center h-5 px-2">
      {renderIcon(icon)}
      <div className="ml-1 text-xxs semibold">{item.name}</div>
    </div>
  );
}
