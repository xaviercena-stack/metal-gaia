import { steps } from '../data.js'

export default function Process() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Procédé de coulage</h1>
          <p>
            De l&apos;injection de cire à l&apos;expédition : le parcours complet de fabrication
            des pièces en métal coulé.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell step-list">
          {steps.map((step) => (
            <article className="step" key={step.n}>
              <div className="step__num">{String(step.n).padStart(2, '0')}</div>
              <div>
                <h2>
                  Étape {step.n} — {step.title}
                </h2>
                <p>{step.desc}</p>
              </div>
              <div className="step__visual">
                <img src={step.image} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
