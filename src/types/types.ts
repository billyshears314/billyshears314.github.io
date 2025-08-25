import { skillMap } from "../constants";

export type SkillKey = keyof typeof skillMap;

export interface Image {
  src: string;
  caption: string;
  isMobile: boolean;
}

export interface Project {
  title: string;
  description: string;
  source: string;
  demo: string;
  images: Image[];
  technologies: SkillKey[];
}
