import { motion } from 'framer-motion'

const services = [
  { title: 'Consultation', price: '€75', desc: 'Bilan bucco‑dentaire complet et recommandations personnalisées.' },
  { title: 'Détartrage', price: '€85', desc: 'Nettoyage professionnel pour des gencives saines.' },
  { title: 'Blanchiment', price: '€220', desc: 'Éclaircissement sûr et efficace, résultat naturel.' },
  { title: 'Implants dentaires', price: 'à partir de €1200', desc: 'Remplacement durable et esthétique des dents manquantes.' },
  { title: 'Orthodontie', price: 'à partir de €1800', desc: 'Aligneurs transparents et solutions sur mesure.' },
  { title: 'Urgences', price: '€60', desc: 'Prise en charge rapide de la douleur et des fractures.' },
]

export default function Services(){
  return (
    <section className="section">
      <div className="container-max">
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Nos services & tarifs
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{s.title}</h3>
                <span className="badge">{s.price}</span>
              </div>
              <p className="text-sm text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
