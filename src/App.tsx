import "./App.css";
import NavBar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <>
      <NavBar />
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
        <section id="skillsSection">
          <Skills />
        </section>
      </main>
      <section id="contactSection">
        <Contact />
      </section>
    </>
  );
}

export default App;
