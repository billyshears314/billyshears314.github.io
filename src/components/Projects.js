import { Typography } from "@mui/material";
import data from "../data";

function Projects() {
  const projects = data.projects;

  return (
    <div>
      <Typography variant="h4">Projects (Work in Progress)</Typography>
      {projects.map((project, index) => (
        <Typography variant="h6">{project.name}</Typography>
      ))}
    </div>
  );
}

export default Projects;
