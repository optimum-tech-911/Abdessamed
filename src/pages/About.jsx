import { motion } from 'framer-motion'
import doctorImg from '../assets/dantist.png'

export default function About(){
  return (
    <section className="section">
      <div className="container-max grid md:grid-cols-2 gap-10 items-start">
        <motion.div className="card p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h1 className="text-3xl font-bold mb-4">À propos</h1>
          <p className="text-muted mb-3">Le Dr. Abdessadok accompagne ses patients avec une approche humaine et des technologies de pointe. Soins modernes, transparents et personnalisés.</p>
          <p className="text-muted">De la prévention aux traitements avancés, nous construisons un plan clair et adapté à chaque sourire.</p>
        </motion.div>
        <motion.img src={doctorImg} alt="Lead dentist" className="rounded-2xl shadow-soft" loading="lazy" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
      </div>
    </section>
  )
}
