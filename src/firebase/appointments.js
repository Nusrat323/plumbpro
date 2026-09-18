import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'
import { APPOINTMENT_STATUS, canChangeAppointmentStatus } from '../utils/appointmentRules'

const APPOINTMENTS_COLLECTION = 'appointments'

export async function createAppointment(data) {
  const ref = collection(db, APPOINTMENTS_COLLECTION)
  const docRef = await addDoc(ref, {
    ...data,
    status: APPOINTMENT_STATUS.PENDING,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

export async function getAppointment(appointmentId) {
  const ref = doc(db, APPOINTMENTS_COLLECTION, appointmentId)
  const snap = await getDoc(ref)
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}

export async function getUserAppointments(userId) {
  const q = query(
    collection(db, APPOINTMENTS_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function getAllAppointments() {
  const q = query(collection(db, APPOINTMENTS_COLLECTION), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * The only function that should ever write a status change. Validates
 * the transition client-side (fast feedback) — Firestore security rules
 * enforce the same rule server-side as the real boundary.
 */
export async function changeAppointmentStatus(appointmentId, currentStatus, nextStatus) {
  if (!canChangeAppointmentStatus(currentStatus, nextStatus)) {
    throw new Error(`Cannot change appointment status from "${currentStatus}" to "${nextStatus}".`)
  }
  const ref = doc(db, APPOINTMENTS_COLLECTION, appointmentId)
  await updateDoc(ref, { status: nextStatus, updatedAt: serverTimestamp() })
}
