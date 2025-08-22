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
  companyLink: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: Technology[];
};

type ExperienceProps = {
  item: Experience;
  isFirst: boolean;
};

// TODO: Move to utility file
// takes date in format YYYY-MM-DD and returns YYYY
const getYear = (date: string) => {
  return date.slice(0, 4);
};

export default function Experience({ item, isFirst }: ExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row my-0 py-0 space-y-0">
      <div className="w-[75px]">
        <span className="text-xs font-semibold">{`${getYear(
          item.startDate
        )} - ${getYear(item.endDate)}`}</span>
      </div>
      <div className="w-[20px] relative hidden md:block">
        {!isFirst && (
          <div className="w-[1px] h-10 bg-primary-muted ml-[3px] -mt-[29px]"></div>
        )}
        <div
          className={`w-[7px] h-[7px] rounded-full bg-primary-muted ${
            isFirst ? "mt-2.5" : ""
          }`}
          style={{ boxShadow: "0 0 3px 3px rgba(110, 70, 40, 0.5)" }}
        ></div>
        <div className="w-[1px] h-[calc(100%-10px)] bg-primary-muted ml-[3px]"></div>
      </div>
      <div className="w-[100%] md:w-[450px] mb-4">
        <div>
          <span>{item.position}</span>
          <span> @ </span>
          <a href={item.companyLink}>
            <span className="text-primary">{item.company}</span>
          </a>
        </div>
        <div className="text-xs text-gray-400">{item.location}</div>
        {/* <div className="mt-3">
          <div className="text-xs">Summary:</div>
          <div className="text-xs text-gray-300">{item.summary}</div>
        </div> */}
        <div className="mt-3">
          {/* <div className="text-xs">Responsibilities:</div> */}
          <ul className="pl-5">
            {item.responsibilities.map((responsibility) => {
              return (
                <li className="relative before:content-['•'] before:absolute before:left-0 before:text-primary before:-ml-4 before:text-base text-sm mt-2 mb-2 text-gray-200 leading-relaxed">
                  {responsibility}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 mb-2 md:mb-6">
          {/* <div className="text-xs">Technologies Used:</div> */}
          {item.technologies.map((technology) => {
            return <Skill item={technology} />;
          })}
        </div>
      </div>
    </div>
  );
}
