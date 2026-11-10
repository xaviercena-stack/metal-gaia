import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { company, nav } from '../data.js'

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="" width="72" height="44" />
            <span className="brand__text">
              <span className="brand__metal">Métal</span>
              <span className="brand__gaia">Gaïa</span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>

          <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Principale">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p>
            <strong>{company.name}</strong> — dirigée par Guy Turgeon avec ses fils. Pièces en métal
            coulé, Canada.
          </p>
          <p>© {new Date().getFullYear()} Métal Gaïa. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}
