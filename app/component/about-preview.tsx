export default function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/agathe2.jpg"
                alt="Agathe Polet, ostéopathe D.O."
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 hidden bg-background px-6 py-5 sm:block">
              <p className="font-display text-3xl text-sage-dark">
                Depuis 2015
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                Ostéopathe D.O.
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <span className="eyebrow">À propos de moi</span>

            <h2 className="mt-5 text-4xl leading-tight text-sage-dark sm:text-5xl">
              Une pratique fondée sur l&apos;écoute et l&apos;expérience.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              Diplômée en ostéopathie de l&apos;Université Libre de Bruxelles
              en 2015, j&apos;ai développé mon parcours autour de la pratique
              clinique, de la pédiatrie et de l&apos;accompagnement de la
              grossesse et du post-partum.
            </p>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Mon expérience hospitalière et mon activité d&apos;enseignement
              à l&apos;ULB nourrissent une pratique qui accorde une place
              importante à l&apos;écoute, à l&apos;observation et à
              l&apos;adaptation de chaque consultation.
            </p>

            <a
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark"
            >
              Découvrir mon parcours
              <span
                aria-hidden="true"
                className="transition-transform duration-200"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}