import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import { site, social } from '../data/site'
import services from '../data/services'
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  WhatsappIcon,
} from './SocialIcons'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Smile Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact-us' },
]

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
}

function ColTitle({ children }) {
  return (
    <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white/55">
      {children}
    </h3>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-600/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]"
      />

      <Container className="relative">
        {/* Top band */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Brand blurb */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              AVM Smiles is dedicated to providing exceptional dental care with
              advanced treatments, expert dentists and personalized care for every
              smile.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {social.map((s) => {
                const Icon = socialIconMap[s.key]
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <ColTitle>Quick Links</ColTitle>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <ColTitle>Services</ColTitle>
            <ul className="columns-1 gap-x-6 sm:columns-2">
              {services.map((s) => (
                <li key={s.slug} className="mb-3 break-inside-avoid">
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-block text-sm leading-snug text-white/70 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div className="lg:col-span-3">
            <ColTitle>Contact</ColTitle>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href={site.phoneHref} className="group flex items-start gap-3 hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 hover:text-white"
                >
                  <WhatsappIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>WhatsApp {site.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="group flex items-start gap-3 hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{site.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock className="h-4 w-4 text-accent-400" />
                Clinic Hours
              </div>
              <p className="mt-2 text-sm text-white/70">
                {site.hoursDays}
                <br />
                <span className="font-medium text-white/90">{site.hoursTime}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {2026} AVM Smiles. All rights reserved.</p>
          <a
            href="https://discovertechnologies.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Crafted by ARA Discover Technologies
          </a>
        </div>
      </Container>
    </footer>
  )
}
