import { projects, sections } from '../data/resume'
import { ArrowUpRight } from './Icons'
import './Work.css'

function ProjectCard({ project, flip }) {
  const { index, title, subtitle, year, role, description, tags, cover, tone, link } = project

  return (
    <article className={`project${flip ? ' project--flip' : ''}`} data-reveal>
      <a className="project__media" href={link} aria-label={`查看项目：${title}`}>
        {cover ? (
          <img className="project__img" src={cover} alt={`${title} 项目画面`} loading="lazy" />
        ) : (
          <span className="project__ph" style={{ '--p1': tone[0], '--p2': tone[1] }}>
            <span className="project__ph-grid" />
            <span className="project__ph-num">{index}</span>
            <span className="project__ph-tag">示例图 · 待替换</span>
          </span>
        )}

        <span className="project__media-bar" />
        <span className="project__media-meta">
          {index} / {year}
        </span>
        <span className="project__media-hover">
          查看项目
          <ArrowUpRight size={15} />
        </span>
      </a>

      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{title}</h3>
          <p className="project__subtitle">{subtitle}</p>
        </div>

        <div className="project__detail">
          <p className="project__desc">{description}</p>
          <ul className="project__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="project__foot">
            <span className="project__role">角色 · {role}</span>
            <a className="link-underline" href={link}>
              查看项目
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const s = sections.work

  return (
    <section className="section work" id="work">
      <div className="shell">
        <header className="section-head">
          <div className="section-head__lead">
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__index">{s.index}</span>
              <span className="eyebrow__rule" />
              {s.label}
            </p>
            <h2 className="section-title work__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              {s.title[0]}
              <br />
              {s.title[1]}
            </h2>
          </div>
          <p className="section-head__note" data-reveal style={{ '--reveal-delay': '160ms' }}>
            {s.note}
          </p>
        </header>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
