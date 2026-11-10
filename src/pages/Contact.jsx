import { company } from '../data.js'

export default function Contact() {
  const lead = company.people[0]

  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Nous joindre</h1>
          <p>
            Guy Turgeon et ses fils sont aux commandes — une équipe accessible pour cadrer votre
            besoin et livrer la pièce adaptée.
          </p>
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
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>

          <div className="people">
            <div className="person contact-block" key={lead.email}>
              <div className="role">{lead.role}</div>
              <h3>{lead.name}</h3>
              {lead.detail ? <p>{lead.detail}</p> : null}
              <p>
                <a href={`mailto:${lead.email}`}>{lead.email}</a>
              </p>
              <p>
                <a href={lead.phoneHref}>{lead.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
