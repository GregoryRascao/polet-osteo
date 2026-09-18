import type { MetaFunction } from "@remix-run/node";

const consultations = [
  {
    number: "01",
    title: "Adultes",
    description:
      "Une consultation adaptée aux douleurs, tensions et inconforts pouvant apparaître au quotidien.",
  },
  {
    number: "02",
    title: "Grossesse",
    description:
      "Un accompagnement adapté aux transformations du corps pendant les différentes étapes de la grossesse.",
  },
  {
    number: "03",
    title: "Post-partum",
    description:
      "Une prise en charge qui accompagne les changements du corps après la naissance.",
  },
  {
    number: "04",
    title: "Bébés & enfants",
    description:
      "Une approche adaptée aux besoins des plus jeunes, dans un environnement doux et attentif.",
  },
];

const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Consultations — Agathe Polet, Ostéopathe D.O.",
    },
    {
      name: "description",
      content:
        "Consultations d'ostéopathie pour adultes, femmes enceintes, post-partum, bébés et enfants à Bruxelles.",
    },
  ];
};

export default function Consultations() {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="max-w-xl">
              <span className="eyebrow">Consultations</span>

              <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
                Un accompagnement adapté à chaque étape de la vie.
              </h1>

              <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                Chaque consultation est différente. L&apos;échange, l&apos;examen
                clinique et la prise en charge sont adaptés à votre âge, votre
                situation et vos besoins.
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
                src="/cover1.png"
                alt="Accompagnement en ostéopathie"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types de consultations */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <span className="eyebrow">Pour qui ?</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Quatre types de consultations.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              L&apos;ostéopathie peut accompagner différentes périodes de la
              vie. La consultation est toujours adaptée à la personne reçue.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-2">
            {consultations.map((consultation) => (
              <article
                key={consultation.number}
                id={consultation.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "et")}
                className="bg-background p-8 sm:p-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                  {consultation.number}
                </span>

                <h3 className="mt-8 text-3xl text-sage-dark sm:text-4xl">
                  {consultation.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
                  {consultation.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <span className="eyebrow">Le déroulement</span>

              <h2 className="mt-5 max-w-md text-4xl leading-tight text-sage-dark sm:text-5xl">
                Un temps pour comprendre votre situation.
              </h2>
            </div>

            <div className="max-w-2xl">
              <div className="border-t border-foreground/10">
                <div className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                    01
                  </span>

                  <div>
                    <h3 className="text-3xl text-sage-dark">
                      Échanger
                    </h3>

                    <p className="mt-3 text-base leading-8 text-muted">
                      La consultation commence par un échange permettant de
                      comprendre votre demande, vos symptômes et votre
                      contexte.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                    02
                  </span>

                  <div>
                    <h3 className="text-3xl text-sage-dark">
                      Examiner
                    </h3>

                    <p className="mt-3 text-base leading-8 text-muted">
                      Un examen clinique permet d&apos;observer et d&apos;évaluer
                      les éléments pertinents pour votre prise en charge.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-foreground/10 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                    03
                  </span>

                  <div>
                    <h3 className="text-3xl text-sage-dark">
                      Accompagner
                    </h3>

                    <p className="mt-3 text-base leading-8 text-muted">
                      Le traitement est adapté à la personne, à son âge et à
                      sa situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/remboursement1.png"
                alt="Informations concernant le remboursement des consultations"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <span className="eyebrow">Tarifs &amp; remboursement</span>

              <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
                Les informations pratiques avant votre consultation.
              </h2>

              <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
                Le remboursement éventuel d&apos;une consultation
                d&apos;ostéopathie dépend de votre mutuelle et de votre
                couverture.
              </p>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Pour connaître les conditions qui s&apos;appliquent à votre
                situation, nous vous conseillons de consulter directement
                votre mutuelle.
              </p>

              <div className="mt-8 border-t border-foreground/10 pt-6">
                <p className="text-sm leading-7 text-muted">
                  Les tarifs et modalités pratiques peuvent être précisés
                  lors de la prise de rendez-vous.
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
              Prendre rendez-vous
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Les consultations ont lieu sur rendez-vous dans les cabinets
              d&apos;Etterbeek et de Forest.
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