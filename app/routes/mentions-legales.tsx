import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Mentions légales — Agathe Polet",
    },
    {
      name: "description",
      content:
        "Mentions légales du site d'Agathe Polet, ostéopathe D.O. à Bruxelles.",
    },
  ];
};

export default function MentionsLegales() {
  return (
    <main>
      <section className="section bg-background">
        <div className="container-content">
          <div className="max-w-3xl">
            <span className="eyebrow">Informations légales</span>

            <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
              Mentions légales
            </h1>

            <div className="mt-12 space-y-10 text-base leading-8 text-muted">
              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Éditeur du site
                </h2>

                <p className="mt-4">
                  Informations à compléter.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Responsable de publication
                </h2>

                <p className="mt-4">
                  Informations à compléter.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Hébergement
                </h2>

                <p className="mt-4">
                  Informations à compléter.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Contact
                </h2>

                <p className="mt-4">
                  Informations à compléter.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}