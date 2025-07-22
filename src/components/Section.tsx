type SectionProps<T> = {
  data: T[];
  Component: React.ComponentType<{ item: T }>;
  title: string;
};

function Section<T>({ data, Component, title }: SectionProps<T>) {
  return (
    <section>
      <h2>{title}</h2>
      {data.map((item, index) => (
        <Component key={index} item={item} />
      ))}
    </section>
  );
}

export default Section;
