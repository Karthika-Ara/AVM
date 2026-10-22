import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

/**
 * Application route tree. All public pages share MainLayout (header + footer).
 * Pages are lazily loaded so each route — and the data it imports — ships as its
 * own chunk, keeping the initial homepage payload small.
 *
 *   /                     → Home
 *   /about-us             → About (legacy /about redirects here)
 *   /services             → Services index
 *   /services/:slug       → Service detail
 *   /gallery              → Smile gallery
 *   /testimonials         → Testimonials
 *   /contact-us           → Contact (legacy /contact redirects here)
 *   /thankyou             → Appointment confirmation
 *   *                     → 404
 */
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Gallery = lazy(() => import('../pages/Gallery'))
const Testimonials = lazy(() => import('../pages/Testimonials'))
const Contact = lazy(() => import('../pages/Contact'))
const ThankYou = lazy(() => import('../pages/ThankYou'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="about" element={<Navigate to="/about-us" replace />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
