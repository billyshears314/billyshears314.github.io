type Link = {
  name: string;
  link: string;
  icon: string;
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
    <div className="bg-red-500">
      <div>{about.name}</div>
      <div>{about.title}</div>
      <div>{about.location}</div>
      <div>{about.email}</div>
      {about.links.map((link: Link) => {
        return <div>{link.name}</div>;
      })}
      <div>{about.description}</div>
    </div>
  );
}
