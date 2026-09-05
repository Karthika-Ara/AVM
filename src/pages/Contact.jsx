import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import AppointmentForm from '../components/AppointmentForm'
import { WhatsappIcon } from '../components/SocialIcons'
import { MapSection } from '../sections'
import { fadeRight, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { cn } from '../lib/cn'
import { site } from '../data/site'
import { pageSeo } from '../data/pageSeo'

const channels = [
  { icon: Phone, label: 'Call us', value: site.phoneDisplay, href: site.phoneHref },
  { icon: WhatsappIcon, label: 'WhatsApp', value: site.whatsappDisplay, href: site.whatsappHref },
  { icon: Mail, label: 'Email', value: site.email, href: site.emailHref },
  site.addressShort && site.mapLink
    ? { icon: MapPin, label: 'Visit', value: site.addressShort, href: site.mapLink }
    : null,
].filter(Boolean)

export default function Contact() {
  return (
    <>
      <Seo {...pageSeo['/contact-us']} path="/contact-us" />
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch with AVM Smiles"
        intro="Whether you need a routine dental checkup, cosmetic treatment, dental implants, invisible aligners or emergency care, our team is here to help. Contact us today to take the first step toward a healthier, brighter smile."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl font-bold text-ink">Get in touch</h2>
            <p className="mt-3 text-muted">
              Reach out through any channel below. We typically respond within a few
              hours during clinic hours.
            </p>

            <motion.div
              variants={staggerParent(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {channels.map((c, index) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  variants={staggerItem}
                  className={cn(
                    'group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-card',
                    channels.length % 2 !== 0 && index === channels.length - 1 && 'sm:col-span-2'
                  )}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-line transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    {c.label}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{c.value}</p>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-6 rounded-2xl border border-line bg-brand-50/60 p-5">
              <div className="flex items-center gap-2.5 font-semibold text-ink">
                <Clock className="h-5 w-5 text-brand-600" />
                Working Hours
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted">{site.hoursDays}</span>
                <span className="font-semibold text-ink">{site.hoursTime}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{site.hoursNote}</p>
            </div>
          </motion.div>

          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-ink">Book Your Appointment</h2>
            <p className="mt-3 text-muted">
              Our friendly team is ready to answer your questions, discuss treatment
              options and help you achieve optimal oral health.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
        </div>

        {/* Closing note */}
        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted"
        >
          Visit{' '}
          <span className="font-semibold text-ink">AVM Smiles</span>, your trusted
          destination for comprehensive dental health care. We look forward to
          helping you maintain a healthy, confident smile for years to come.
        </motion.p>
      </Section>

      <MapSection />
    </>
  )
}
