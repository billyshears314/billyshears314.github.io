type Project = {
  title: string;
  description: string;
  link: string;
};

type ProjectProps = {
  item: Project;
};

export default function Experience({ item }: ProjectProps) {
  return (
    <div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.link}</div>
    </div>
  );
}
