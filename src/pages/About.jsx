import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import {
  AboutStory,
  About as AboutSection,
  WhyChoose,
  Process,
  FinalCta,
} from '../sections'

export default function About() {
  return (
    <>
      <Seo
        title="About Us | AVM Smiles"
        description="Learn about AVM Smiles, a trusted dental clinic offering advanced dental treatments, experienced dentists, and patient-focused care."
        keywords="AVM Smiles, dental clinic, best dental clinic, dental health care, experienced dentists, dental treatments"
        path="/about-us"
      />
      <PageHeader
        eyebrow="About Us"
        title="About AVM Smiles"
        intro="A trusted dental clinic in Pondicherry delivering advanced treatments, experienced dentists and genuinely patient-focused care."
        crumbs={[{ label: 'About Us' }]}
      />
      <AboutStory />
      <AboutSection />
      <WhyChoose />
      <Process />
      <FinalCta />
    </>
  )
}
