import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { FinalCta } from '../sections'
import transformations from '../data/gallery'
import galleryVideos from '../data/galleryVideos'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | AVM Smiles"
        description="Explore the AVM Smiles gallery featuring our modern dental clinic, advanced technology, treatment facilities, and patient care environment."
        keywords="AVM Smiles gallery, dental clinic photos, dental treatment, modern dental clinic, dental care facilities, dentist"
        path="/gallery"
      />
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

      {/* Patient videos */}
      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Patient Videos"
          title="Stories from our patients"
        />
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryVideos.map((video) => (
            <motion.figure
              key={video.id}
              variants={staggerItem}
              className="overflow-hidden rounded-3xl bg-black shadow-card"
            >
              <video
                src={video.src}
                controls
                preload="metadata"
                playsInline
                className="aspect-[9/16] w-full bg-black object-cover"
              />
              <figcaption className="bg-white px-5 py-4">
                <p className="font-bold text-ink">{video.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Section>

      <FinalCta />
    </>
  )
}
