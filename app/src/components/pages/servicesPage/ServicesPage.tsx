import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

const services = [
  {
    name: 'Precision haircut',
    price: '$95',
    timing: '75 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
    imageAlt: 'Precision haircut service in progress',
  },
  {
    name: 'Partial highlights',
    price: '$170',
    timing: '120 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
    imageAlt: 'Partial highlights color service',
  },
  {
    name: 'Full balayage',
    price: '$240',
    timing: '180 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1774660810744-fd0fbbf99765?w=400&q=80',
    imageAlt: 'Balayage color blend on long hair',
  },
  {
    name: 'Root refresh + gloss',
    price: '$135',
    timing: '90 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
    imageAlt: 'Root touch-up and gloss appointment',
  },
  {
    name: 'Silk press + finish',
    price: '$85',
    timing: '60 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=80',
    imageAlt: 'Silk press styling finish',
  },
  {
    name: 'Repair treatment',
    price: '$65',
    timing: '45 minutes',
    imageSrc:
      'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=400&q=80',
    imageAlt: 'Deep repair hair treatment service',
  },
]

export function ServicesPage() {
  return (
    <section className="space-y-6 reveal-up">
      <HeroBanner
        eyebrow="Service menu"
        title="Crafted services, clear timing."
        description="Transparent pricing with intentional pacing. Every service includes a consultation and a realistic maintenance roadmap."
        imageSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80"
        imageAlt="Close-up of salon color treatment"
        actions={[{ label: 'Start booking', to: '/book', variant: 'cream' }]}
      />

      <article className="card-grid columns-2">
        {services.map(({ name, price, timing, imageSrc, imageAlt }) => (
          <div
            key={name}
            className="content-card flex items-center gap-4 rounded-2xl"
          >
            <div className="min-w-0 flex-1">
              <h3 className="m-0 text-[22px] font-[460] leading-[1.05]">{name}</h3>
              <p className="text-(--amethyst-link) mt-3 text-sm">{timing}</p>
              <p className="mt-2 text-base">{price}</p>
            </div>

            <img
              src={imageSrc}
              alt={imageAlt}
              className="ml-auto h-24 w-24 shrink-0 rounded-2xl object-cover"
            />
          </div>
        ))}
      </article>

      <article className="content-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="m-0 max-w-3xl text-base">
          Not sure what to book? Reserve a new guest session and we will map the
          right cut, color, and treatment sequence for your goals.
        </p>
        <Link to="/book" className="btn-ink">
          Start booking
        </Link>
      </article>
    </section>
  )
}