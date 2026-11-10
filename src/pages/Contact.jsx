import { company } from '../data.js'

export default function Contact() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Nous joindre</h1>
          <p>Une équipe accessible pour cadrer votre besoin et livrer la pièce adaptée.</p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell contact-grid">
          <div className="contact-block">
            <h2>{company.name}</h2>
            {company.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p style={{ marginTop: '1rem' }}>
              <a href={company.phoneHref}>{company.phone}</a>
            </p>
          </div>

          <div className="people">
            {company.people.map((person) => (
              <div className="person contact-block" key={person.email}>
                <div className="role">{person.role}</div>
                <h3>{person.name}</h3>
                <p>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </p>
                <p>
                  <a href={person.phoneHref}>{person.phone}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
