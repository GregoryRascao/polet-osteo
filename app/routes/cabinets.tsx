import type { MetaFunction } from "@remix-run/node";

const locations = [
  {
    name: "Etterbeek",
    address: "Avenue des Nerviens 111",
    postalCode: "1040 Etterbeek",
    days: "Vendredi",
  },
  {
    name: "Forest",
    address: "Avenue Everard 7",
    postalCode: "1190 Forest",
    days: "Lundi · Mercredi · Jeudi",
    place: 'Centre « Naître et Devenir »',
  },
];

const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Cabinets — Agathe Polet, Ostéopathe D.O. à Bruxelles",
    },
    {
      name: "description",
      content:
        "Retrouvez les cabinets d'Agathe Polet à Etterbeek et Forest, leurs adresses et les informations pratiques pour votre consultation.",
    },
  ];
};

export default function Cabinets() {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="max-w-xl">
              <span className="eyebrow">Les cabinets</span>

              <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
                Deux cabinets à Bruxelles.
              </h1>

              <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                Les consultations ont lieu à Etterbeek et à Forest, sur
                rendez-vous.
              </p>

              <a
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded bg-sage-dark px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-sage"
              >
                Prendre rendez-vous
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/cabinets.png"
                alt="Cabinet d'ostéopathie"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabinets */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <span className="eyebrow">Où me trouver</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Choisissez le cabinet qui vous convient.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Les consultations sont proposées certains jours dans chacun des
              deux cabinets.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {locations.map((location, index) => (
              <article
                key={location.name}
                className="border border-foreground/10 bg-background p-8 sm:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                    {String(index + 1).padStart(2, "0")}
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

                <address className="mt-6 not-italic text-base leading-8 text-muted">
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
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Préparer sa consultation */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/desk.jpg"
                alt="Espace de travail et informations pratiques"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <span className="eyebrow">Informations pratiques</span>

              <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
                Préparer votre consultation.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Les consultations se font uniquement sur rendez-vous.
                </p>

                <p>
                  Lors de votre rendez-vous, pensez à prévoir les informations
                  utiles concernant votre situation ainsi que, si nécessaire,
                  vos examens ou documents médicaux récents.
                </p>

                <p>
                  Pour toute question concernant votre consultation, vous
                  pouvez prendre contact avant votre rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-dark py-20 text-white sm:py-24">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
              Rendez-vous
            </span>

            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              À bientôt au cabinet.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Choisissez votre cabinet et prenez rendez-vous en ligne.
            </p>

            <a
              href={appointmentUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark transition-colors duration-200 hover:bg-sage-light"
            >
              Prendre rendez-vous
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}