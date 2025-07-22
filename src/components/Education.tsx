type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type EducationProps = {
  item: Education;
};

// TODO: Move to utility file
// takes date in format YYYY-MM-DD and returns YYYY
const getYear = (date: string) => {
  return date.slice(0, 4);
};

export default function Education({ item }: EducationProps) {
  return (
    <div className="flex w-full relative">
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 hidden h-5 w-5 self-start md:inline-block print:hidden"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
        </div>
        <div>
          <div className="text-sm">{item.institution}</div>
          <div className="text-xs text-gray-400">{item.degree}</div>
        </div>
      </div>
      <div className="absolute right-0">
        <div className="text-xs font-semibold">
          {getYear(item.startDate)} - {getYear(item.endDate)}
        </div>
      </div>
    </div>
  );
}
