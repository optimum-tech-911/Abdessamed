import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Emma L.', quote: 'The gentlest cleaning I have ever had. Beautiful clinic and kind staff!' },
  { name: 'Marc D.', quote: 'They saved my tooth and my smile. 10/10 would recommend.' },
  { name: 'Sofia P.', quote: 'Transparent pricing and top-notch technology. I felt cared for every step.' },
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
          Happy patients
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
    </section>
  )
}

