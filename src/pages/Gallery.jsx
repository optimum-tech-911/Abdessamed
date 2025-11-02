import { motion } from 'framer-motion'
import imgA from '../assets/Gemini_Generated_Image_olpkqyolpkqyolpk.png'
import imgB from "../assets/Gemini_Generated_Image_olpkqyolpkqyolpk (2).png"
import imgC from "../assets/Gemini_Generated_Image_olpkqyolpkqyolpk (3).png"
import imgD from '../assets/Gemini_Generated_Image_1nvugv1nvugv1nvu.png'
import imgE from '../assets/Gemini_Generated_Image_3b45m3b45m3b45m3.png'
import imgF from '../assets/Gemini_Generated_Image_h8ew12h8ew12h8ew.png'

const images = [
  { src: imgA, alt: 'Clinic interior' },
  { src: imgB, alt: 'Treatment room' },
  { src: imgC, alt: 'Smile result' },
  { src: imgD, alt: 'Modern equipment' },
  { src: imgE, alt: 'Reception area' },
  { src: imgF, alt: 'Consultation' },
]

export default function Gallery(){
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
          Galerie
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="rounded-2xl border border-slate-800"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
