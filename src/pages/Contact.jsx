export default function Contact(){
  return (
    <section className="section">
      <div className="container-max grid md:grid-cols-2 gap-10">
        <form className="card p-6 space-y-4">
          <h1 className="text-3xl font-bold">Contact</h1>
          <input className="w-full rounded-xl bg-surface border border-slate-700 px-4 py-3" placeholder="Nom" />
          <input type="email" className="w-full rounded-xl bg-surface border border-slate-700 px-4 py-3" placeholder="Email" />
          <input className="w-full rounded-xl bg-surface border border-slate-700 px-4 py-3" placeholder="Téléphone" />
          <textarea className="w-full rounded-xl bg-surface border border-slate-700 px-4 py-3 h-32" placeholder="Message"></textarea>
          <button type="button" className="btn-primary">Envoyer</button>
        </form>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-3">Nous trouver</h2>
          <p className="text-muted mb-4">RDC, 10 Bd Danièle Casanova, 34200 Sète, France</p>
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800">
            <iframe
              title="Carte"
              src="https://maps.google.com/maps?q=RDC%2C%2010%20Bd%20Dani%C3%A8le%20Casanova%2C%2034200%20S%C3%A8te&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
