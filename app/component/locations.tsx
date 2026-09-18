const locations = [
  {
    number: "01",
    name: "Etterbeek",
    address: "Avenue des Nerviens 111",
    postalCode: "1040 Etterbeek",
    days: "Vendredi",
  },
  {
    number: "02",
    name: "Forest",
    address: "Avenue Everard 7",
    postalCode: "1190 Forest",
    days: "Lundi · Jeudi",
    place: 'Centre « Naître et Devenir »',
  },
];

const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export default function Locations() {
  return (
    <section className="section bg-background">
      <div className="container-content">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Les cabinets</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Deux lieux pour vous accueillir à Bruxelles.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Les consultations ont lieu sur rendez-vous à Etterbeek et
              Forest.
            </p>
          </div>

          <a
            href="/cabinets"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
          >
            Voir les cabinets
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.number}
              className="group border border-foreground/10 bg-white p-8 transition-colors duration-300 hover:bg-sage-light sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                  {location.number}
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark">
                  {location.days}
                </span>
              </div>

              <h3 className="mt-12 text-4xl text-sage-dark">
                {location.name}
              </h3>

              {location.place && (
                <p className="mt-4 text-sm font-medium text-sage-dark">
                  {location.place}
                </p>
              )}

              <address className="mt-5 not-italic text-base leading-8 text-muted">
                {location.address}
                <br />
                {location.postalCode}
              </address>

              <a
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
              >
                Prendre rendez-vous
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}