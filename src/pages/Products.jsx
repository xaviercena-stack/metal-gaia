import { categories, finishes, products } from '../data.js'

export default function Products() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Produits</h1>
          <p>
            Catalogue industriel : dents d&apos;excavatrice et catégories associées, avec finis
            adaptés à vos spécifications.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell">
          <div className="cat-grid">
            {categories.map((cat) => (
              <article className="cat-item" key={cat.id}>
                <h2>{cat.title}</h2>
                <p>{cat.blurb}</p>
              </article>
            ))}
          </div>

          <p className="section__eyebrow">Finis possibles</p>
          <div className="finish-row">
            {finishes.map((f) => (
              <span key={f.name}>
                <strong>{f.name}</strong>
                {f.detail ? ` — ${f.detail}` : ''}
              </span>
            ))}
          </div>

          <p className="section__eyebrow">Sélection — dents d&apos;excavatrice</p>
          <h2 className="section__title" style={{ marginBottom: '1.75rem' }}>
            Références marques
          </h2>
          <div className="product-grid">
            {products.map((p) => (
              <article className="product" key={p.name}>
                <img src={p.image} alt={p.name} loading="lazy" />
                <h3>{p.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
