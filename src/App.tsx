import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import Projects from "./routes/Projects.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:acronym" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
