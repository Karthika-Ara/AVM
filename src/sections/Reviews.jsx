import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import StarRating from '../components/StarRating'
import { fadeRight, viewportOnce } from '../lib/motion'
import testimonials from '../data/testimonials'
import { site } from '../data/site'

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const count = testimonials.length

  const go = useCallback(
    (next) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1)
      setIndex((next + count) % count)
    },
    [index, count]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % count)
    }, 6000)

    return () => clearInterval(timer)
  }, [count])

  const active = testimonials[index]

  return (
    <Section id="reviews" tone="white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-4"
        >
          <Eyebrow>Patient Reviews</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            What Our Patients Say
          </h2>

          <div className="mt-7 rounded-3xl border border-line bg-surface p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-soft">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.8 3.2-7.8Z" />
                  <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23Z" />
                  <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8L6 14.4Z" />
                  <path fill="#EA4335" d="M12 5.6c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.6 6-4.6Z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Google Reviews</p>
                <p className="text-xs text-muted">Verified patient feedback</p>
              </div>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <p className="text-5xl font-extrabold leading-none text-ink">{site.rating}</p>
              <div className="pb-1">
                <StarRating value={5} />
                <p className="mt-1 text-sm text-muted">
                  Based on{' '}
                  <span className="font-semibold text-ink">
                    {site.reviewCount.toLocaleString('en-IN')}+
                  </span>{' '}
                  reviews
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
              {[
                ['98%', 'Recommend'],
                ['25k+', 'Patients'],
                ['10+', 'Years'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-lg font-extrabold text-brand-700">{value}</p>
                  <p className="text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand-50 to-white p-8 shadow-card sm:p-12">
            <Quote className="h-12 w-12 text-brand-200" />

            <div className="relative mt-4 min-h-[15rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StarRating value={active.rating} className="mb-5" />
                  <p className="text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                    "{active.quote}"
                  </p>
                  <footer className="mt-7 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {active.initials}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{active.name}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-7 bg-brand-600' : 'w-2 bg-brand-200 hover:bg-brand-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous review"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next review"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
