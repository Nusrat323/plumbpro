import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
      <p className="mt-2 text-sm text-slate-500">That page doesn't exist.</p>
      <Link to="/" className="mt-6 rounded-lg px-5 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        Back home
      </Link>
    </div>
  )
}
