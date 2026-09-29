import { sections, strengths } from '../data/resume'
import { CapabilityIcon } from './Icons'
import './Strengths.css'

export default function Strengths() {
  const s = sections.strengths

  return (
    <section className="section strengths" id="strengths">
      <div className="shell">
        <header className="section-head">
          <div className="section-head__lead">
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__index">{s.index}</span>
              <span className="eyebrow__rule" />
              {s.label}
            </p>
            <h2 className="section-title strengths__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              {s.title[0]}
              <br />
              {s.title[1]}
            </h2>
          </div>
          <p className="section-head__note" data-reveal style={{ '--reveal-delay': '160ms' }}>
            {s.note}
          </p>
        </header>

        <ul className="strengths__grid">
          {strengths.map((item, i) => (
            <li className="card" key={item.index} data-reveal style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
              <span className="card__line" />
              <div className="card__top">
                <span className="card__icon">
                  <CapabilityIcon name={item.icon} />
                </span>
                <span className="card__index">{item.index}</span>
              </div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
              <ul className="card__tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
