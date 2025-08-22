import Carousel from "./Carousel";
import type { Project } from "../types/types";
import { mdiLaunch } from "@mdi/js";
import { Icon } from "@mdi/react";

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="h-54 relative text-left py-8">
      <div className="text-xl mb-2">{project.title}</div>
      <div className=" text-gray-300 mb-4">{project.description}</div>
      <div className="mb-4">
        {project.images.length === 1 ? (
          <img src={project.images[0].src} width={800} />
        ) : (
          <Carousel images={project.images} />
        )}
      </div>
      {project.demo && (
        <div className="flex mb-2">
          <span className="text-gray-300 font-bold">Live Demo: </span>
          <a href={project.demo} className="ml-2 hover:text-primary">
            {project.demo}
          </a>
          {/* <Icon path={mdiLaunch} size={0.85} /> */}
        </div>
      )}

      <div className="flex">
        <span className="text-gray-300 font-bold">Source Code: </span>
        <a href={project.source} className="ml-2 hover:text-primary">
          {project.source}
        </a>
        {/* <Icon path={mdiLaunch} size={0.85} /> */}
      </div>
    </div>
  );
}
