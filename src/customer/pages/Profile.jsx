import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'
import { updateUserProfile } from '../../firebase/users'

export default function Profile() {
  const { profile, refreshProfile } = useAuth()
  const [form, setForm] = useState({
    name: profile?.name || '',
    phone: profile?.phone || '',
    address: profile?.address || '',
  })
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    try {
      await updateUserProfile(profile.uid, form)
      await refreshProfile()
      toast.success('Profile updated.')
    } catch (err) {
      toast.error('Could not update your profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const field = (id, label, type = 'text') => (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-copper-500"
        style={{ borderColor: 'var(--color-line)' }}
      />
    </div>
  )

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>My Profile</h1>
      <p className="mt-1 text-sm text-slate-500">Email: {profile?.email} (cannot be changed here)</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-xl border bg-white p-6" style={{ borderColor: 'var(--color-line)' }}>
        {field('name', 'Full name')}
        {field('phone', 'Phone', 'tel')}
        {field('address', 'Address')}
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: 'var(--color-navy-900)' }}
        >
          {saving ? 'Saving changes...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
