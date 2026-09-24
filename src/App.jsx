import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

const skills = [
  'C#',
  'HTML',
  'CSS',
  'GitHub',
  'JavaScript'
]

const projects = [
  {
    id: 1,
    title: 'Página web en C#',
    description:
      'Proyecto académico de una página web desarrollada utilizando C#.',
    technology: 'C#',
  },
  {
    id: 2,
    title: 'Control de stock',
    description:
      'Proyecto académico para gestionar y controlar el stock de productos.',
    technology: 'C#',
  },
]

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
  )
}

export default App