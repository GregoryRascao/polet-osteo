const consultations = [
  {
    number: "01",
    title: "Adultes",
    href: "/consultations#adultes",
    description:
      "Accompagner les douleurs, tensions et déséquilibres qui peuvent apparaître au quotidien.",
  },
  {
    number: "02",
    title: "Grossesse",
    href: "/consultations#grossesse",
    description:
      "Une approche adaptée aux transformations du corps pendant la grossesse.",
  },
  {
    number: "03",
    title: "Post-partum",
    href: "/consultations#post-partum",
    description:
      "Accompagner le corps dans les changements qui suivent la naissance.",
  },
  {
    number: "04",
    title: "Bébés & enfants",
    href: "/consultations#bebes-et-enfants",
    description:
      "Une prise en charge adaptée aux besoins des plus jeunes, dans un environnement doux et bienveillant.",
  },
];

export default function Consultations() {
  return (
    <section className="section bg-background">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Consultations</span>

          <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
            Des consultations adaptées à vos besoins.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            Chaque personne et chaque situation sont différentes. Les
            consultations sont adaptées à votre âge, votre contexte et
            vos besoins.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-2">
          {consultations.map((consultation) => (
            <a
              key={consultation.number}
              href={consultation.href}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-sage-light sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                  {consultation.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-sage transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mt-8 text-3xl text-sage-dark sm:text-4xl">
                {consultation.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
                {consultation.description}
              </p>

              <span className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark">
                Découvrir
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}