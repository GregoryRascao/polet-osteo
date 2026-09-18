const experiences = [
  {
    period: "2015",
    title: "Diplôme d'ostéopathie",
    description:
      "Diplômée en ostéopathie de l'Université Libre de Bruxelles.",
  },
  {
    period: "Parcours clinique",
    title: "Expérience hospitalière",
    description:
      "Une expérience clinique notamment développée au sein de l'Hôpital Erasme.",
  },
  {
    period: "Spécialisation",
    title: "Ostéopathie pédiatrique",
    description:
      "Une formation continue avec une attention particulière portée à la prise en charge des bébés et des enfants.",
  },
  {
    period: "Aujourd'hui",
    title: "Pratique et enseignement",
    description:
      "Une pratique en cabinet accompagnée d'une activité d'enseignement et de formation continue.",
  },
];

export default function ExperienceFull() {
  return (
    <section className="section bg-background">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Mon parcours</span>

          <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
            Une pratique construite au fil des années.
          </h2>

          <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
            Mon parcours associe formation, expérience clinique,
            spécialisation et transmission.
          </p>
        </div>

        <div className="mt-14 border-t border-foreground/10">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[150px_1fr] sm:gap-8"
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
    </section>
  );
}