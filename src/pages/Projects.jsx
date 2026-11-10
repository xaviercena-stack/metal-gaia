import { projects } from '../data.js'

export default function Projects() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Réalisations</h1>
          <p>
            Exemples de pièces transformées — du composant usé ou improvisé à la solution coulée
            industrialisée.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell project-stack">
          {projects.map((item) => (
            <figure className="project" key={item.image}>
              <img src={item.image} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
