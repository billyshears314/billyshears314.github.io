import "./App.css";
import {
  About,
  Section,
  Experience,
  Project,
  Education,
  Skill,
} from "./components";
import data from "./data";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <About about={data.about} />
      </div>
      <div className="w-full md:w-1/2">
        <Section
          title="Experience"
          data={data.experience}
          Component={Experience}
        ></Section>
        <Section
          title="Projects"
          data={data.projects}
          Component={Project}
        ></Section>
        <Section
          title="Education"
          data={data.education}
          Component={Education}
        ></Section>
        <Section title="Skills" data={data.skills} Component={Skill}></Section>
      </div>
    </div>
  );
}

export default App;
