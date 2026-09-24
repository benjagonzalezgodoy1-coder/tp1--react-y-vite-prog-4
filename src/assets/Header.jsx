function Header({ name, profession }) {
  return (
    <header className="header">

      <div className="container nav-container">

        <a
          className="logo"
          href="#inicio"
        >
          {name}
        </a>

        <nav aria-label="Navegación principal">

          <a href="#sobre-mi">
            Sobre mí
          </a>

          <a href="#habilidades">
            Habilidades
          </a>

          <a href="#proyectos">
            Proyectos
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </nav>

      </div>

      <p className="header-subtitle">
        {profession}
      </p>

    </header>
  )
}

export default Header