import Home from "../components/HomePage/Home.tsx";
import About from "../components/HomePage/About.tsx";
import Education from "../components/HomePage/Education.tsx";
import Project from "../components/HomePage/Project.tsx";
import Skills from "../components/HomePage/Skills.tsx";
import Contact from "../components/HomePage/Contact.tsx";

const Homepage = () => {
  return (
    <>
      <main>
        <section id="homeSection">
          <Home />
        </section>
        <section id="aboutSection">
          <About />
        </section>
        <section id="educationSection">
          <Education />
        </section>
        <section id="projectsSection">
          <Project />
        </section>
        <section id="skillsSection">
          <Skills />
        </section>
      </main>
      <section id="contactSection">
        <Contact />
      </section>
    </>
  );
};

export default Homepage;
