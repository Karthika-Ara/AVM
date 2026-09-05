import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Reviews, FinalCta } from '../sections'
import { pageSeo } from '../data/pageSeo'

export default function Testimonials() {
  return (
    <>
      <Seo {...pageSeo['/testimonials']} path="/testimonials" />
      <PageHeader
        eyebrow="Testimonials"
        title="Smiles worth talking about"
        intro="Thousands of patients trust AVM Smiles for their dental care. Here's what they have to say."
        crumbs={[{ label: 'Testimonials' }]}
      />

      <Reviews />

      <FinalCta />
    </>
  )
}
