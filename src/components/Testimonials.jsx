import { motion } from 'framer-motion'
import GoogleReviews from './GoogleReviews'

const testimonials = [
  { name: 'Emma L.', quote: 'Le nettoyage le plus doux que j’aie jamais eu. Clinique magnifique et équipe bienveillante !' },
  { name: 'Marc D.', quote: 'Ils ont sauvé ma dent et mon sourire. 10/10, je recommande.' },
  { name: 'Sofia P.', quote: 'Tarifs transparents et technologie de pointe. Je me suis sentie accompagnée à chaque étape.' },
]

export default function Testimonials(){
  return (
    <section className="section">
      <div className="container-max">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, scale: 1.005 }}
            >
              <p className="italic mb-4">“{t.quote}”</p>
              <div className="text-sm text-muted">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <GoogleReviews />
    </section>
  )
}

