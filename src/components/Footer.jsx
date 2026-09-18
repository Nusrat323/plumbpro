import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            PlumbPro
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Licensed plumbers serving the local area with fast response and workmanship you can rely on.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/our-work" className="hover:text-white">Our Work</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Phone size={14} /> (555) 010-2200</li>
            <li className="flex items-center gap-2"><Mail size={14} /> hello@plumbpro.example</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Serving the metro area</li>
            <li className="flex items-center gap-2"><Clock size={14} /> Mon–Sat, 7am–7pm · Emergency 24/7</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Emergency?</h4>
          <p className="mt-3 text-sm text-slate-300">Burst pipe or no hot water? We're on call around the clock.</p>
          <Link
            to="/emergency"
            className="mt-3 inline-block rounded-lg px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: 'var(--color-copper-500)' }}
          >
            Emergency Plumbing
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} PlumbPro. All rights reserved.
      </div>
    </footer>
  )
}
