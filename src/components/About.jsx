import { contacts, intro, profile, sections, stats } from '../data/resume'
import { useCountUp } from '../hooks/useCountUp'
import { CapabilityIcon } from './Icons'
import './About.css'

function Stat({ value, suffix, label, delay }) {
  const { ref, value: current } = useCountUp(value)

  return (
    <li className="stat" ref={ref} data-reveal style={{ '--reveal-delay': delay }}>
      <span className="stat__num">
        {current}
        <em>{suffix}</em>
      </span>
      <span className="stat__label">{label}</span>
    </li>
  )
}

export default function About() {
  const s = sections.about

  return (
    <section className="section about" id="about">
      <div className="shell about__inner">
        <div className="about__media">
          <figure className="portrait" data-reveal>
            {profile.avatar ? (
              <img className="portrait__img" src={profile.avatar} alt={`${profile.name} 的人物照`} />
            ) : (
              <span className="portrait__ph">
                <span className="portrait__ph-glow" />
                <span className="portrait__ph-grid" />
                <span className="portrait__ph-silhouette" />
                <span className="portrait__ph-tag">人物图 · 待替换</span>
              </span>
            )}
            <span className="portrait__corner portrait__corner--tl" />
            <span className="portrait__corner portrait__corner--br" />
          </figure>

          <figcaption className="portrait__caption">
            <span className="portrait__name">
              {profile.name}
              <em>{profile.latinName}</em>
            </span>
            <span className="portrait__place">{profile.avatarCaption}</span>
          </figcaption>
        </div>

        <div className="about__content">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__index">{s.index}</span>
            <span className="eyebrow__rule" />
            {s.label}
          </p>

          <h2 className="section-title about__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
            {s.title[0]}
            <br />
            {s.title[1]}
          </h2>

          <div className="about__text">
            {intro.map((paragraph, i) => (
              <p key={paragraph.slice(0, 12)} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="about__contacts" data-reveal>
            {contacts.map((item) => (
              <li key={item.label}>
                <span className="about__contact-label">{item.label}</span>
                <a className="about__contact-value" href={item.href}>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>

          <ul className="about__stats">
            {stats.map((item, i) => (
              <Stat
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                delay={`${i * 80}ms`}
              />
            ))}
          </ul>

          <p className="about__resume-link" data-reveal>
            <span className="about__resume-icon">
              <CapabilityIcon name="mail" size={18} />
            </span>
            需要完整简历或项目细节，直接发邮件找我要 PDF 版本。
          </p>
        </div>
      </div>
    </section>
  )
}
