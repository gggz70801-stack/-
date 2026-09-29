import { closing, contacts, profile, site } from '../data/resume'
import { ArrowUpRight } from './Icons'
import './Contact.css'

export default function Contact() {
  const wechat = contacts.find((item) => item.label === '微信')

  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true">
        <span className="contact__glow" />
        <span className="contact__grid" />
      </div>

      <div className="shell contact__inner">
        <div className="contact__top">
          <div className="contact__main">
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__index">{closing.eyebrow.split('/')[0].trim()}</span>
              <span className="eyebrow__rule" />
              {closing.eyebrow.split('/')[1].trim()}
            </p>

            <h2 className="contact__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              <span>{closing.title[0]}</span>
              <span>{closing.title[1]}</span>
            </h2>

            <a
              className="contact__mail"
              href={`mailto:${closing.email}`}
              data-reveal
              style={{ '--reveal-delay': '160ms' }}
            >
              {closing.email}
              <ArrowUpRight size={22} />
            </a>

            <p className="contact__note" data-reveal style={{ '--reveal-delay': '220ms' }}>
              {closing.note}
            </p>

            <div className="contact__actions" data-reveal style={{ '--reveal-delay': '280ms' }}>
              {closing.actions.map((action) => (
                <a className="btn" href={action.href} key={action.label}>
                  {action.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <aside className="contact__aside" data-reveal style={{ '--reveal-delay': '360ms' }}>
            <p className="contact__aside-title">合作信息</p>
            <ul className="contact__aside-list">
              <li>
                <span>当前状态</span>
                <strong>
                  <i className="contact__dot" />
                  {profile.availability}
                </strong>
              </li>
              <li>
                <span>所在地</span>
                <strong>{profile.location}</strong>
              </li>
              <li>
                <span>回复时间</span>
                <strong>{closing.responseTime}</strong>
              </li>
              <li>
                <span>微信</span>
                <strong>{wechat ? wechat.value : '—'}</strong>
              </li>
            </ul>
          </aside>
        </div>

        <footer className="contact__foot">
          <ul className="contact__socials">
            {closing.socials.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  {item.label}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>

          <div className="contact__meta">
            <span>
              © {site.year} {profile.name} — {profile.roleLine}
            </span>
            <span>{profile.location}</span>
          </div>

          <a className="contact__top-link" href="#top">
            回到顶部
            <span className="contact__top-arrow">↑</span>
          </a>
        </footer>
      </div>
    </section>
  )
}
