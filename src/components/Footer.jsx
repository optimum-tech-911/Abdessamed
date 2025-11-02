import logo from '../assets/logo.png'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-rolexGreen/40 bg-gradient-to-t from-rolexGreen/30 to-rolexGreen/10 backdrop-blur-lg">
      <div className="container-max py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Cabinet Dentaire logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-bold">Cabinet Dentaire Dr. Abdessadok</span>
          </div>
          <p className="text-sm text-muted">« Un sourire sain, une confiance retrouvée. »</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>+33 4 67 00 00 00</li>
            <li>contact@drabdessadok.fr</li>
            <li>RDC, 10 Bd Danièle Casanova, 34200 Sète, France</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Horaires</h4>
          <ul className="space-y-1 text-sm">
            <li>Lundi–Vendredi : 9:00–18:00</li>
            <li>Samedi : 9:00–13:00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rolexGreen/40 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Cabinet Dentaire Dr. Abdessadok. Tous droits réservés.
      </div>
    </footer>
  )
}
