import Header from "./assets/Header.jsx";
import Hero from "./assets/Hero.jsx";
import About from "./assets/About.jsx";
import Skills from "./assets/Skills.jsx";
import Projects from "./assets/Projects.jsx";
import Footer from "./assets/Footer.jsx";

const skills = [
  "C#",
  "HTML",
  "CSS",
  "GitHub",
  "JavaScript"
];

const projects = [
  {
    id: 1,
    title: "Página web en C#",
    description:
      "Proyecto académico de una página web desarrollada utilizando C#.",
    technology: "C#"
  },
  {
    id: 2,
    title: "Control de stock",
    description:
      "Proyecto académico para gestionar y controlar el stock de productos.",
    technology: "C#"
  }
];

function App() {
  return (
    <div className="app">

      <Header
        name="Benjamin Gonzalez Godoy"
        profession="Estudiante de Programación"
      />

      <main>

        <Hero
          name="Benjamin Gonzalez Godoy"
          presentation="Soy un estudiante de programación y este es mi primer trabajo en React."
        />

        <About
          objective="Aprender a utilizar React y realizar más proyectos."
        />

        <Skills
          skills={skills}
        />

        <Projects
          projects={projects}
        />

      </main>

      <Footer
        email="benja.gonzalezgodoy1@gmail.com"
        course="Programación 4 - 2026 / TP1"
      />

    </div>
  );
}

export default App;