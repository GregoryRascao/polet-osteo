import type { MetaFunction } from "@remix-run/node";

const adultReasons = [
  "Douleurs de la colonne vertébrale : lombalgie, cervicalgie, torticolis, dorsalgie...",
  "Douleurs du système nerveux : sciatalgie, cruralgie, névralgie cervico-brachiale, névralgie intercostale...",
  "Troubles de l'articulation temporo-mandibulaire (ATM) et de la mastication.",
  "Douleurs des membres supérieurs et inférieurs, ainsi que de la région fessière.",
  "Migraines et céphalées de tension.",
  "Douleurs abdominales.",
];

const pediatricReasons = [
  "Torticolis et positionnement préférentiel de la tête.",
  "Déformation du crâne.",
  "Coliques, constipation et reflux gastro-œsophagien.",
  "Difficultés lors de l'allaitement, avec ou sans troubles de succion-déglutition.",
  "Otites récurrentes et obstruction du canal lacrymal.",
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Ostéopathie — Agathe Polet, Ostéopathe D.O. à Bruxelles",
    },
    {
      name: "description",
      content:
        "Découvrez l'approche de l'ostéopathie et les principaux motifs de consultation pris en charge par Agathe Polet, ostéopathe D.O. à Bruxelles.",
    },
  ];
};

export default function Osteopathie() {
  return (
    <main>
      {/* Introduction */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="max-w-xl">
              <span className="eyebrow">L&apos;ostéopathie</span>

              <h1 className="mt-5 text-5xl leading-tight text-sage-dark sm:text-6xl">
                Une approche manuelle du corps dans sa globalité.
              </h1>

              <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                L&apos;ostéopathie s&apos;intéresse principalement aux
                problématiques fonctionnelles de l&apos;appareil
                musculo-squelettique et à leurs interactions avec les autres
                systèmes du corps.
              </p>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                La consultation commence par un échange et un examen
                permettant d&apos;adapter la prise en charge à chaque
                personne.
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/osteo.png"
                alt="Illustration anatomique représentant la colonne vertébrale"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* L'approche */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <span className="eyebrow">Une consultation</span>

              <h2 className="mt-5 max-w-md text-4xl leading-tight text-sage-dark sm:text-5xl">
                Comprendre avant de traiter.
              </h2>
            </div>

            <div className="max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg">
              <p>
                La consultation débute par une anamnèse permettant de
                comprendre votre situation, vos symptômes et votre contexte.
              </p>

              <p>
                L&apos;ostéopathe réalise ensuite un examen clinique à
                l&apos;aide de tests et d&apos;une palpation attentive afin
                d&apos;identifier les éléments pertinents pour la prise en
                charge.
              </p>

              <p>
                Le traitement est ensuite adapté à chaque personne, à son
                histoire et à ses besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi consulter */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/pourquoi.png"
                  alt="Illustration autour de l'ostéopathie"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 max-w-xl md:order-2">
              <span className="eyebrow">Pourquoi consulter ?</span>

              <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
                Différents motifs peuvent amener à consulter.
              </h2>

              <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
                Les motifs de consultation sont variés. L&apos;ostéopathie
                s&apos;adresse aux personnes de différents âges, avec une
                prise en charge adaptée à chaque situation.
              </p>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Voici quelques exemples de motifs pour lesquels une
                consultation peut être envisagée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adultes */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <span className="eyebrow">Adultes</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Les principaux motifs de consultation.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Parmi les motifs rencontrés en consultation, on retrouve
              notamment des douleurs et troubles fonctionnels de différentes
              régions du corps.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-2">
            {adultReasons.map((reason, index) => (
              <article
                key={reason}
                className="bg-background p-8 sm:p-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bébés et enfants */}
      <section className="section bg-background">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-20">
            <div>
              <span className="eyebrow">Bébés &amp; enfants</span>

              <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
                Une prise en charge adaptée aux plus jeunes.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                La prise en charge d&apos;un nourrisson ou d&apos;un enfant
                est différente de celle d&apos;un adulte. Les techniques
                utilisées sont adaptées à son âge et à sa situation.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Parmi les motifs de consultation figurent notamment les
                troubles fonctionnels liés au positionnement, à la sphère
                digestive ou encore à l&apos;allaitement.
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/cover1.png"
                alt="Bébé allongé, illustration de l'ostéopathie pédiatrique"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-2">
            {pediatricReasons.map((reason, index) => (
              <article
                key={reason}
                className="bg-white p-8 sm:p-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-sage">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grossesse */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Grossesse &amp; post-partum</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Une approche adaptée aux transformations du corps.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              La grossesse et le post-partum représentent des périodes
              particulières durant lesquelles le corps évolue rapidement.
              La prise en charge est adaptée à chaque étape et à chaque
              situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-dark py-20 text-white sm:py-24">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
              Consultation
            </span>

            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Une question avant de prendre rendez-vous ?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              N&apos;hésitez pas à prendre contact afin de vérifier si une
              consultation correspond à votre situation.
            </p>

            <a
              href="https://www.doctoranytime.be/d/osteopathe/polet-agathe"
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