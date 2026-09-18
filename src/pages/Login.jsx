import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const [form, setForm] = useState({ email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const { profile } = await login(form)
      toast.success('Welcome back!')
      navigate(profile?.role === 'admin' ? '/admin/dashboard' : from, { replace: true })
    } catch (err) {
      toast.error(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleGoogle() {
    setGoogleLoading(true)
    try {
      const { profile } = await loginWithGoogle()
      toast.success('Welcome back!')
      navigate(profile?.role === 'admin' ? '/admin/dashboard' : from, { replace: true })
    } catch (err) {
      toast.error(err.message)
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12" style={{ backgroundColor: 'var(--color-bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm"
        style={{ borderColor: 'var(--color-line)' }}
      >
        <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          Log in to your account
        </h1>
        <p className="mt-1 text-sm text-slate-500">Manage your appointments and service history.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-copper-500"
              style={{ borderColor: 'var(--color-line)' }}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
              <Link to="/forgot-password" className="text-xs font-medium text-copper-600">Forgot password?</Link>
            </div>
            <input
              id="password"
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-copper-500"
              style={{ borderColor: 'var(--color-line)' }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
            style={{ backgroundColor: 'var(--color-navy-900)' }}
          >
            {submitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-line)' }} />
          <span className="text-xs text-slate-400">or</span>
          <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-line)' }} />
        </div>

        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-full rounded-lg border py-2.5 text-sm font-medium disabled:opacity-60"
          style={{ borderColor: 'var(--color-line)' }}
        >
          {googleLoading ? 'Connecting to Google...' : 'Continue with Google'}
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-copper-600">Register</Link>
        </p>
      </motion.div>
    </div>
  )
}
