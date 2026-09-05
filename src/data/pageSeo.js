/**
 * Single source of truth for the static pages' meta data (title, description,
 * keywords). Consumed both by each page's <Seo> component at runtime and by
 * scripts/prerender-meta.mjs, which bakes the same values into the static
 * dist/<path>/index.html so each route carries its own meta tags instead of
 * every page falling back to the Home page's.
 */
export const pageSeo = {
  '/': {
    title: 'Best Dental Clinic | AVM Smiles',
    description:
      'AVM Smiles is a trusted dental clinic offering advanced dental treatments, expert dentists, and complete dental health care for all ages.',
    keywords:
      'best dental clinic, dental care services, dental clinic services, dental health care, dental health services, dental hygiene clinic, teeth whitening clinic, teeth whitening dentist, top dental care',
  },
  '/about-us': {
    title: 'About Us | AVM Smiles',
    description:
      'Learn about AVM Smiles, a trusted dental clinic offering advanced dental treatments, experienced dentists, and patient-focused care.',
    keywords:
      'AVM Smiles, dental clinic, best dental clinic, dental health care, experienced dentists, dental treatments',
  },
  '/services': {
    title: 'Dental Services | AVM Smiles',
    description:
      'Explore the full range of dental care services at AVM Smiles — implants, root canals, teeth whitening, aligners, braces, veneers and more.',
  },
  '/gallery': {
    title: 'Gallery | AVM Smiles',
    description:
      'Explore the AVM Smiles gallery featuring our modern dental clinic, advanced technology, treatment facilities, and patient care environment.',
    keywords:
      'AVM Smiles gallery, dental clinic photos, dental treatment, modern dental clinic, dental care facilities, dentist',
  },
  '/testimonials': {
    title: 'Patient Testimonials | AVM Smiles',
    description:
      'Read and watch real patient reviews of AVM Smiles for implants, aligners, root canals and smile makeovers.',
  },
  '/contact-us': {
    title: 'Contact Us | AVM Smiles',
    description:
      'Contact AVM Smiles Dental Clinic for appointments, dental consultations, implants, aligners, and comprehensive oral care services.',
    keywords:
      'contact AVM Smiles, dental clinic contact, dentist appointment, dental consultation, dental implants, oral care',
  },
}

export default pageSeo
