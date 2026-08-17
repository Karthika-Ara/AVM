import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import { fadeUp, viewportOnce } from '../lib/motion'
import { site } from '../data/site'

/** Full-width embedded map with a floating clinic-details card. */
export default function MapSection() {
  if (!site.mapEmbed) {
    return null
  }

  return (
    <section id="location" className="bg-white pb-20 pt-4 sm:pb-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] border border-line shadow-card"
        >
          <iframe
            title="AVM Smiles location on Google Maps"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full sm:h-[460px]"
          />

          {/* Floating details card */}
          <div className="pointer-events-none absolute inset-0 flex items-end p-4 sm:items-center sm:p-8">
            <div className="pointer-events-auto w-full max-w-sm rounded-3xl border border-line bg-white/95 p-6 shadow-float backdrop-blur sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                <MapPin className="h-3.5 w-3.5" /> Visit Us
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">AVM Smiles Dental Clinic</h3>
              {site.address && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{site.address}</p>
              )}

              <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                <p className="flex items-center gap-3 text-ink">
                  <Clock className="h-4 w-4 text-brand-500" />
                  <span>
                    {site.hoursDays} · {site.hoursTime}
                  </span>
                </p>
                <a href={site.phoneHref} className="flex items-center gap-3 text-ink hover:text-brand-700">
                  <Phone className="h-4 w-4 text-brand-500" />
                  {site.phoneDisplay}
                </a>
              </div>

              {site.mapLink && (
                <div className="mt-6">
                  <Button href={site.mapLink} variant="primary" icon={Navigation} className="w-full">
                    Get Directions
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
