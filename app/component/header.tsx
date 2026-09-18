const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export default function Header() {
  return (
    <section className="bg-background">
      <div className="container-content">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 md:grid-cols-[1fr_0.9fr] md:gap-20 md:py-16">
          <div className="max-w-2xl">
            <span className="eyebrow">
              Ostéopathe D.O. · Bruxelles
            </span>

            <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[0.95] text-sage-dark sm:text-6xl lg:text-7xl">
              À l&apos;écoute de chaque étape de votre vie.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Agathe Polet, ostéopathe D.O., vous accueille à Etterbeek et
              Forest pour des consultations adaptées aux adultes, aux femmes
              enceintes, au post-partum, ainsi qu&apos;aux bébés et aux
              enfants.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded bg-sage-dark px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-sage"
              >
                Prendre rendez-vous
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/osteopathie"
                className="inline-flex items-center justify-center gap-2 px-2 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
              >
                Découvrir l&apos;ostéopathie
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-foreground/10 pt-6 text-xs font-medium uppercase tracking-[0.12em] text-muted">
              <span>Etterbeek</span>
              <span aria-hidden="true">·</span>
              <span>Forest</span>
              <span aria-hidden="true">·</span>
              <span>Sur rendez-vous</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/agathe2.jpg"
                alt="Agathe Polet, ostéopathe D.O."
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden bg-white px-6 py-5 shadow-sm sm:block">
              <p className="font-display text-3xl text-sage-dark">
                Depuis 2015
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                Ostéopathie · ULB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}