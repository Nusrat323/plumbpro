import { STATUS_LABELS, STATUS_STYLES } from '../utils/appointmentRules'

export default function StatusBadge({ status }) {
  const label = STATUS_LABELS[status] || status
  const styles = STATUS_STYLES[status] || 'bg-slate-50 text-slate-600 border-slate-200'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {label}
    </span>
  )
}
