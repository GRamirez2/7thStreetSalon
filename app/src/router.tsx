import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { BookPage } from './components/pages/bookPage/BookPage'
import { ContactPage } from './components/pages/contactPage/ContactPage'
import { GalleryPage } from './components/pages/galleryPage/GalleryPage'
import { HomePage } from './components/pages/homePage/HomePage'
import { ServicesPage } from './components/pages/servicesPage/ServicesPage'
import { StylistsPage } from './components/pages/stylistsPage/StylistsPage'
import { RootLayout } from './components/rootLayout/RootLayout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
})

const stylistsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stylists',
  component: StylistsPage,
})

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
})

const bookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/book',
  component: BookPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  stylistsRoute,
  galleryRoute,
  bookRoute,
  contactRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}