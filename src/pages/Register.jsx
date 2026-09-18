import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.password.length < 6) {
      toast.error('Password should be at least 6 characters.')
      return
    }
    setSubmitting(true)
    try {
      await register(form)
      toast.success('Account created!')
      navigate('/dashboard', { replace: true })
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
      toast.success('Account created!')
      navigate(profile?.role === 'admin' ? '/admin/dashboard' : '/dashboard', { replace: true })
    } catch (err) {
      toast.error(err.message)
    } finally {
      setGoogleLoading(false)
    }
  }

  const field = (id, label, type = 'text', required = true) => (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-copper-500"
        style={{ borderColor: 'var(--color-line)' }}
      />
    </div>
  )

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
          Create your account
        </h1>
        <p className="mt-1 text-sm text-slate-500">Book services and track appointments in one place.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {field('name', 'Full name')}
          {field('email', 'Email', 'email')}
          {field('phone', 'Phone', 'tel', false)}
          {field('password', 'Password', 'password')}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            style={{ backgroundColor: 'var(--color-navy-900)' }}
          >
            {submitting ? 'Creating account...' : 'Create Account'}
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
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-copper-600">Log in</Link>
        </p>
      </motion.div>
    </div>
  )
}
