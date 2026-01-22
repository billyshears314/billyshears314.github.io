import Carousel from "./Carousel";
import type { Project } from "../types/types";
import Skill from "./Skill";

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="h-54 relative text-left py-8">
      <div className="text-xl mb-2">{project.title}</div>
      <div
        className=" text-gray-300 mb-4 [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300"
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></div>
      <div className="mb-4">
        {project.images.length === 1 ? (
          <img src={project.images[0].src} width={800} />
        ) : (
          <Carousel images={project.images} />
        )}
      </div>
      {project.demo && (
        <div className="flex flex-col md:flex-row mb-2">
          <span className="text-gray-300 font-bold pr-2">Live Demo: </span>
          <a href={project.demo} className="hover:text-primary">
            {project.demo}
          </a>
          {/* <Icon path={mdiLaunch} size={0.85} /> */}
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <span className="text-gray-300 font-bold pr-2">Source Code: </span>
        <a href={project.source} className=" hover:text-primary">
          {project.source}
        </a>
        {/* <Icon path={mdiLaunch} size={0.85} /> */}
      </div>

      <div className="flex flex-wrap gap-2 mt-4 mb-2 md:mb-6">
        {/* <div className="text-xs">Technologies Used:</div> */}
        {project.technologies.map((technology) => {
          return <Skill skill={technology} />;
        })}
      </div>
    </div>
  );
}
