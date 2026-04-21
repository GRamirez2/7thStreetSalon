import { Link } from '@tanstack/react-router'

type HeroAction = {
  label: string
  to: string
  variant?: 'cream' | 'ink' | 'link'
}

type HeroBannerProps = {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  actions?: HeroAction[]
}

export function HeroBanner({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  actions = [],
}: HeroBannerProps) {
  return (
    <article className="hero-block">
      <div className="hero-layout">
        <div>
          <p className="hero-eyebrow">{eyebrow}</p>
          <h2 className="hero-title">{title}</h2>
          <p className="hero-copy">{description}</p>

          {actions.length > 0 ? (
            <div className="hero-actions">
              {actions.map((action) => (
                <Link
                  key={`${action.to}-${action.label}`}
                  to={action.to}
                  className={
                    action.variant === 'ink'
                      ? 'btn-ink'
                      : action.variant === 'link'
                        ? 'btn-link'
                        : 'btn-cream'
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="hero-media-wrap">
          <img className="hero-media" src={imageSrc} alt={imageAlt} loading="lazy" />
        </div>
      </div>
    </article>
  )
}