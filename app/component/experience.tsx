const experiences = [
  {
    period: "2015",
    title: "Diplôme d'ostéopathie",
    description:
      "Diplômée en ostéopathie de l'Université Libre de Bruxelles.",
  },
  {
    period: "2016 — 2017",
    title: "Expérience hospitalière",
    description:
      "Une expérience clinique notamment au sein de l'Hôpital Erasme, en collaboration avec les services de maternité, néonatologie et gynécologie.",
  },
  {
    period: "Depuis 2017",
    title: "Pratique & enseignement",
    description:
      "Une activité en cabinet associée à l'enseignement et à la formation continue.",
  },
];

export default function Experience() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <span className="eyebrow">Mon parcours</span>

            <h2 className="mt-5 max-w-md text-4xl leading-tight text-sage-dark sm:text-5xl">
              Une expérience construite au fil des années.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-muted sm:text-lg">
              Formation, expérience clinique, enseignement et formation
              continue sont au cœur de mon parcours professionnel.
            </p>

            <a
              href="/about"
              className="mt-9 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
            >
              Voir mon parcours complet
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="border-t border-foreground/10">
            {experiences.map((experience) => (
              <article
                key={experience.period}
                className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                  {experience.period}
                </span>

                <div>
                  <h3 className="font-display text-3xl text-sage-dark sm:text-4xl">
                    {experience.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-base">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}