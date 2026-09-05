import Seo from '../components/Seo'
import {
  Hero,
  TrustBar,
  About,
  Services,
  WhyChoose,
  BeforeAfter,
  Process,
  Reviews,
  Faq,
  FinalCta,
  MapSection,
} from '../sections'
import { pageSeo } from '../data/pageSeo'

export default function Home() {
  return (
    <>
      <Seo {...pageSeo['/']} path="/" />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <BeforeAfter />
      <Process />
      <Reviews />
      <Faq />
      <FinalCta />
      <MapSection />
    </>
  )
}
