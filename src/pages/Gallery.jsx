import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { FinalCta } from '../sections'
import transformations from '../data/gallery'
import { pageSeo } from '../data/pageSeo'

export default function Gallery() {
  return (
    <>
      <Seo {...pageSeo['/gallery']} path="/gallery" />
      <PageHeader
        eyebrow="Gallery"
        title="Explore Our Clinic"
        intro="Welcome to the AVM Smiles gallery, where you can take a closer look at our modern dental facility, advanced treatment rooms, state-of-the-art technology and patient-friendly environment."
        crumbs={[{ label: 'Gallery' }]}
      />

      {/* Before / after sliders */}
      <Section tone="white">
        <SectionHeading
          align="left"
          eyebrow="Before & After"
          title="Drag to reveal the difference"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {transformations.map((t) => (
            <figure key={t.id}>
              <BeforeAfterSlider
                before={t.before}
                after={t.after}
                alt={t.title}
                className="aspect-[16/11]"
              />
              <figcaption className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-bold text-ink">{t.title}</p>
                  <p className="text-sm text-muted">{t.treatment}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  )
}
