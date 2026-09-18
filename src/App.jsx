import { Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout'
import CustomerLayout from './layouts/CustomerLayout'
import AdminLayout from './layouts/AdminLayout'

import ProtectedRoute from './routes/ProtectedRoute'
import AdminRoute from './routes/AdminRoute'
import PublicRoute from './routes/PublicRoute'

import Home from './pages/Home'
import About from './pages/About'
import AllServices from './pages/AllServices'
import ServiceDetails from './pages/ServiceDetails'
import Emergency from './pages/Emergency'
import OurWork from './pages/OurWork'

import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Book from './pages/Book'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound'

import CustomerDashboard from './customer/pages/Dashboard'
import CustomerProfile from './customer/pages/Profile'
import CustomerAppointments from './customer/pages/Appointments'
import CustomerAppointmentDetails from './customer/pages/AppointmentDetails'
import CustomerMessages from './customer/pages/Messages'
import CustomerTracking from './customer/pages/Tracking'

import AdminDashboard from './admin/pages/Dashboard'
import AdminAppointments from './admin/pages/Appointments'
import AdminAppointmentDetails from './admin/pages/AppointmentDetails'
import AdminServices from './admin/pages/Services'
import AdminAddService from './admin/pages/AddService'
import AdminEditService from './admin/pages/EditService'
import AdminUsers from './admin/pages/Users'
import AdminInquiries from './admin/pages/Inquiries'
import AdminTestimonials from './admin/pages/Testimonials'
import AdminSettings from './admin/pages/Settings'



export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/our-work" element={<OurWork />} />
        
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Auth pages redirect away if already logged in */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

        {/* Booking requires being logged in */}
        <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
      </Route>

      {/* Customer portal */}
      <Route
        element={
          <ProtectedRoute>
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/profile" element={<CustomerProfile />} />
        <Route path="/appointments" element={<CustomerAppointments />} />
        <Route path="/appointments/:id" element={<CustomerAppointmentDetails />} />
        <Route path="/appointments/:id/tracking" element={<CustomerTracking />} />
        <Route path="/messages" element={<CustomerMessages />} />
      </Route>

      {/* Admin portal */}
      <Route
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/appointments/:id" element={<AdminAppointmentDetails />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/services/new" element={<AdminAddService />} />
        <Route path="/admin/services/:id/edit" element={<AdminEditService />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
