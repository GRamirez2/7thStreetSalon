import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

const stylists = [
  {
    name: 'Nora Delgado',
    specialty: 'Dimensional blonding + layered movement',
    schedule: 'Tue - Sat',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Brunette stylist smiling in a white shirt',
  },
  {
    name: 'Maya Collins',
    specialty: 'Curl shaping + silk press finishes',
    schedule: 'Wed - Sun',
    imageSrc:
      'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Stylist with short curly hair in a black top',
  },
  {
    name: 'Eli Tran',
    specialty: 'Brunette glossing + precision bobs',
    schedule: 'Mon - Fri',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Smiling stylist in an orange and black top',
  },
]

export function StylistsPage() {
  return (
    <section className="space-y-6 reveal-up">
      <HeroBanner
        eyebrow="Our artists"
        title="Meet the styling team."
        description="Our stylists blend strong technical foundations with modern finish work. Book by specialty or request a match from the front desk."
        imageSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80"
        imageAlt="Stylist creating a polished blowout"
        actions={[{ label: 'Request a match', to: '/contact', variant: 'cream' }]}
      />

      <article className="card-grid columns-3">
        {stylists.map(({ name, specialty, schedule, imageSrc, imageAlt }) => (
          <div key={name} className="content-card rounded-2xl">
            <div className="h-40 overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-[22px] font-[460] leading-[0.96] tracking-[-0.02em]">
              {name}
            </h3>
            <p className="mt-3 text-sm">{specialty}</p>
            <p className="text-(--amethyst-link) mt-2 text-sm font-semibold">
              {schedule}
            </p>
          </div>
        ))}
      </article>

      <article className="content-card flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="m-0 max-w-3xl text-base">
          Need help choosing a stylist? Tell us your hair goals and preferred
          maintenance level.
        </p>
        <Link to="/contact" className="btn-ink">
          Request a match
        </Link>
      </article>
    </section>
  )
}