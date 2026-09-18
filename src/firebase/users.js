import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './config'

const USERS_COLLECTION = 'users'

/**
 * Fetch a user's profile document from Firestore.
 * Returns null if the profile doesn't exist yet.
 */
export async function getUserProfile(uid) {
  const ref = doc(db, USERS_COLLECTION, uid)
  const snap = await getDoc(ref)
  return snap.exists() ? { uid, ...snap.data() } : null
}

/**
 * Create a user profile document. Always defaults role to "customer" —
 * the role field must never be settable from a client-supplied value.
 * (Firestore security rules also enforce this server-side; see firestore.rules)
 */
export async function createUserProfile(user, extra = {}) {
  const ref = doc(db, USERS_COLLECTION, user.uid)
  const profile = {
    uid: user.uid,
    name: extra.name || user.displayName || '',
    email: user.email || '',
    phone: extra.phone || '',
    photoURL: user.photoURL || '',
    role: 'customer',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }
  await setDoc(ref, profile, { merge: false })
  return profile
}

/**
 * Update editable profile fields. Deliberately does NOT accept `role`
 * as a parameter, so it's impossible to accidentally wire it up to a form.
 */
export async function updateUserProfile(uid, { name, phone, photoURL, address }) {
  const ref = doc(db, USERS_COLLECTION, uid)
  const updates = { updatedAt: serverTimestamp() }
  if (name !== undefined) updates.name = name
  if (phone !== undefined) updates.phone = phone
  if (photoURL !== undefined) updates.photoURL = photoURL
  if (address !== undefined) updates.address = address
  await updateDoc(ref, updates)
}

/**
 * Ensure a profile exists for a user (used after Google sign-in, where
 * there's no separate "register" step to hook profile creation into).
 */
export async function ensureUserProfile(user) {
  const existing = await getUserProfile(user.uid)
  if (existing) return existing
  return createUserProfile(user)
}
