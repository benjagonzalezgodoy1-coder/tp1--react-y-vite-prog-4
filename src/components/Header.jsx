function Header({ nombre, profesion }) {
  return (
    <header className="header">
      <div className="container header-content">
        <h1>{nombre}</h1>

        <p>{profesion}</p>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;