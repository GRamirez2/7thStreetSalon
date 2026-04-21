type PageShellProps = {
  title: string
  description: string
}

export function PageShell({ title, description }: PageShellProps) {
  return (
    <section className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-semibold tracking-tight text-amber-950">{title}</h2>
      <p className="mt-3 max-w-2xl text-amber-800">{description}</p>
    </section>
  )
}