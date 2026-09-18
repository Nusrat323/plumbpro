export default function LoadingSpinner({ fullScreen = false, label = 'Loading...' }) {
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-navy-100 border-t-copper-500"
        style={{ borderColor: 'var(--color-line)', borderTopColor: 'var(--color-copper-500)' }}
        role="status"
        aria-label={label}
      />
      <span className="text-sm text-slate-600" style={{ color: 'var(--color-slate-600)' }}>
        {label}
      </span>
    </div>
  )

  if (fullScreen) {
    return <div className="flex min-h-screen w-full items-center justify-center">{spinner}</div>
  }

  return <div className="flex w-full items-center justify-center py-10">{spinner}</div>
}
