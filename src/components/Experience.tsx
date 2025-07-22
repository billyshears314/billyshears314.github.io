import Skill from "./Skill";
import {
  mdiTailwind,
  mdiGit,
  mdiReact,
  mdiAngular,
  mdiVuejs,
  mdiDocker,
  mdiKubernetes,
} from "@mdi/js";

// TODO: Fix - this is repetitive, maybe put in types file
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

type Technology = {
  name: string;
  icon: IconKey;
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

// takes date in format YYYY-MM-DD and returns YYYY
const getYear = (date: string) => {
  return date.slice(0, 4);
};

export default function Experience({ item }: ExperienceProps) {
  return (
    <div className="flex">
      <div className="w-[70px]">
        <span className="text-xxs font-semibold">
          {getYear(item.startDate)}
        </span>{" "}
        -{" "}
        <span className="text-xxs font-semibold">{getYear(item.endDate)}</span>
      </div>
      <div className="w-[20px]">
        <div className="w-[7px] h-[7px] rounded-full bg-primary-muted mt-2.5"></div>
        <div className="w-[1px] h-full bg-primary-muted ml-[3px]"></div>
      </div>
      <div className="w-[450px] mb-6">
        <div>
          <span>{item.position}</span>
          <span> @ </span>
          <span className="text-primary">{item.company}</span>
        </div>
        <div className="text-xxs text-gray-400">{item.location}</div>
        <div className="mt-3">
          <div className="text-xs">Summary:</div>
          <div className="text-xs text-gray-300">{item.summary}</div>
        </div>
        <div className="mt-3">
          <div className="text-xs">Responsibilities:</div>
          <ul>
            {item.responsibilities.map((responsibility) => {
              return <li className="text-xs mt-2 mb-2">{responsibility}</li>;
            })}
          </ul>
        </div>
        <div className="flex gap-2 mt-4">
          {/* <div className="text-xs">Technologies Used:</div> */}
          {item.technologies.map((technology) => {
            return <Skill item={technology} />;
          })}
        </div>
      </div>
    </div>
  );
}
