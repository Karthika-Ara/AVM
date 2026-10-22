/**
 * Single source of truth for clinic contact details, navigation and hours.
 * Replace the placeholder phone / email / address with the real values.
 */
export const site = {
  name: 'AVM Smiles',
  tagline: 'Trusted Dental Clinic',
  // --- Contact (placeholders — update with real details) ---
  phoneDisplay: '+91 84899 34567',
  phoneHref: 'tel:+918489934567',
  whatsappDisplay: '+91 84899 34567',
  whatsappHref: 'https://wa.me/918489934567',
  email: 'accounts@arkglobalomniverse.com',
  emailHref: 'mailto:accounts@arkglobalomniverse.com',
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

// Branch websites shown in the Contact dropdown.
export const locations = [
  { label: 'Kumbakonam', href: 'https://avmsmilesdental.com/kumbakonam/' },
  { label: 'Thanjavur', href: 'https://avmsmilesdental.com/thanjavur/' },
  { label: 'Chidambaram', href: 'https://avmsmilesdental.com/chidambaram/' },
  { label: 'Puducherry', href: 'https://avmsmilesdental.com/puducherry/' },
  { label: 'Cuddalore', href: 'https://avmsmilesdental.com/cuddalore/' },
]

export const social = [
  { label: 'Facebook', href: 'https://facebook.com', key: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', key: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com', key: 'youtube' },
]

export default site
