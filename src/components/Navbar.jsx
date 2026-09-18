import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Wrench, LayoutDashboard, CalendarClock, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const PUBLIC_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isAuthenticated, isAdmin, profile, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    toast.success('Logged out.')
    navigate('/')
  }

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-copper-600' : 'text-slate-600 hover:text-navy-900'
    }`

  return (
    <header className="sticky top-0 z-40 border-b bg-white" style={{ borderColor: 'var(--color-line)' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-navy-900)' }}
          >
            <Wrench size={18} />
          </span>
          <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy-900)' }}>
            PlumbPro
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {PUBLIC_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} style={{ color: undefined }}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {isAuthenticated ? (
            <>
              <Link
                to={isAdmin ? '/admin/dashboard' : '/dashboard'}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-navy-900"
              >
                <LayoutDashboard size={16} />
                {isAdmin ? 'Admin Dashboard' : 'Dashboard'}
              </Link>
              {!isAdmin && (
                <Link to="/appointments" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-navy-900">
                  <CalendarClock size={16} />
                  My Appointments
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-navy-900">
              Log In
            </Link>
          )}

          <Link
            to="/book"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--color-copper-500)' }}
          >
            Book a Service
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <div className="flex flex-col gap-4 px-4 py-5">
              {PUBLIC_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="my-1 h-px" style={{ backgroundColor: 'var(--color-line)' }} />
              {isAuthenticated ? (
                <>
                  <Link to={isAdmin ? '/admin/dashboard' : '/dashboard'} onClick={() => setMobileOpen(false)} className="text-sm font-medium">
                    {isAdmin ? 'Admin Dashboard' : 'Dashboard'}
                  </Link>
                  <button onClick={handleLogout} className="text-left text-sm font-medium text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium">
                  Log In
                </Link>
              )}
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--color-copper-500)' }}
              >
                Book a Service
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
