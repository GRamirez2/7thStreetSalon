import { Link } from '@tanstack/react-router'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-surface reveal-up" aria-label="Salon footer">
      <div className="footer-main-grid">
        <div className="footer-brand-block">
          <h1 className="footer-logo">7TH STREET SALON</h1>
          <p className="footer-intro">
            Book your appointment today and discover why Little Rock trusts us
            with their style. Walk-ins welcome, but reservations are
            recommended.
          </p>

          <Link to="/book" className="btn-cream footer-cta" aria-label="Book your visit online">
            Book Your Visit
          </Link>
          <p className="footer-cta-note">
            Scheduling your appointment online helps you skip the wait. New clients receive 15% off their first service.
          </p>
        </div>

        <div className="footer-details-block">
          <ul className="footer-contact-list" aria-label="Salon contact information">
            <li className="footer-contact-item">
              <LocationIcon />
              <span>814 W 7th St, Little Rock, AR 72201</span>
            </li>
            <li className="footer-contact-item footer-hours-item">
              <ClockIcon />
              <span className="footer-hours">
                <span>Mon-Fri: 9am - 8pm</span>
                <span>Sat: 9am - 6pm</span>
                <span>Sun: 10am - 4pm</span>
              </span>
            </li>
            <li className="footer-contact-item">
              <PhoneIcon />
              <a href="tel:+15015557777" className="footer-contact-link">
                (501) 555-7777
              </a>
            </li>
          </ul>

          <div className="footer-socials" aria-label="Salon social media links">
            <a
              href="https://www.instagram.com/"
              className="footer-icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/"
              className="footer-icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-legal">
        © {currentYear} 7th Street Salon. All rights reserved. Little Rock,
        Arkansas.
      </p>
    </footer>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon">
      <path
        d="M12 21C12 21 5 14.6 5 9.5A7 7 0 1 1 19 9.5C19 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.6V12.2L15 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon">
      <path
        d="M6.7 4.8C6.9 4.3 7.4 4 7.9 4H10C10.6 4 11.1 4.4 11.2 5L11.7 7.7C11.8 8.2 11.6 8.8 11.1 9.1L9.9 9.9C10.7 12 12.4 13.7 14.5 14.5L15.3 13.3C15.6 12.8 16.2 12.6 16.7 12.7L19.4 13.2C20 13.3 20.4 13.8 20.4 14.4V16.5C20.4 17 20.1 17.5 19.6 17.7C18.5 18.2 17.2 18.4 15.9 18.2C10.9 17.5 6.9 13.5 6.2 8.5C6 7.2 6.2 5.9 6.7 4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-social-icon">
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-social-icon">
      <path
        d="M14.8 7.5H16.8V4.2C16.5 4.2 15.5 4.1 14.3 4.1C11.8 4.1 10.1 5.7 10.1 8.5V11.4H7.3V15.1H10.1V19.9H13.5V15.1H16.2L16.6 11.4H13.5V8.9C13.5 7.8 13.8 7.5 14.8 7.5Z"
        fill="currentColor"
      />
    </svg>
  )
}