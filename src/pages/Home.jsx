import Seo from '../components/Seo'
import {
  Hero,
  TrustBar,
  About,
  Services,
  WhyChoose,
  BeforeAfter,
  Process,
  Reviews,
  Faq,
  FinalCta,
  MapSection,
} from '../sections'

const KEYWORDS =
  'best dental clinic, dental care services, dental clinic services, dental health care, dental health services, dental hygiene clinic, teeth whitening clinic, teeth whitening dentist, top dental care'

export default function Home() {
  return (
    <>
      <Seo
        title="Best Dental Clinic | AVM Smiles"
        description="AVM Smiles is a trusted dental clinic offering advanced dental treatments, expert dentists, and complete dental health care for all ages."
        keywords={KEYWORDS}
        path="/"
      />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <BeforeAfter />
      <Process />
      <Reviews />
      <Faq />
      <FinalCta />
      <MapSection />
    </>
  )
}
