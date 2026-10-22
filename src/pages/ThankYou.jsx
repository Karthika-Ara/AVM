import Seo from '../components/Seo'
import Container from '../components/Container'
import Button from '../components/Button'
import { CheckCircle2, Home, Phone } from 'lucide-react'

export default function ThankYou() {
  return (
    <>
      <Seo title="Thank You | AVM Smiles" path="/thankyou" />
      <meta name="robots" content="noindex, nofollow" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-900 pt-24">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative text-center">
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 className="h-10 w-10" />
          </span>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Thank you! Your request is received
          </h1>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Our team will call you shortly to confirm your appointment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="white" size="lg" icon={Home} iconRight={false}>
              Back to Home
            </Button>
            <Button to="/contact-us" variant="light" size="lg" icon={Phone} iconRight={false}>
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
