export default function Expertise() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-20">
          <div>
            <span className="eyebrow">L&apos;ostéopathie</span>

            <h2 className="mt-5 max-w-md text-4xl leading-tight text-sage-dark sm:text-5xl">
              Prendre soin du corps, à chaque étape de la vie.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-muted sm:text-lg">
              L&apos;ostéopathie est une approche manuelle qui s&apos;intéresse
              au fonctionnement global du corps et aux relations entre ses
              différentes structures.
            </p>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Chaque consultation commence par un échange permettant de
              comprendre votre situation, vos besoins et votre contexte.
              L&apos;examen clinique et la prise en charge sont ensuite
              adaptés à chaque personne.
            </p>

            <div className="mt-10 grid gap-6 border-t border-foreground/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl text-sage-dark">
                  ULB
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Diplômée en ostéopathie
                </p>
              </div>

              <div>
                <p className="font-display text-3xl text-sage-dark">
                  Pédiatrie
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Formation et pratique auprès des plus jeunes
                </p>
              </div>

              <div>
                <p className="font-display text-3xl text-sage-dark">
                  Depuis 2015
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Pratique professionnelle en ostéopathie
                </p>
              </div>
            </div>

            <a
              href="/osteopathie"
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
            >
              En savoir plus sur l&apos;ostéopathie
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}