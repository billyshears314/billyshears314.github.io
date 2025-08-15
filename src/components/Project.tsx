import Carousel from "./Carousel";
import type { Project } from "../types/types";

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
          <img src={project.images[0]} />
        ) : (
          <Carousel images={project.images} />
        )}
      </div>
      {project.demo && (
        <div className="mb-2">
          <span className="text-gray-300">
            <span className="font-bold">Live Demo: </span>
            <a href={project.demo}>{project.demo}</a>
          </span>
        </div>
      )}
      <div>
        <span className="text-gray-300">
          <span className="font-bold">Source Code: </span>
          <a href={project.source}>{project.source}</a>
        </span>
      </div>
    </div>
  );
}
