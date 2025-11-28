import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import doctorImg from '../assets/dantist.png'

export default function About(){
  const [openIndex, setOpenIndex] = useState(null)
  const faqData = [
    {
      question: "Quelle est l'adresse du Dr Abdessamed ABDESSADOK ?",
      answer: "L'adresse du cabinet est : 10 Boulevard Danièle Casanova, 34200 Sète. Le cabinet est situé au Rez-de-chaussée."
    },
    {
      question: "Quels sont les horaires d'ouverture ?",
      answer: (
        <ul className="list-none space-y-1">
          <li><strong>Lundi :</strong> 08h00 - 12h00, 14h00 - 17h00</li>
          <li><strong>Mardi :</strong> 08h00 - 12h00, 14h00 - 17h00</li>
          <li><strong>Mercredi :</strong> 08h00 - 12h00</li>
          <li><strong>Jeudi :</strong> 08h00 - 12h00, 14h00 - 17h00</li>
          <li><strong>Vendredi :</strong> 08h00 - 12h00, 14h00 - 17h00</li>
        </ul>
      )
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Le Dr Abdessamed ABDESSADOK accepte les moyens de paiements suivants : Chèques, espèces et carte bancaire."
    },
    {
      question: "Est-ce que le cabinet accepte la carte Vitale ?",
      answer: "Oui, le Dr Abdessamed ABDESSADOK accepte la carte Vitale."
    },
    {
      question: "Le cabinet accepte-t-il les nouveaux patients ?",
      answer: "Oui, le cabinet accueille les nouveaux patients pour tous types de soins (Consultations, Urgences, Implantologie, Invisalign)."
    }
  ]
  return (
    <section className="section">
      <div className="container-max space-y-10">
        <motion.div
          className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Dr. Abdessamed Abdessadok</h1>
            <div className="text-primary font-semibold mb-4">Chirurgien‑Dentiste à Sète</div>
            <p className="text-muted mb-6">Une approche humaine alliée à des technologies de pointe. Nous construisons des plans de traitement clairs, transparents et adaptés à votre sourire.</p>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Implantologie</span>
              <span className="badge">Invisalign</span>
              <span className="badge">Orthodontie invisible</span>
              <span className="badge">Facettes dentaires</span>
              <span className="badge">Blanchiment</span>
              <span className="badge">Prothèses</span>
              <span className="badge">Urgences dentaires</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="https://www.doctolib.fr/dentiste/sete/abdessamed-abdessadok-levallois-perret" target="_blank" rel="noopener" className="btn-primary">Prendre rendez‑vous sur Doctolib</a>
              <a href={import.meta.env.VITE_GOOGLE_MAPS_LINK || 'https://maps.app.goo.gl/UALfaQYvaAV5otoq9'} target="_blank" rel="noopener" className="btn-outline">Voir sur Maps</a>
            </div>
          </div>
          <motion.img
            src={doctorImg}
            alt="Chirurgien‑dentiste"
            className="rounded-2xl shadow-soft w-full h-auto object-cover"
            loading="lazy"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2l5 3v4c0 4.97-3.05 9.16-5 10-1.95-.84-5-5.03-5-10V5l5-3z"/></svg>
              <h3 className="font-semibold">Parcours & Certifications</h3>
            </div>
            <div className="space-y-4 max-h-72 overflow-auto pr-2">
              <div className="flex items-start gap-3">
                <div className="text-rolexGold font-semibold">2021</div>
                <div className="text-sm text-muted">D.U. Implantologie, Chirurgie et Réhabilitation Orale (Univ. Montpellier‑Nîmes)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-rolexGold font-semibold">2019</div>
                <div className="text-sm text-muted">A.E.U. Imagerie 3D (UFR Nice)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-rolexGold font-semibold">2015</div>
                <div className="text-sm text-muted">Docteur en Chirurgie Dentaire (UFR Toulouse)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-rolexGold font-semibold">2022</div>
                <div className="text-sm text-muted flex items-center gap-2">Aptitude à l’utilisation du MEOPA <span className="badge">MEOPA</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M6 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11H6V7zm-2 13h16v2H4v-2z"/></svg>
                <div className="text-sm text-foreground">Depuis 2018 : Installation au Cabinet de Sète</div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-4 11h8v2H8v-2z"/></svg>
                <div className="text-sm text-foreground">Adhérent de l’UFSBD (Union Française pour la Santé Bucco‑Dentaire)</div>
              </div>
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              <h3 className="font-semibold">Localisation & Accès</h3>
            </div>
            <div className="text-sm text-muted">10 Boulevard Danièle Casanova, 34200 Sète</div>
            <div className="text-xs text-foreground mt-2">Rez‑de‑chaussée (Accès PMR / Handicapé)</div>
          </motion.div>

            <motion.div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 8a1 1 0 0 1 1 1v3.27l2.4 1.39a1 1 0 1 1-1 1.73l-3.4-1.97A1 1 0 0 1 10.5 12V9a1 1 0 0 1 1-1z"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/></svg>
              <h3 className="font-semibold">Horaires d’ouverture</h3>
            </div>
            <div className="text-sm text-muted space-y-1">
              <div>Lundi – Vendredi : 09:00 – 18:00</div>
              <div>Samedi : 09:00 – 13:00</div>
            </div>
          </motion.div>

          <motion.div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 0h14v2H5V6zm0 4h8v2H5v-2zm0 4h6v2H5v-2z"/></svg>
              <h3 className="font-semibold">Paiement & Remboursement</h3>
            </div>
            <div className="text-sm text-muted">Carte Vitale acceptée</div>
            <div className="text-sm text-muted">Carte bancaire, chèques, espèces</div>
          </motion.div>

            </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6">
          <h2 className="text-2xl font-bold mb-4">Expertises & Compétences</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Implantologie</span>
            <span className="badge">Invisalign</span>
            <span className="badge">Orthodontie invisible</span>
            <span className="badge">Facettes dentaires</span>
            <span className="badge">Blanchiment</span>
            <span className="badge">Prothèses</span>
            <span className="badge">Urgences dentaires</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-surface/60 backdrop-blur shadow-soft p-6">
          <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqData.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-700 bg-slate-800/50">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left px-4 py-4"
                >
                  <span className="font-medium">{item.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`text-muted transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  >
                    <path d="M12 15.5l-5-5 1.4-1.4L12 12.7l3.6-3.6 1.4 1.4-5 5z"/>
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 pb-4 text-sm text-muted"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
