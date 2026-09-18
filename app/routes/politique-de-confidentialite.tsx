import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Politique de confidentialité — Agathe Polet",
    },
    {
      name: "description",
      content:
        "Politique de confidentialité du site d'Agathe Polet, ostéopathe D.O. à Bruxelles.",
    },
  ];
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main>
      <section className="section bg-background">
        <div className="container-content">
          <div className="max-w-3xl">
            <span className="eyebrow">Vie privée</span>

            <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
              Politique de confidentialité
            </h1>

            <div className="mt-12 space-y-10 text-base leading-8 text-muted">
              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Introduction
                </h2>

                <p className="mt-4">
                  Cette page présente les informations relatives au
                  traitement des données personnelles effectué dans le
                  cadre de ce site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Données collectées
                </h2>

                <p className="mt-4">
                  Informations à compléter en fonction des services et
                  outils réellement utilisés sur le site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Cookies
                </h2>

                <p className="mt-4">
                  Informations à compléter après vérification des cookies,
                  outils de mesure d&apos;audience et services tiers utilisés
                  par le site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-sage-dark">
                  Vos droits
                </h2>

                <p className="mt-4">
                  Les informations relatives aux droits des personnes et à
                  leur exercice seront précisées ici.
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