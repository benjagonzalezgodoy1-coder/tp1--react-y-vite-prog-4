function Footer({ nombre, materia }) {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <h2>Contacto</h2>

        <p>
          Email:{" "}
          <a href="mailto:benja.gonzalezgodoy1@gmail.com">
            benja.gonzalezgodoy1@gmail.com
          </a>
        </p>

        <p>{nombre}</p>

        <p>{materia} - 2026</p>

        <p>TP1 - React</p>
      </div>
    </footer>
  );
}

export default Footer;