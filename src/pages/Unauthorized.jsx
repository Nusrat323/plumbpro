import { Link } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'

export default function Unauthorized() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <ShieldAlert size={40} style={{ color: 'var(--color-copper-500)' }} />
      <h1 className="mt-4 text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
        You don't have access to that page
      </h1>
      <p className="mt-2 max-w-md text-sm text-slate-500">
        This area is restricted to administrators. If you think this is a mistake, contact support.
      </p>
      <Link to="/dashboard" className="mt-6 rounded-lg px-5 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        Back to my dashboard
      </Link>
    </div>
  )
}
