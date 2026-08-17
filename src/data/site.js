/**
 * Single source of truth for clinic contact details, navigation and hours.
 * Replace the placeholder phone / email / address with the real values.
 */
export const site = {
  name: 'AVM Smiles',
  tagline: 'Trusted Dental Clinic',
  // --- Contact (placeholders — update with real details) ---
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappDisplay: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'care@avmsmiles.com',
  emailHref: 'mailto:care@avmsmiles.com',
  address: '',
  addressShort: '',
  hoursDays: 'Monday – Saturday',
  hoursTime: '9:00 AM – 8:00 PM',
  hoursNote: 'Sunday by appointment only',
  rating: 4.9,
  reviewCount: 1280,
  // Address details will be added once the official clinic location is confirmed.
  mapEmbed: '',
  mapLink: '',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact-us' },
]

export const social = [
  { label: 'Facebook', href: 'https://facebook.com', key: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', key: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com', key: 'youtube' },
]

export default site
