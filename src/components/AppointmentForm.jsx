import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Phone, CalendarDays, Stethoscope, ChevronDown, Check, Send } from 'lucide-react'
import Button from './Button'
import services from '../data/services'

const FIELD =
  'h-12 w-full rounded-xl border border-line bg-white px-11 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'

const ENDPOINT = 'https://avmsmilesdental.com/api/email.php'

const OPTIONS = [...services.map((s) => s.name), 'General Consultation']

/** Custom listbox replacing the native <select>, styled to match the other fields. */
function TreatmentSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const toggle = () => {
    setActive(Math.max(OPTIONS.indexOf(value), 0))
    setOpen((o) => !o)
  }

  const pick = (opt) => {
    onChange(opt)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') return setOpen(false)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) return toggle()
      const step = e.key === 'ArrowDown' ? 1 : -1
      setActive((i) => (i + step + OPTIONS.length) % OPTIONS.length)
    } else if ((e.key === 'Enter' || e.key === ' ') && open) {
      e.preventDefault()
      pick(OPTIONS[active])
    }
  }

  return (
    <div ref={ref} className="relative" onKeyDown={onKeyDown}>
      <Stethoscope className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted" />
      {/* Hidden input so the browser's native "required" validation still applies. */}
      <input
        tabIndex={-1}
        required
        value={value}
        onChange={() => {}}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Treatment required"
        className={`${FIELD} flex items-center pr-10 text-left ${value ? 'text-ink' : 'text-muted/70'}`}
      >
        <span className="truncate">{value || 'Treatment required'}</span>
      </button>
      <ChevronDown
        className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
      />
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-60 overflow-auto rounded-xl border border-line bg-white p-1.5 shadow-card"
        >
          {OPTIONS.map((opt, i) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(opt)}
              className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                i === active ? 'bg-brand-50 text-brand-700' : 'text-ink'
              } ${opt === value ? 'font-semibold' : ''}`}
            >
              {opt}
              {opt === value && <Check className="h-4 w-4 text-brand-600" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * Appointment request form. Submits to the PHP endpoint, which emails the
 * clinic and appends the booking to a Google Sheet.
 */
export default function AppointmentForm({ className }) {
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', date: '', treatment: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Website Form' }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Submission failed')
      navigate('/thankyou')
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8 ${className}`}
    >
      <div className="space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update('name')}
            className={FIELD}
            aria-label="Your name"
          />
        </div>

        <div className="relative">
          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="tel"
            required
            placeholder="Phone number"
            value={form.phone}
            onChange={update('phone')}
            className={FIELD}
            aria-label="Phone number"
          />
        </div>

        <div className="relative">
          <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="date"
            required
            value={form.date}
            onChange={update('date')}
            className={`${FIELD} !pl-4 !pr-11 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0`}
            aria-label="Preferred date"
          />
        </div>

        <TreatmentSelect
          value={form.treatment}
          onChange={(treatment) => setForm((f) => ({ ...f, treatment }))}
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 text-center text-sm text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        icon={Send}
        disabled={sending}
        className="mt-6 w-full disabled:opacity-70"
      >
        {sending ? 'Sending…' : 'Book Appointment'}
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  )
}
