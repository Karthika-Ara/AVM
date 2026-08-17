import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import SmartImage from '../components/SmartImage'
import { fadeRight, fadeLeft, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { aboutStory } from '../data/about'
import images from '../data/images'

export default function AboutStory() {
  return (
    <Section tone="white">
      {/* Intro split */}
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <Eyebrow>{aboutStory.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {aboutStory.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {aboutStory.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-float">
              <SmartImage
                src={images.aboutTeam}
                alt="The AVM Smiles dental team"
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-3xl bg-brand-100"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-accent-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <motion.div
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        <motion.article
          variants={staggerItem}
          className="relative overflow-hidden rounded-3xl bg-brand-600 p-8 text-white shadow-card sm:p-9"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl"
          />
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <Target className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-medium">Our Mission</h3>
          <p className="mt-3 leading-relaxed text-white/80">{aboutStory.mission}</p>
        </motion.article>

        <motion.article
          variants={staggerItem}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-soft sm:p-9"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent-100/50 blur-2xl"
          />
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
            <Eye className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-medium text-ink">Our Vision</h3>
          <p className="mt-3 leading-relaxed text-muted">{aboutStory.vision}</p>
        </motion.article>
      </motion.div>
    </Section>
  )
}
