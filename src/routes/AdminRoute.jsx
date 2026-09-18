import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/LoadingSpinner'

/**
 * Blocks access unless the signed-in user's Firestore profile has role "admin".
 *
 * IMPORTANT: This is a UX guard only, not the real security boundary.
 * A normal customer manually navigating to /admin/dashboard is redirected
 * here, but the actual enforcement lives in firestore.rules — this route
 * guard just prevents the admin UI from ever rendering for the wrong user.
 * Never trust this component alone to protect data.
 */
export default function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner fullScreen label="Verifying access..." />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}
