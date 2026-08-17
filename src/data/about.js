import {
  HeartHandshake,
  Cpu,
  GraduationCap,
  ShieldCheck,
  IndianRupee,
  Sparkles,
} from 'lucide-react'

/** Bento tiles for the About section. */
export const aboutTiles = [
  {
    icon: HeartHandshake,
    title: 'Patient Care Philosophy',
    desc: 'Honest advice, gentle treatment and care built entirely around you — every single visit.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    desc: 'Digital scanning, 3D imaging and CAD/CAM precision.',
  },
  {
    icon: GraduationCap,
    title: 'Experienced Specialists',
    desc: 'A multidisciplinary team of dental experts.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Standards',
    desc: 'Hospital-grade sterilisation at every step.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Treatments',
    desc: 'Transparent pricing with flexible options.',
  },
  {
    icon: Sparkles,
    title: 'Smile Makeovers',
    desc: 'Cosmetic transformations designed digitally.',
  },
]

/** Long-form story + mission/vision for the About page. */
export const aboutStory = {
  eyebrow: 'Who We Are',
  heading: 'Committed to outstanding dental care',
  paragraphs: [
    'At AVM Smiles, we are committed to providing outstanding dental care by combining clinical expertise, state-of-the-art technology and empathetic patient service. We offer complete dental treatments tailored to every individual patient.',
    'Our highly qualified team of dentists is dedicated to delivering quality care under one roof — specialising in preventive, restorative, cosmetic and advanced dental procedures. From routine check-ups and teeth cleaning to dental implants, invisible aligners, smile makeovers and full-mouth rehabilitation, our focus is helping patients achieve healthy, confident smiles.',
  ],
  mission:
    'Our mission is to deliver accessible, patient-centered dental care that integrates advanced treatment solutions with the highest standards of clinical excellence. We are dedicated to enhancing oral health, improving smiles and building long-term relationships through trust, transparency and compassionate care.',
  vision:
    'Our vision is to be recognised as one of the leading dental healthcare providers, known for excellence in dentistry, innovation in treatment and outstanding patient experiences. We aim to empower every patient with healthy smiles that contribute to overall well-being and quality of life.',
}

export default aboutTiles
