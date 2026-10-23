import { useState } from 'react';

function Contact() {
  const [copiado, setCopiado] = useState(false);

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText('benja.gonzalezgodoy1@gmail.com');
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <section className="page">
      <h1>Contacto</h1>

      <p>
        Si querés comunicarte conmigo, podés hacerlo
        mediante mi correo electrónico.
      </p>

      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:benja.gonzalezgodoy1@gmail.com">
          benja.gonzalezgodoy1@gmail.com
        </a>
      </p>
      <button type="button" onClick={copiarEmail}>
        {copiado ? '¡Correo copiado!' : 'Copiar correo'}
      </button>
      <p>
        También podés visitar mi perfil de GitHub
        para conocer mis proyectos.
      </p>
    </section>
  );
}

export default Contact;
