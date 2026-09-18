import { useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  CalendarClock,
  Wrench,
  Users,
  MessageSquare,
  Star,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const LINKS = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/appointments', label: 'Appointments', icon: CalendarClock },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/inquiries', label: 'Inquiries', icon: MessageSquare },
  { to: '/admin/testimonials', label: 'Testimonials', icon: Star },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { profile, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    toast.success('Logged out.')
    navigate('/')
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  const sidebarContent = (
    <>
      <Link to="/admin/dashboard" className="mb-8 flex items-center gap-2 px-1">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-copper-500 text-white">
          <Wrench size={16} />
        </span>
        <span className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
          PlumbPro Admin
        </span>
      </Link>
      <nav className="flex flex-1 flex-col gap-1">
        {LINKS.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={linkClass} onClick={() => setSidebarOpen(false)}>
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
      >
        <LogOut size={16} />
        Logout
      </button>
    </>
  )

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Desktop sidebar */}
      <aside
        className="hidden w-64 shrink-0 flex-col p-5 lg:flex"
        style={{ backgroundColor: 'var(--color-navy-950)' }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside
            className="relative flex w-64 flex-col p-5"
            style={{ backgroundColor: 'var(--color-navy-950)' }}
          >
            <button className="absolute right-3 top-3 text-white" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-8" style={{ borderColor: 'var(--color-line)' }}>
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
          <div className="hidden text-sm text-slate-500 lg:block">Admin Panel</div>
          <div className="text-sm font-medium">{profile?.name || 'Admin'}</div>
        </header>
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
