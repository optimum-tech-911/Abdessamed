import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/logo.png'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-rolexGold ${
        isActive
          ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm'
          : 'hover:bg-rolexGold/10'
      }`}
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-rolexGreen/45 border-b border-slate-800">
      <div className="container-max flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={closeMenu}>
          <img src={logo} alt="Cabinet Dentaire logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-bold text-sm sm:text-base truncate">Dr. Abdessadok</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/about">A propos</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/gallery">Galerie</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop calendar CTA */}
          <a
            href="#booking"
            aria-label="Prendre rendez-vous"
            className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-surface hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-rolexGold"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
              <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm12 7H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zM7 12h4v4H7v-4z"/>
            </svg>
          </a>
          {/* Mobile calendar CTA */}
          <a
            href="#booking"
            aria-label="Prendre rendez�?'vous"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-surface hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-rolexGold"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
              <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm12 7H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zM7 12h4v4H7v-4z"/>
            </svg>
          </a>
          {/* Mobile burger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-surface hover:bg-slate-800/60 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span initial={false} animate={{ rotate: open ? 45 : 0, y: open ? 2 : 0 }} className="block h-0.5 w-5 bg-foreground" />
            <motion.span initial={false} animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-5 bg-foreground mt-1.5" />
            <motion.span initial={false} animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-0.5 w-5 bg-foreground mt-1.5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-800 bg-surface/95 backdrop-blur"
          >
            <nav className="container-max py-3 flex flex-col">
              <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `px-3 py-3 rounded-xl transition ${isActive ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm' : 'hover:bg-rolexGold/10'}`}>Accueil</NavLink>
              <NavLink onClick={closeMenu} to="/about" className={({ isActive }) => `px-3 py-3 rounded-xl transition ${isActive ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm' : 'hover:bg-rolexGold/10'}`}>A propos</NavLink>
              <NavLink onClick={closeMenu} to="/services" className={({ isActive }) => `px-3 py-3 rounded-xl transition ${isActive ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm' : 'hover:bg-rolexGold/10'}`}>Services</NavLink>
              <NavLink onClick={closeMenu} to="/gallery" className={({ isActive }) => `px-3 py-3 rounded-xl transition ${isActive ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm' : 'hover:bg-rolexGold/10'}`}>Galerie</NavLink>
              <NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => `px-3 py-3 rounded-xl transition ${isActive ? 'text-rolexGold border border-rolexGold/40 bg-rolexGold/10 backdrop-blur-sm' : 'hover:bg-rolexGold/10'}`}>Contact</NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
