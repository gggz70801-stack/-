import { marquee } from '../data/resume'
import './Marquee.css'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <ul className="marquee__group" key={group}>
            {marquee.map((item) => (
              <li key={`${group}-${item}`}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
