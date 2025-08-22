// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { mdiGithub } from "@mdi/js";
// import { Icon } from "@mdi/react";

import ProjectComponent from "./Project";
import type { Project } from "../types/types";

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({ projects }: ProjectSectionProps) {
  // const renderProject = (project: any) => {
  //   return (
  //     <div className="h-54 relative">
  //       <div>{project.title}</div>
  //       <div>{project.description}</div>
  //       <div>
  //         {project.images.length === 1 ? (
  //           <img src={project.images} />
  //         ) : (
  //           project.images.map((img: any) => {
  //             return
  //               <div>
  //           })
  //         )}
  //       </div>
  //       <div>
  //         <span>
  //           Live Demo:
  //           <a href="https://personal-finance-f5x3.vercel.app">
  //             https://personal-finance-f5x3.vercel.app
  //           </a>
  //         </span>
  //       </div>
  //       <div>
  //         <span>
  //           Github Source:
  //           <a href="https://github.com/billyshears314/Personal-Finance">
  //             https://github.com/billyshears314/Personal-Finance
  //           </a>
  //         </span>
  //       </div>

  //       {/* <div className="mb-0.5">{project.title}</div>
  //       <div className="relative">
  //         <img src={project.image} />
  //         <a href={project.link} title={`View ${project.title} on Github`}>
  //           <div className="absolute top-2 right-2 text-gray-200 cursor-pointer hover:text-primary transition-colors duration-200">
  //             <Icon path={mdiGithub} size={1} />
  //           </div>
  //         </a>
  //       </div>
  //       {/* <Icon path={mdiLaunch} size={0.85} className="text-inherit" /> */}
  //       {/* <div className="text-gray-300 text-xs mt-0.5">
  //         {project.description}
  //       </div> */}
  //     </div>
  //   );
  // };

  return (
    <div className="relative mb-8">
      <h2 className="text-2xl text-left mb-4 md:mb-8 divide-y divide-gray-300 font-semibold">
        Projects
      </h2>

      <div className="divide-y divide-gray-400">
        {projects.map((project) => {
          return <ProjectComponent project={project}></ProjectComponent>;
        })}
      </div>
    </div>
  );
}
