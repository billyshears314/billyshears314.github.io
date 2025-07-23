import "./App.css";
import {
  About,
  Section,
  Experience,
  ProjectSection,
  Education,
  SkillSection,
} from "./components";
import data from "./data";

function App() {
  return (
    <div className="flex flex-col md:flex-row pb-20">
      <div className="w-full md:w-2/5 md:ml-8">
        <About about={data.about} />
      </div>
      <div className="w-full md:w-3/5 mt-4">
        <Section
          title="Experience"
          data={data.experience}
          Component={Experience}
        ></Section>
        {/* <Section
          title="Projects"
          data={data.projects}
          Component={Project}
        ></Section> */}
        <ProjectSection projects={data.projects} />
        <Section
          title="Education"
          data={data.education}
          Component={Education}
        ></Section>
        {/* <Section title="Skills" data={data.skills} Component={Skill}></Section> */}
        <SkillSection skills={data.skills} />
      </div>
    </div>
  );
}

export default App;
