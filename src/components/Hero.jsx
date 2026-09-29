import { useState } from 'react'
import { profile, site } from '../data/resume'
import { ArrowDown, ArrowUpRight } from './Icons'
import './Hero.css'

export default function Hero() {
  // 只有视频真的能播放时才显示视频，否则用内置动态光影兜底
  const [videoReady, setVideoReady] = useState(false)
  // 用 BASE_URL 拼路径：部署在子目录（如 GitHub Pages）时也能正确加载
  const base = import.meta.env.BASE_URL || '/'

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <video
          className={`hero__video${videoReady ? ' is-active' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${base}media/hero-poster.jpg`}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        >
          <source src={`${base}media/hero-loop.webm`} type="video/webm" />
          <source src={`${base}media/hero-loop.mp4`} type="video/mp4" />
        </video>
        <div className="hero__aurora" />
        <div className="hero__grid" />
        <div className="hero__band" />
        <div className="hero__vignette" />
      </div>

      <div className="shell hero__inner">
        <div className="hero__main">
          <p className="hero__eyebrow anim" style={{ '--d': '120ms' }}>
            <span className="hero__eyebrow-dot" />
            {profile.roleLine}
          </p>

          <h1 className="hero__title">
            {profile.headline.map((line, i) => (
              <span className="hero__line" key={line}>
                <span style={{ '--d': `${i * 110 + 220}ms` }}>{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero__note anim" style={{ '--d': '660ms' }}>
            {profile.heroNote}
          </p>

          <div className="hero__cta anim" style={{ '--d': '760ms' }}>
            <a className="btn" href="#contact">
              联系我
              <ArrowUpRight size={15} />
            </a>
            <a className="link-underline hero__cta-ghost" href="#work">
              查看作品
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className="hero__foot anim" style={{ '--d': '880ms' }}>
          <ul className="hero__meta">
            <li>
              <span className="hero__meta-label">所在地</span>
              <span className="hero__meta-value">{profile.location}</span>
            </li>
            <li>
              <span className="hero__meta-label">状态</span>
              <span className="hero__meta-value">
                <i className="hero__pulse" />
                {profile.availability}
              </span>
            </li>
            <li>
              <span className="hero__meta-label">作品集</span>
              <span className="hero__meta-value">
                {site.year} / {profile.latinName}
              </span>
            </li>
          </ul>

          <a className="hero__scroll" href="#work">
            <span className="hero__scroll-rail">
              <i />
            </span>
            向下滚动
          </a>
        </div>
      </div>
    </section>
  )
}
