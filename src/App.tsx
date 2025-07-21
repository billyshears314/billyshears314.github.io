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
    <>
      <About about={data.about} />
      {/* <Section title="Experience">
        <Experience experience={data.experience}></Experience>
      </Section>
      <Section title="Projects">
        <Project project={data.projects}></Project>
      </Section> */}
      <Section
        title="Experience"
        data={data.education}
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
      {/* {data.education.map((education: any) => {
          return (
            <Education education={education} />
          )
        })} */}
      {/* <Section title="Skills">
        {data.skills.map((skill: any) => {
          return (
            <Skill skill={skill} />
          )
        })}
      </Section> */}
    </>
  );
}

export default App;
