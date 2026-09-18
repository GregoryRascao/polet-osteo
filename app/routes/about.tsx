import type { MetaFunction } from "@remix-run/node";

import Approach from "../component/approach";

export const meta: MetaFunction = () => {
  return [
    {
      title: "À propos — Agathe Polet, Ostéopathe D.O.",
    },
    {
      name: "description",
      content:
        "Découvrez le parcours, les formations et l'approche d'Agathe Polet, ostéopathe D.O. à Bruxelles.",
    },
  ];
};

export default function About() {
  return (
    <main>
      {/* Introduction */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 max-w-xl md:order-1">
              <span className="eyebrow">À propos de moi</span>

              <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
                Agathe Polet, ostéopathe D.O.
              </h1>

              <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                Diplômée en ostéopathie de l&apos;Université Libre de
                Bruxelles en 2015, j&apos;ai suivi une formation de six
                années à temps plein, avec notamment des enseignements
                en sémiologie, orthopédie, neurologie et pédiatrie.
              </p>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                J&apos;ai ensuite poursuivi ma formation avec une attention
                particulière portée à l&apos;ostéopathie pédiatrique,
                ainsi qu&apos;à l&apos;accompagnement de la grossesse et
                du post-partum.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/agathe2.jpg"
                  alt="Agathe Polet, ostéopathe D.O."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <span className="eyebrow">Mon parcours</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Une pratique construite entre clinique, enseignement et
              formation continue.
            </h2>
          </div>

          <div className="mt-14 border-t border-foreground/10">
            <article className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[170px_1fr] sm:gap-8">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                2015
              </span>

              <div>
                <h3 className="font-display text-3xl text-sage-dark sm:text-4xl">
                  Diplôme d&apos;ostéopathie
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Diplômée en ostéopathie de l&apos;Université Libre de
                  Bruxelles.
                </p>
              </div>
            </article>

            <article className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[170px_1fr] sm:gap-8">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                2016 — 2017
              </span>

              <div>
                <h3 className="font-display text-3xl text-sage-dark sm:text-4xl">
                  Hôpital Erasme
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Remplacement comme ostéopathe à l&apos;Hôpital Erasme,
                  avec une collaboration notamment avec la maternité,
                  la néonatologie et la gynécologie.
                </p>
              </div>
            </article>

            <article className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[170px_1fr] sm:gap-8">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                Depuis 2017
              </span>

              <div>
                <h3 className="font-display text-3xl text-sage-dark sm:text-4xl">
                  Enseignement à l&apos;ULB
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Assistante chargée d&apos;exercices à l&apos;Université
                  Libre de Bruxelles, au sein de la Faculté des Sciences
                  de la Motricité et de l&apos;Unité de Recherche en
                  Ostéopathie.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Activité notamment consacrée aux techniques de
                  mobilisations abdominales et à la promotion de mémoires.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Formation continue */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <span className="eyebrow">Formation continue</span>

              <h2 className="mt-5 max-w-md text-4xl leading-tight text-sage-dark sm:text-5xl">
                Continuer à apprendre pour faire évoluer sa pratique.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-muted">
                La formation continue occupe une place importante dans mon
                parcours, notamment autour de la pédiatrie, de la grossesse
                et de différentes problématiques cliniques.
              </p>
            </div>

            <div className="border-t border-foreground/10">
              {[
                {
                  year: "2015",
                  title: "Ostéopathie pédiatrique",
                  description:
                    "Modules 1 et 2 auprès de Marie Caroline Willième, D.O.",
                },
                {
                  year: "2017 — 2018",
                  title: "Ostéopathie pédiatrique",
                  description:
                    "Modules 1 et 2 auprès de Grégory Dermience, Pierre-Michel Dugailly, Sung Forment et Laura Maroye.",
                },
                {
                  year: "2019",
                  title: "Grossesse, accouchement et post-partum",
                  description:
                    "Formation auprès de Bernard Ferru, D.O.",
                },
                {
                  year: "2020",
                  title: "Freins restrictifs buccaux",
                  description:
                    "Formation consacrée aux freins restrictifs buccaux au-delà de l'allaitement.",
                },
                {
                  year: "2021",
                  title: "Sphère ORL",
                  description:
                    "Approche ostéopathique des problématiques de la sphère ORL.",
                },
                {
                  year: "2026",
                  title: "Examen clinique en pédiatrie",
                  description:
                    "Formation consacrée à la pratique de l'examen clinique en pédiatrie.",
                },
              ].map((formation) => (
                <article
                  key={`${formation.year}-${formation.title}`}
                  className="grid gap-4 border-b border-foreground/10 py-7 sm:grid-cols-[150px_1fr] sm:gap-8"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                    {formation.year}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl text-sage-dark sm:text-3xl">
                      {formation.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                      {formation.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Publication</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Une activité également tournée vers la recherche.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              « Etude de l&apos;influence d&apos;un traitement ostéopathique
              général et d&apos;une mobilisation loco-régionale dite de
              &quot;Locking Manuel&quot; sur la rigidité lombaire. »
            </p>

            <p className="mt-5 text-sm leading-7 text-muted">
              Polet, A., Salem, W., Lepers, Y., Dugailly, P.M. —{" "}
              <em>Mains libres</em>, n°4, 129-136, 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Approche */}
      <Approach />
    </main>
  );
}