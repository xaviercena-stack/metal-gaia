import { Link } from 'react-router-dom'
import { advantages, company } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Accueil">
        <div className="hero__media">
          <img
            src="/images/hero-atelier.jpg"
            alt="Bureau d’ingénierie : plans techniques et travail de précision"
          />
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__brand">
            <span>Métal</span>
            Gaïa
          </h1>
          <p className="hero__lead">{company.tagline}</p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/procede">
              Voir le procédé
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Nous joindre
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell mission">
          <div>
            <p className="section__eyebrow">Mission</p>
            <h2 className="section__title">Qualité industrielle, coûts maîtrisés</h2>
            <p className="mission__quote">{company.mission}</p>
            <p className="section__lead" style={{ marginTop: '1.5rem', marginBottom: 0 }}>
              {company.leadership}{' '}
              <Link to="/equipe">Notre équipe</Link>
            </p>
          </div>
          <div className="mission__aside">
            <img
              src="/images/pelle.png"
              alt="Composant d’excavatrice en métal"
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <p className="section__eyebrow">Pourquoi nous</p>
          <h2 className="section__title">Quelques-unes de nos avantages</h2>
          <p className="section__lead">
            Alliance stratégique entre l&apos;ingénierie industrielle et les technologies de pointe.
          </p>
          <div className="adv-list">
            {advantages.map((item) => (
              <article className="adv-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__bg" aria-hidden="true">
          <img src="/images/brushed-metal.jpg" alt="" />
        </div>
        <div className="shell band__inner">
          <h2>Du modèle de cire à la pièce livrée</h2>
          <Link className="btn btn--primary" to="/produits">
            Explorer les produits
          </Link>
        </div>
      </section>
    </>
  )
}
