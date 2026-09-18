const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export default function AppointmentCTA() {
  return (
    <section className="bg-sage-dark py-20 text-white sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
            Rendez-vous
          </span>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Prenons le temps de vous écouter.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            Les consultations ont lieu sur rendez-vous à Etterbeek et Forest.
            Choisissez le créneau qui vous convient directement en ligne.
          </p>

          <a
            href={appointmentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark transition-colors duration-200 hover:bg-sage-light"
          >
            Prendre rendez-vous
            <span
              aria-hidden="true"
              className="transition-transform duration-200 hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}