import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <meta name="description" content="Cabinet Dentaire Dr. Abdessadok — Un sourire sain, une confiance retrouvée." />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>
      <Navbar />
      <main className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
