import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { getUserAppointments } from '../../firebase/appointments'
import { APPOINTMENT_STATUS } from '../../utils/appointmentRules'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyState from '../../components/EmptyState'
import StatusBadge from '../../components/StatusBadge'

export default function Dashboard() {
  const { firebaseUser, profile } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!firebaseUser) return
    getUserAppointments(firebaseUser.uid)
      .then(setAppointments)
      .catch(() => setError('Could not load your appointments right now.'))
      .finally(() => setLoading(false))
  }, [firebaseUser])

  const counts = appointments.reduce(
    (acc, a) => {
      acc[a.status] = (acc[a.status] || 0) + 1
      return acc
    },
    { [APPOINTMENT_STATUS.PENDING]: 0, [APPOINTMENT_STATUS.CONFIRMED]: 0, [APPOINTMENT_STATUS.COMPLETED]: 0, [APPOINTMENT_STATUS.CANCELLED]: 0 }
  )

  const upcoming = appointments.find(
    (a) => a.status === APPOINTMENT_STATUS.PENDING || a.status === APPOINTMENT_STATUS.CONFIRMED
  )

  if (loading) return <LoadingSpinner label="Loading your dashboard..." />

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          Welcome back{profile?.name ? `, ${profile.name.split(' ')[0]}` : ''}
        </h1>
        <p className="mt-1 text-sm text-slate-500">Here's where things stand with your appointments.</p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Pending', value: counts.pending },
          { label: 'Confirmed', value: counts.confirmed },
          { label: 'Completed', value: counts.completed },
          { label: 'Cancelled', value: counts.cancelled },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-white p-4" style={{ borderColor: 'var(--color-line)' }}>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-slate-700">Upcoming appointment</h2>
        {upcoming ? (
          <div className="flex items-center justify-between rounded-xl border bg-white p-4" style={{ borderColor: 'var(--color-line)' }}>
            <div>
              <p className="font-medium">{upcoming.serviceName || 'Service'}</p>
              <p className="text-sm text-slate-500">{upcoming.date} at {upcoming.time}</p>
            </div>
            <StatusBadge status={upcoming.status} />
          </div>
        ) : (
          <EmptyState
            title="No upcoming appointments"
            description="Book a service and it'll show up here."
            action={
              <Link to="/book" className="rounded-lg px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-copper-500)' }}>
                Book a Service
              </Link>
            }
          />
        )}
      </div>
    </div>
  )
}
