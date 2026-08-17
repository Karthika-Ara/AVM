import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { aboutTiles } from '../data/about'

export default function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          align="left"
          className="lg:col-span-7"
          eyebrow="About AVM Smiles"
          title="Your Trusted Partner for Complete Dental Care"
          intro="At AVM Smiles, we are focused on delivering top-quality dental clinic services with modern dental treatments, caring service, and excellent patient experiences. Our clinic practice prioritizes preventive, restorative, cosmetic, and orthodontic dentistry to help our patients achieve healthy and beautiful smiles. From regular dental cleaning to a complete smile makeover, our clinic combines expertise, technology, and personalized attention to offer the best in dental care services."
        />
        <div className="lg:col-span-5 lg:pb-2 lg:text-right">
          <Button to="/about-us" variant="outline" icon={ArrowRight}>
            More About Our Clinic
          </Button>
        </div>
      </div>

      {/* Uniform card grid */}
      <motion.div
        variants={staggerParent(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {aboutTiles.map((tile) => (
          <motion.article
            key={tile.title}
            variants={staggerItem}
            className="group flex flex-col rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-card sm:p-7"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-line transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <tile.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{tile.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{tile.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
