import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Services as ServicesSection, Process, FinalCta } from '../sections'
import { pageSeo } from '../data/pageSeo'

export default function Services() {
  return (
    <>
      <Seo {...pageSeo['/services']} path="/services" />
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
