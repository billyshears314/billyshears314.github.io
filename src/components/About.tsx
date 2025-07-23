import Icon from "@mdi/react";
import { mdiEarth, mdiFileDocument, mdiEmail, mdiGithub } from "@mdi/js";

const iconMap = {
  document: mdiFileDocument,
  email: mdiEmail,
  github: mdiGithub,
};

type IconKey = keyof typeof iconMap;

type Link = {
  name: string;
  link: string;
  icon: IconKey;
};

type About = {
  profileImg: string;
  name: string;
  title: string;
  location: string;
  email: string;
  links: Link[];
  description: string;
};

type AboutProps = {
  about: About;
};

export default function About({ about }: AboutProps) {
  return (
    <div className="text-left">
      <div className="relative">
        <img
          src={about.profileImg}
          alt={about.name}
          width={150}
          height={150}
          className="rounded-xl"
        />
        {/* <div className="absolute border-1 w-px h-[140%] -left-3 -top-[20%] bg-orange-500/50 bg-[linear-gradient(to top, transparent 0%, rgba(255,165,0,0.8) 20%, rgba(34,197,94,0.8) 80%, transparent 100%)]"></div>
        <div className="absolute border-1 w-px h-[140%] -right-3 -top-[20%] bg-orange-500/50 bg-[linear-gradient(to top, transparent 0%, rgba(255,165,0,0.8) 20%, rgba(34,197,94,0.8) 80%, transparent 100%)]"></div>
        <div className="absolute h-px w-[140%] -top-3 -left-[20%] bg-orange-500/50 bg-[linear-gradient(to right, transparent 0%, rgba(255,165,0,0.8) 20%, rgba(34,197,94,0.8) 80%, transparent 100%)]"></div>
        <div className="absolute h-px w-[140%] -bottom-3 -left-[20%] bg-orange-500/50 bg-[linear-gradient(to right, transparent 0%, rgba(255,165,0,0.8) 20%, rgba(34,197,94,0.8) 80%, transparent 100%)]"></div> */}
      </div>
      <h1 className="text-2xl font-bold">{about.name}</h1>
      <div className="text-xs text-gray-400 mb-2">{about.title}</div>
      <div className="text-xs text-gray-400 mb-2 flex flex-row">
        <Icon path={mdiEarth} size={0.75} />{" "}
        <span className="ml-2 text-gray-400">{about.location}</span>
      </div>
      <div className="text-xs text-gray-400">{about.email}</div>
      <div className="flex flex-row mt-4 mb-4 gap-2 cursor-pointer">
        {about.links.map((link: Link) => {
          return (
            <div
              key={link.name}
              className="hover:bg-primary transition-colors duration-500 p-1 rounded"
            >
              <a target="_blank" href={link.link} title={link.name}>
                <Icon path={iconMap[link.icon]} size={0.75} />
              </a>
              {/* <img src={link.icon} /> */}
              {/* {link.name} */}
            </div>
          );
        })}
      </div>
      <div className="text-xl mb-3">About</div>
      <div className="text-sm text-gray-400 leading-relaxed font-semibold lg:w-1/2">
        {about.description}
      </div>
    </div>
  );
}
