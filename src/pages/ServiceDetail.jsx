import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Phone,
  CalendarDays,
  Quote,
} from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Button from '../components/Button'
import AppointmentForm from '../components/AppointmentForm'
import Accordion from '../components/Accordion'
import StarRating from '../components/StarRating'
import { fadeUp, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import services, { getServiceBySlug } from '../data/services'
import { getServiceContent } from '../data/serviceContent'
import { getTreatmentImage } from '../data/treatmentImages'
import SmartImage from '../components/SmartImage'
import { site } from '../data/site'

/* ----------------------------- section renderers ---------------------------- */

function SectionHeadingBlock({ children }) {
  return (
    <h2 className="scroll-mt-28 text-2xl font-bold text-ink sm:text-[1.7rem]">{children}</h2>
  )
}

function TextBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      {section.paragraphs.map((p) => (
        <p key={p} className="mt-4 leading-relaxed text-muted">
          {p}
        </p>
      ))}
    </div>
  )
}

function ListBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      {section.intro && <p className="mt-4 text-muted">{section.intro}</p>}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-ink"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      {section.outro && <p className="mt-5 leading-relaxed text-muted">{section.outro}</p>}
    </div>
  )
}

function CardsBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      {section.intro && <p className="mt-4 leading-relaxed text-muted">{section.intro}</p>}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {section.items.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
          >
            {item.icon && (
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </span>
            )}
            <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
      {section.outro && <p className="mt-5 leading-relaxed text-muted">{section.outro}</p>}
    </div>
  )
}

function CompareBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      {section.intro && <p className="mt-4 leading-relaxed text-muted">{section.intro}</p>}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {section.columns.map((col) => (
          <div key={col.title} className="rounded-3xl border border-line bg-surface p-6">
            <h3 className="text-lg font-bold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {section.outro && <p className="mt-5 leading-relaxed text-muted">{section.outro}</p>}
    </div>
  )
}

function TableBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      <div className="mt-5 overflow-x-auto rounded-3xl border border-line">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-brand-50">
              {section.columns.map((c) => (
                <th key={c} className="px-5 py-4 font-bold text-ink">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row[0]} className="border-t border-line">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-5 py-4 ${ci === 0 ? 'font-semibold text-ink' : 'text-muted'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.outro && <p className="mt-5 leading-relaxed text-muted">{section.outro}</p>}
    </div>
  )
}

function StepsBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      <ol className="mt-6 space-y-4">
        {section.items.map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <div className="pt-1">
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function TipsBlock({ section }) {
  return (
    <div>
      <SectionHeadingBlock>{section.heading}</SectionHeadingBlock>
      {section.body && <p className="mt-4 leading-relaxed text-muted">{section.body}</p>}
      <div className="mt-5 rounded-3xl border border-brand-100 bg-brand-50/60 p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-700">
          {section.boxLabel || 'Recovery tips'}
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function renderSection(section, idx) {
  const map = {
    text: TextBlock,
    list: ListBlock,
    cards: CardsBlock,
    compare: CompareBlock,
    table: TableBlock,
    steps: StepsBlock,
    tips: TipsBlock,
  }
  const Cmp = map[section.type]
  if (!Cmp) return null
  return (
    <motion.div
      key={idx}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <Cmp section={section} />
    </motion.div>
  )
}

/* --------------------------------- sidebar --------------------------------- */

function Sidebar({ service, facts }) {
  return (
    <div className="lg:sticky lg:top-28 lg:space-y-5">
      {/* Quick facts */}
      {facts && (
        <div className="rounded-3xl border border-line bg-surface p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">At a glance</h3>
          <dl className="mt-4 space-y-3">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-3 text-sm">
                <dt className="text-muted">{f.label}</dt>
                <dd className="font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Booking */}
      <div className="mt-5 rounded-3xl border border-line bg-white p-6 shadow-card lg:mt-0">
        <h3 className="text-lg font-bold text-ink">Book {service.name}</h3>
        <p className="mt-1 text-sm text-muted">
          Request an appointment and our team will confirm shortly.
        </p>
        <div className="mt-5">
          <AppointmentForm className="!border-0 !p-0 !shadow-none" />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 border-t border-line pt-5 text-sm text-muted">
          <Phone className="h-4 w-4 text-brand-500" />
          Prefer to call?
          <a href={site.phoneHref} className="font-semibold text-brand-700">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------- page ---------------------------------- */

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const content = getServiceContent(slug)

  if (!service) {
    return (
      <>
        <Seo title="Service not found | AVM Smiles" path={`/services/${slug}`} />
        <PageHeader
          title="Treatment not found"
          intro="The service you’re looking for doesn’t exist or may have moved."
          crumbs={[{ label: 'Services', to: '/services' }, { label: 'Not found' }]}
        />
        <Section>
          <Button to="/services" variant="primary" icon={ArrowLeft} iconRight={false}>
            Back to all services
          </Button>
        </Section>
      </>
    )
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  /* ----------------------------- rich content ----------------------------- */
  if (content) {
    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }

    return (
      <>
        <Seo
          title={content.seo.title}
          description={content.seo.description}
          keywords={content.seo.keywords}
          path={`/services/${service.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <PageHeader
          eyebrow={service.tagline}
          title={content.hero.h1}
          intro={content.hero.lead}
          crumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]}
        />

        <Section tone="white">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Main column */}
            <div className="lg:col-span-8">
              {/* Intro */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <div className="mb-8 overflow-hidden rounded-3xl shadow-card">
                  <SmartImage
                    src={getTreatmentImage(service.slug)}
                    alt={service.name}
                    loading="eager"
                    className="aspect-[16/9] w-full"
                  />
                </div>
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card">
                  <service.icon className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-3xl font-bold text-ink">{content.intro.heading}</h2>
                {content.intro.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </motion.div>

              {/* Body sections */}
              <div className="mt-12 space-y-12">
                {content.sections.map((s, i) => renderSection(s, i))}
              </div>

              {/* Testimonials */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-14"
              >
                <SectionHeadingBlock>Patient Testimonials</SectionHeadingBlock>
                <motion.div
                  variants={staggerParent(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="mt-6 grid gap-5 sm:grid-cols-2"
                >
                  {content.testimonials.map((t) => (
                    <motion.figure
                      key={t.name}
                      variants={staggerItem}
                      className="flex flex-col rounded-3xl border border-line bg-surface p-6"
                    >
                      <Quote className="h-7 w-7 text-brand-200" />
                      <StarRating value={5} className="mt-3" />
                      <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                          {t.initials}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{t.name}</p>
                        </div>
                      </figcaption>
                    </motion.figure>
                  ))}
                </motion.div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-14"
              >
                <SectionHeadingBlock>Frequently Asked Questions</SectionHeadingBlock>
                <div className="mt-6">
                  <Accordion items={content.faqs} />
                </div>
              </motion.div>

              {/* Closing CTA */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative mt-14 overflow-hidden rounded-[2rem] bg-brand-600 p-8 text-white shadow-card sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl"
                />
                <div className="relative">
                  <h2 className="font-display text-2xl font-medium sm:text-3xl">
                    {content.closing.heading}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {content.closing.body}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Button href={site.phoneHref} variant="white" size="lg" icon={Phone} iconRight={false}>
                      Call {site.phoneDisplay}
                    </Button>
                    <Button to="/contact-us" variant="accent" size="lg" icon={CalendarDays} iconRight={false}>
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <Sidebar service={service} facts={content.facts} />
            </aside>
          </div>
        </Section>

        {/* Related */}
        <RelatedServices related={related} />
      </>
    )
  }

  /* ----------------------------- generic fallback ----------------------------- */
  return (
    <>
      <Seo
        title={`${service.name} | AVM Smiles`}
        description={service.short}
        path={`/services/${service.slug}`}
      />
      <PageHeader
        eyebrow={service.tagline}
        title={service.name}
        intro={service.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card">
              <service.icon className="h-8 w-8" />
            </span>
            <h2 className="mt-6 text-3xl font-bold text-ink">About this treatment</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>

            <h3 className="mt-10 text-xl font-bold text-ink">What’s included</h3>
            <ul className="mt-5 grid gap-3">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-ink"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-brand-50 p-5">
              <Clock className="h-5 w-5 text-brand-600" />
              <p className="text-sm text-ink">
                Typical treatment time: <span className="font-bold">{service.duration}</span>
              </p>
            </div>
          </motion.div>

          <aside className="lg:col-span-5">
            <Sidebar service={service} facts={null} />
          </aside>
        </div>
      </Section>

      <RelatedServices related={related} />
    </>
  )
}

/* ------------------------------ related block ------------------------------ */
function RelatedServices({ related }) {
  return (
    <Section tone="surface">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Related treatments</h2>
        <Link
          to="/services"
          className="hidden items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline sm:inline-flex"
        >
          All services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {related.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group flex flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{s.name}</h3>
            <p className="mt-1.5 flex-1 text-sm text-muted">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
