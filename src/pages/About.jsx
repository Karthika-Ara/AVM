import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { AboutStory, FinalCta } from '../sections'
import { pageSeo } from '../data/pageSeo'

export default function About() {
  return (
    <>
      <Seo {...pageSeo['/about-us']} path="/about-us" />
      <PageHeader
        eyebrow="About Us"
        title="About AVM Smiles"
        intro="A trusted dental clinic delivering advanced treatments, experienced dentists and genuinely patient-focused care."
        crumbs={[{ label: 'About Us' }]}
      />
      <AboutStory />
      <FinalCta />
    </>
  )
}
