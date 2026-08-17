import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, Star, ShieldCheck, Sparkles, HeartPulse, Smile } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import SmartImage from '../components/SmartImage'
import { staggerParent, staggerItem, EASE_PREMIUM } from '../lib/motion'
import images from '../data/images'
import { heroStats } from '../data/stats'

const features = [
  { icon: ShieldCheck, label: 'Experienced Dental Specialists' },
  { icon: Sparkles, label: 'Advanced Digital Dentistry' },
  { icon: HeartPulse, label: 'Pain-Free Treatment Options' },
  { icon: Smile, label: 'Personalized Smile Solutions' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <SmartImage
          src={images.heroBackground}
          alt="Modern AVM Smiles dental clinic interior in Pondicherry"
          loading="eager"
          className="h-full w-full"
          imgClassName="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-transparent to-brand-900/40" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-500/20 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — 60% */}
          <motion.div
            variants={staggerParent(0.12, 0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                <span className="flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-400/80" />
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                </span>
                Best Dental Clinic
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]"
            >
              AVM Smiles – A Trusted Dental Clinic for Complete Smile Care
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              AVM Smiles is a leading dental clinic providing advanced dental
              treatments, experienced dentists, and personalized care to all age
              groups. We offer full-scale dental health care from routine checkups
              to smile makeovers and dental implants, using the latest technology
              and patient-focused treatment plans.
            </motion.p>

            {/* Feature highlights */}
            <motion.ul
              variants={staggerParent(0.08, 0.2)}
              className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
            >
              {features.map((f) => (
                <motion.li
                  key={f.label}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-[0.95rem] text-white/85"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-400 ring-1 ring-white/15">
                    <f.icon className="h-4 w-4" />
                  </span>
                  {f.label}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" variant="accent" size="lg" icon={CalendarDays} iconRight={false}>
                Book Appointment
              </Button>
              <Button to="/services" variant="light" size="lg" icon={ArrowRight}>
                Explore Treatments
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — 40% : patient image + floating stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 shadow-float">
                <SmartImage
                  src={images.heroPatient}
                  alt="Smiling patient at AVM Smiles dental clinic"
                  loading="eager"
                  className="aspect-[4/5] w-full"
                />
              </div>

              {/* Floating: Years of experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: EASE_PREMIUM }}
                className="animate-floaty absolute -left-4 top-10 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:-left-8"
              >
                <p className="text-2xl font-extrabold text-brand-700">
                  {heroStats.experience.value}
                  {heroStats.experience.suffix}
                </p>
                <p className="text-[0.7rem] font-medium uppercase tracking-wide text-muted">
                  {heroStats.experience.label}
                </p>
              </motion.div>

              {/* Floating: Patients treated */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.6, ease: EASE_PREMIUM }}
                className="animate-floaty absolute -right-3 bottom-24 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:-right-8"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-2xl font-extrabold text-brand-700">
                  {heroStats.patients.value.toLocaleString('en-IN')}
                  {heroStats.patients.suffix}
                </p>
                <p className="text-[0.7rem] font-medium uppercase tracking-wide text-muted">
                  {heroStats.patients.label}
                </p>
              </motion.div>

              {/* Floating: Google rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: EASE_PREMIUM }}
                className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/60 bg-white/95 px-4 py-2.5 shadow-float backdrop-blur"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-[0.7rem] font-medium text-muted">
                    <span className="font-bold text-ink">{heroStats.rating.value}</span>{' '}
                    {heroStats.rating.label}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Soft fade into the trust bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  )
}
