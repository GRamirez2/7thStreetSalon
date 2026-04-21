import { Link } from '@tanstack/react-router'
import { HeroBanner } from '../../heroBanner/HeroBanner'

export function BookPage() {
  return (
    <section className="space-y-6 reveal-up">
      <HeroBanner
        eyebrow="Appointments"
        title="Book your next chair time."
        description="Share your hair goals and timeline. We will confirm your stylist, service sequence, and prep notes within one business day."
        imageSrc="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80"
        imageAlt="Salon guest getting hair styling"
      />

      <article className="card-grid columns-2">
        <div className="content-card">
          <h3 className="m-0 text-[26px] font-[460] leading-[1.1]">Booking details</h3>
          <div className="mt-5 space-y-3">
            {[
              'Full name',
              'Email address',
              'Preferred service',
              'Preferred stylist',
              'Ideal date',
            ].map(
              (label) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm font-semibold">{label}</span>
                  <input
                    className="w-full rounded-lg border border-(--parchment-border) px-3 py-3 text-sm outline-none focus:border-(--charcoal-ink)"
                    placeholder={`Enter ${label.toLowerCase()}`}
                    type="text"
                  />
                </label>
              ),
            )}
          </div>
          <button className="btn-ink mt-5" type="button">
            Submit request
          </button>
        </div>

        <div className="content-card">
          <h3 className="m-0 text-[26px] font-[460] leading-[1.1]">What to expect</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>Consultation call within one business day</li>
            <li>Service and timing confirmation by text or email</li>
            <li>Patch test guidance for first-time color guests when needed</li>
            <li>At-home care plan with product recommendations at checkout</li>
          </ul>
          <Link to="/services" className="btn-link mt-4 inline-block">
            Review full service menu
          </Link>
        </div>
      </article>
    </section>
  )
}