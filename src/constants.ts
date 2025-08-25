import {
  mdiTailwind,
  mdiGit,
  mdiReact,
  mdiAngular,
  mdiVuejs,
  mdiDocker,
  mdiKubernetes,
  mdiDatabase,
} from "@mdi/js";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPhp,
  SiRuby,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
  SiAmazondynamodb,
  SiElasticsearch,
  SiApachesolr,
  SiGraphql,
} from "react-icons/si";

import { RiCss3Fill, RiNodejsLine } from "react-icons/ri";

interface SkillInfo {
  name: string;
  icon: string | React.ComponentType<{ size?: number | string }>;
}

export const skillMap: Record<string, SkillInfo> = {
  sql: { name: "SQL", icon: mdiDatabase },
  tailwind: { name: "Tailwind CSS", icon: mdiTailwind },
  git: { name: "Git", icon: mdiGit },
  react: { name: "React", icon: mdiReact },
  angular: { name: "Angular", icon: mdiAngular },
  vuejs: { name: "Vue.js", icon: mdiVuejs },
  docker: { name: "Docker", icon: mdiDocker },
  kubernetes: { name: "Kubernetes", icon: mdiKubernetes },
  html: { name: "HTML5", icon: SiHtml5 },
  javascript: { name: "JavaScript", icon: SiJavascript },
  typescript: { name: "TypeScript", icon: SiTypescript },
  go: { name: "Go", icon: SiGo },
  php: { name: "PHP", icon: SiPhp },
  python: { name: "Python", icon: SiPython },
  ruby: { name: "Ruby", icon: SiRuby },
  dynamodb: { name: "Amazon DynamoDB", icon: SiAmazondynamodb },
  nextjs: { name: "Next.js", icon: SiNextdotjs },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql },
  elasticsearch: { name: "Elasticsearch", icon: SiElasticsearch },
  solr: { name: "Apache Solr", icon: SiApachesolr },
  graphql: { name: "GraphQL", icon: SiGraphql },
  css: { name: "CSS3", icon: RiCss3Fill },
  nodejs: { name: "Node.js", icon: RiNodejsLine },
};
