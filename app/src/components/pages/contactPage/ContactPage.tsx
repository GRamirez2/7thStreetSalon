import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

export function ContactPage() {
  return (
    <section className="space-y-6 reveal-up">
      <HeroBanner
        eyebrow="Contact"
        title="Reach the studio quickly."
        description="Questions about availability, prep, or pricing are welcome. Our front desk team answers messages throughout the week."
        imageSrc="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&q=80"
        imageAlt="Salon styling station with mirrors and chairs"
      />

      <article className="card-grid columns-3">
        <div className="content-card">
          <p className="text-(--amethyst-link) text-xs font-semibold tracking-wide">
            Phone
          </p>
          <p className="mt-2 text-[20px] font-[540] leading-tight">(213) 555-0177</p>
          <p className="mt-2 text-sm">Call or text for same-week openings.</p>
        </div>
        <div className="content-card">
          <p className="text-(--amethyst-link) text-xs font-semibold tracking-wide">
            Hours
          </p>
          <p className="mt-2 text-sm">Tue - Fri: 10 AM - 7 PM</p>
          <p className="text-sm">Sat - Sun: 9 AM - 5 PM</p>
        </div>
        <div className="content-card">
          <p className="text-(--amethyst-link) text-xs font-semibold tracking-wide">
            Address
          </p>
          <p className="mt-2 text-sm">721 East 7th Street</p>
          <p className="text-sm">Los Angeles, CA 90021</p>
        </div>
      </article>

      <article className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <div className="content-card overflow-hidden rounded-2xl p-0">
          <div className="aspect-video bg-[linear-gradient(140deg,#ece6ff_0%,#ffffff_52%,#e9e5dd_100%)] p-6">
            <p className="hero-eyebrow">Map preview</p>
            <p className="mt-4 max-w-sm text-sm">
              Replace this block with an embedded map or location image for
              directions and parking guidance.
            </p>
          </div>
        </div>
        <div className="content-card">
          <h3 className="m-0 text-[22px] font-[460] leading-[1.05]">Need to book?</h3>
          <p className="mt-3 text-sm">
            Reserve your service online and include any notes for accessibility,
            timing, or hair history.
          </p>
          <Link to="/book" className="btn-ink mt-4 inline-block">
            Go to booking
          </Link>
        </div>
      </article>
    </section>
  )
}