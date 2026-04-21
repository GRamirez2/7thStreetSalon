import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

const galleryLooks = [
  {
    title: 'Glass brunette',
    imageSrc:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=80',
    imageAlt: 'Dimensional brunette hair color in a salon setting',
  },
  {
    title: 'Lived-in blonde',
    imageSrc:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80',
    imageAlt: 'Blonde hair color service with soft blended highlights',
  },
  {
    title: 'Soft wolf cut',
    imageSrc:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80',
    imageAlt: 'Fresh salon finish on layered color-treated hair',
  },
  {
    title: 'Golden balayage',
    imageSrc:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80',
    imageAlt: 'Golden balayage with soft salon styling',
  },
  {
    title: 'Polished bob',
    imageSrc:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80',
    imageAlt: 'Polished bob haircut with rich salon color',
  },
  {
    title: 'Silk press finish',
    imageSrc:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&q=80',
    imageAlt: 'Smooth salon finish after a color appointment',
  },
] satisfies Array<{
  title: string
  imageSrc: string
  imageAlt: string
}>

export function GalleryPage() {
  return (
    <section className="space-y-6 reveal-up">
      <HeroBanner
        eyebrow="Recent work"
        title="Color stories and shape details."
        description="Recent salon work captured in natural light: precision cuts, dimensional color, and camera-ready finishes."
        imageSrc="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=80"
        imageAlt="Hair stylist trimming hair in salon"
        actions={[{ label: 'Book consultation', to: '/book', variant: 'cream' }]}
      />

      <article className="card-grid columns-3">
        {galleryLooks.map((look, index) => (
          <div
            key={look.title}
            className="content-card flex h-full flex-col overflow-hidden rounded-2xl p-0"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                className="block h-full w-full object-cover"
                src={look.imageSrc}
                alt={look.imageAlt}
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-(--amethyst-link) m-0 text-xs font-semibold tracking-wide">
                LOOK 0{index + 1}
              </p>
              <p className="mt-2 min-h-11 text-sm">{look.title}</p>
            </div>
          </div>
        ))}
      </article>

      <article className="content-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="m-0 text-base">
          Bring inspiration photos to your consultation and we will build your
          personalized roadmap.
        </p>
        <Link to="/book" className="btn-ink">
          Book consultation
        </Link>
      </article>
    </section>
  )
}