import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config'
import { createUserProfile, ensureUserProfile, getUserProfile } from '../firebase/users'

const AuthContext = createContext(undefined)

// Maps raw Firebase Auth error codes to friendly, user-facing copy.
// Never show `error.message` from Firebase directly to a customer.
function friendlyAuthError(code) {
  const map = {
    'auth/email-already-in-use': 'An account with this email already exists. Try logging in instead.',
    'auth/invalid-email': 'That email address doesn\'t look right.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
  }
  return map[code] || 'Something went wrong. Please try again.'
}

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user)
      if (user) {
        try {
          const userProfile = await getUserProfile(user.uid)
          setProfile(userProfile)
        } catch (err) {
          console.error('Failed to load user profile:', err)
          setProfile(null)
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  async function register({ name, email, password, phone }) {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      if (name) {
        await updateProfile(cred.user, { displayName: name })
      }
      const userProfile = await createUserProfile(cred.user, { name, phone })
      setProfile(userProfile)
      return { user: cred.user, profile: userProfile }
    } catch (err) {
      throw new Error(friendlyAuthError(err.code))
    }
  }

  async function login({ email, password }) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const userProfile = await getUserProfile(cred.user.uid)
      setProfile(userProfile)
      return { user: cred.user, profile: userProfile }
    } catch (err) {
      throw new Error(friendlyAuthError(err.code))
    }
  }

  async function loginWithGoogle() {
    try {
      const cred = await signInWithPopup(auth, googleProvider)
      const userProfile = await ensureUserProfile(cred.user)
      setProfile(userProfile)
      return { user: cred.user, profile: userProfile }
    } catch (err) {
      throw new Error(friendlyAuthError(err.code))
    }
  }

  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (err) {
      throw new Error(friendlyAuthError(err.code))
    }
  }

  async function logout() {
    await signOut(auth)
    setProfile(null)
  }

  async function refreshProfile() {
    if (!firebaseUser) return
    const userProfile = await getUserProfile(firebaseUser.uid)
    setProfile(userProfile)
  }

  const value = {
    firebaseUser,
    profile,
    isAuthenticated: !!firebaseUser,
    isAdmin: profile?.role === 'admin',
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    refreshProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (ctx === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
