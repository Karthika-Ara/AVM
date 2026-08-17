import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import StarRating from '../components/StarRating'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { Reviews, FinalCta } from '../sections'
import testimonials from '../data/testimonials'

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Patient Testimonials | AVM Smiles"
        description="Read and watch real patient reviews of AVM Smiles for implants, aligners, root canals and smile makeovers."
        path="/testimonials"
      />
      <PageHeader
        eyebrow="Testimonials"
        title="Smiles worth talking about"
        intro="Thousands of patients trust AVM Smiles for their dental care. Here's what they have to say."
        crumbs={[{ label: 'Testimonials' }]}
      />

      <Reviews />

      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Patient Stories"
          title="What our patients say"
        />
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <Quote className="h-8 w-8 text-brand-200" />
              <StarRating value={t.rating} className="mt-4" />
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-ink">{t.name}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Section>

      <FinalCta />
    </>
  )
}
