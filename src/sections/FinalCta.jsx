import { motion } from 'framer-motion'
import { Phone, CheckCircle2, Clock } from 'lucide-react'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import SmartImage from '../components/SmartImage'
import AppointmentForm from '../components/AppointmentForm'
import { fadeRight, fadeLeft, viewportOnce } from '../lib/motion'
import images from '../data/images'
import { site } from '../data/site'

const points = [
  'Same-week appointments available',
  'Transparent, upfront pricing',
  'Gentle, pain-free treatment options',
]

export default function FinalCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-brand-900 py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <SmartImage
          src={images.ctaBackground}
          alt="AVM Smiles dental clinic"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-brand-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/60" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <Eyebrow tone="light">Book your visit</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
              Book Your Dental Consultation Today
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              If you are searching for a top dental clinic for advanced dental
              treatments and personalized care, AVM Smiles is dedicated to
              providing excellent dental care with modern technology,
              experienced specialists, and a commitment to patient
              satisfaction.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-3 text-white"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/60">
                    Call us now
                  </span>
                  <span className="text-lg font-bold">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/60">
                    Open
                  </span>
                  <span className="text-sm font-semibold">{site.hoursTime}</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="mb-4 hidden lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Request an appointment
              </p>
            </div>
            <AppointmentForm />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
