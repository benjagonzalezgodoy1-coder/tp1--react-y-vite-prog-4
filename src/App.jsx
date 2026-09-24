import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const nombre = "Benjamin Gonzalez Godoy";

  const habilidades = [
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub"
  ];

  const proyectos = [
    {
      id: 1,
      titulo: "Página web en C#",
      descripcion:
        "Proyecto de una página web desarrollado utilizando C#."
    },
    {
      id: 2,
      titulo: "Control de stock",
      descripcion:
        "Proyecto de un sistema de control de stock desarrollado en C#."
    }
  ];

  return (
    <div>
      <Header
        nombre={nombre}
        profesion="Estudiante de programación"
      />

      <Hero
        nombre={nombre}
        presentacion="Soy un estudiante de programación y este es mi primer trabajo en React."
      />

      <About
        objetivo="Aprender a utilizar React y realizar más proyectos."
      />

      <Skills habilidades={habilidades} />

      <Projects proyectos={proyectos} />

      <Footer
        nombre={nombre}
        materia="Programación 4"
      />
    </div>
  );
}

export default App;