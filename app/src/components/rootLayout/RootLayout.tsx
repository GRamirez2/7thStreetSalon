import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Footer } from '../footer/Footer'
import { NavBar } from '../navBar/NavBar'

export function RootLayout() {
  return (
    <div className="app-shell">
      <header className="nav-surface px-4 py-3 sm:px-6 sm:py-4">
        <NavBar />
      </header>

      <main className="page-stack">
        <Outlet />
      </main>

      <Footer />

      {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
    </div>
  )
}