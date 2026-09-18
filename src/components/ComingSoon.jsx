/**
 * Placeholder for pages scheduled in later phases (see project README).
 * Deliberately NOT styled to look "finished" — a half-built page pretending
 * to be complete is worse than an honest placeholder.
 */
export default function ComingSoon({ title, note }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        {note || 'This page is scaffolded and routed, but its content is built in a later phase.'}
      </p>
    </div>
  )
}
