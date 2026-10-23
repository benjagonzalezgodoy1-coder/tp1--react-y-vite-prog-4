
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? '☰' : '✕ Contraer'}
      </button>

      {!collapsed && (
        <>
          <h2>Mi Portfolio</h2>

          <p className="sidebar-description">
            Benjamin Gonzalez Godoy
          </p>
        </>
      )}

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          {collapsed ? 'Inicio' : 'Inicio'}
        </NavLink>

        <NavLink to="/about">
          {collapsed ? 'Sobre mí' : 'Sobre mí'}
        </NavLink>

        <NavLink to="/skills">
          {collapsed ? 'Habilidades' : 'Habilidades'}
        </NavLink>

        <NavLink to="/projects">
          {collapsed ? 'Proyectos' : 'Proyectos'}
        </NavLink>

        <NavLink to="/contact">
          {collapsed ? 'Contacto' : 'Contacto'}
        </NavLink>
      </nav>

      {!collapsed && (
        <footer className="sidebar-footer">
          Programación 4 · 2026
        </footer>
      )}
    </aside>
  );
}

export default Sidebar;
