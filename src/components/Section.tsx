type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
