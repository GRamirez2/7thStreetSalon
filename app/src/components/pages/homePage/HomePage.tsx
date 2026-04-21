import { Scissors, Palette, Sparkles, Waves, Gem } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

const services = [
  {
    name: "Cut & Style",
    description: "Precision cuts tailored to your unique features",
    icon: Scissors,
    price: "From $45",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
  },
  {
    name: "Hair Coloring",
    description: "Full color transformation with premium products",
    icon: Palette,
    price: "From $85",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    name: "Highlighting",
    description: "Dimensional color for natural-looking radiance",
    icon: Sparkles,
    price: "From $120",
    image: "https://images.unsplash.com/photo-1774660810744-fd0fbbf99765?w=600&q=80",
  },
  {
    name: "Hair Treatment",
    description: "Deep conditioning and restoration therapies",
    icon: Waves,
    price: "From $55",
    image: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=600&q=80",
  },
  {
    name: "Extensions",
    description: "Seamless length and volume enhancement",
    icon: Gem,
    price: "From $250",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
  },
  {
    name: "Shampoo & Blow Dry",
    description: "Relaxing wash and professional styling",
    icon: Sparkles,
    price: "From $35",
    image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80",
  },
]

const storyImages = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80',
    alt: 'Stylist preparing products at a salon station',
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80',
    alt: 'Hair stylist finishing a client cut',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&q=80',
    alt: 'Salon chair and mirror setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=700&q=80',
    alt: 'Team member styling hair in a bright salon',
  },
]

export function HomePage() {
  return (
    <section className="space-y-6 reveal-up md:pb-24">
      <HeroBanner
        eyebrow="Downtown Arts District"
        title="Quiet luxury hair that lasts between visits."
        description="7th Street Salon specializes in precision cuts and dimensional color for professionals, creatives, and anyone who wants polished, low-maintenance results."
        imageSrc="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80"
        imageAlt="Salon stylist finishing long layered hair"
        actions={[
          { label: 'Reserve your chair', to: '/book', variant: 'cream' },
          { label: 'Explore services', to: '/services', variant: 'link' },
        ]}
      />

      <article className="content-card pt-12 md:mt-12">
        <h3 className="section-title">Crafted for You</h3>
        <p className="section-body">
         From classic cuts to bold transformations, we offer a full range of services for every style and occasion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {services.map(({ name, description, icon: Icon, price, image }) => (
            <div key={name} className="rounded-2xl bg-[#fbfaff] overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-(--amethyst-link)" />
                  <p className="text-(--amethyst-link) text-sm font-semibold">{name}</p>
                </div>
                <p className="mt-1 text-xl font-[540] leading-tight">{price}</p>
                <p className="mt-2 text-sm">{description}</p>
              </div>

                          
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-stone-500">Additional services: Hair Removal • Beard Trim • Scalp Treatment</p>
          <Link to="/services" className="btn-ink">
            View Full Menu
          </Link>
        </div>
      </article>
      <article className="content-card md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center pb-6">
          <div className="grid grid-cols-2 gap-4">
            {storyImages.map(({ src, alt }, index) => (
              <img
                key={src}
                src={src}
                alt={alt}
                className={`w-full aspect-square object-cover rounded-2xl shadow-md ${index % 2 === 0 ? 'lg:-translate-y-3' : 'lg:translate-y-3'}`}
              />
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-(--amethyst-link) font-semibold tracking-wide">Our Story</p>
            <h3 className="section-title">A Legacy of Style in the Heart of Little Rock</h3>
            <p className="section-body">
              Located on the iconic 7th Street, we've been transforming looks and boosting confidence for over 15 years. Our team of passionate stylists combines technical expertise with artistic vision to create looks that are uniquely you.
            </p>
            <p className="section-body">
              We believe everyone deserves to feel amazing. Whether you're here for a quick trim or a complete transformation, we're dedicated to making your experience exceptional from start to finish.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}