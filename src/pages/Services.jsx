import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Services as ServicesSection, Process, FinalCta } from '../sections'

export default function Services() {
  return (
    <>
      <Seo
        title="Dental Services | AVM Smiles"
        description="Explore the full range of dental care services at AVM Smiles — implants, root canals, teeth whitening, aligners, braces, veneers and more."
        path="/services"
      />
      <PageHeader
        eyebrow="Our Services"
        title="Complete dental care under one roof"
        intro="From routine cleanings to full smile makeovers, every treatment is delivered with precision, comfort and a personal touch."
        crumbs={[{ label: 'Services' }]}
      />
      <ServicesSection />
      <Process />
      <FinalCta />
    </>
  )
}
