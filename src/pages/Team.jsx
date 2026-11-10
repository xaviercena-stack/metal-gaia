import { Link } from 'react-router-dom'
import { company } from '../data.js'

export default function Team() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Notre équipe</h1>
          <p>{company.leadership}</p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell contact-grid">
          <div className="contact-block">
            <p className="section__eyebrow">Direction</p>
            <h2>Guy Turgeon</h2>
            <p>Direction.</p>
            <p style={{ marginTop: '1rem' }}>
              Une entreprise qui allie expérience du terrain et proximité avec les clients
              industriels au Canada.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <Link className="btn btn--primary" to="/contact">
                Nous joindre
              </Link>
            </p>
          </div>

          <div className="people">
            <div className="person contact-block">
              <div className="role">Coordonnées</div>
              <h3>{company.name}</h3>
              {company.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={company.phoneHref}>{company.phone}</a>
              </p>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
