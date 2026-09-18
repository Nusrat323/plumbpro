/**
 * Single source of truth for appointment status transitions.
 * Both customer-facing UI and admin UI must import from here rather than
 * re-implementing these checks, so the rules can never drift apart.
 *
 * Statuses: pending -> confirmed -> completed (locked)
 *           pending -> cancelled (locked)
 *           confirmed -> cancelled (locked)
 */

export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

const LOCKED_STATUSES = [APPOINTMENT_STATUS.COMPLETED, APPOINTMENT_STATUS.CANCELLED]

export function isLocked(status) {
  return LOCKED_STATUSES.includes(status)
}

/** Can the customer who owns this appointment cancel it? */
export function canCustomerCancel(status) {
  return status === APPOINTMENT_STATUS.PENDING
}

/** Can an admin confirm this appointment? */
export function canConfirm(status) {
  return status === APPOINTMENT_STATUS.PENDING
}

/** Can an admin cancel this appointment? */
export function canAdminCancel(status) {
  return status === APPOINTMENT_STATUS.PENDING || status === APPOINTMENT_STATUS.CONFIRMED
}

/** Can an admin mark this appointment completed? */
export function canComplete(status) {
  return status === APPOINTMENT_STATUS.CONFIRMED
}

/**
 * Central gate for every status mutation. Both the "confirm" button
 * handler and any future bulk-action code should call this before
 * writing to Firestore, so an invalid transition never reaches the DB.
 */
export function canChangeAppointmentStatus(currentStatus, nextStatus) {
  if (isLocked(currentStatus)) return false

  const allowedFrom = {
    [APPOINTMENT_STATUS.PENDING]: [APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.CANCELLED],
    [APPOINTMENT_STATUS.CONFIRMED]: [APPOINTMENT_STATUS.COMPLETED, APPOINTMENT_STATUS.CANCELLED],
  }

  return allowedFrom[currentStatus]?.includes(nextStatus) ?? false
}

export const STATUS_LABELS = {
  [APPOINTMENT_STATUS.PENDING]: 'Pending',
  [APPOINTMENT_STATUS.CONFIRMED]: 'Confirmed',
  [APPOINTMENT_STATUS.COMPLETED]: 'Completed',
  [APPOINTMENT_STATUS.CANCELLED]: 'Cancelled',
}

// Tailwind classes per status, used by StatusBadge — kept here so color
// meaning stays consistent everywhere status appears (cards, tables, timeline).
export const STATUS_STYLES = {
  [APPOINTMENT_STATUS.PENDING]: 'bg-amber-50 text-amber-700 border-amber-200',
  [APPOINTMENT_STATUS.CONFIRMED]: 'bg-blue-50 text-blue-700 border-blue-200',
  [APPOINTMENT_STATUS.COMPLETED]: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  [APPOINTMENT_STATUS.CANCELLED]: 'bg-red-50 text-red-700 border-red-200',
}
