export default function Approach() {
  return (
    <section className="section bg-sage-dark text-white">
      <div className="container-content">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/pourquoi.png"
                alt="Illustration autour de l'ostéopathie"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
              Mon approche
            </span>

            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Une écoute attentive avant tout.
            </h2>

            <p className="mt-7 text-base leading-8 text-white/70 sm:text-lg">
              Chaque consultation est un moment d&apos;échange et
              d&apos;observation, afin de prendre en compte la personne dans
              son ensemble et de comprendre sa situation.
            </p>

            <div className="mt-10 space-y-6 border-t border-white/15 pt-8">
              <div className="grid grid-cols-[48px_1fr] gap-5">
                <span className="text-xs font-semibold tracking-[0.15em] text-sage-light">
                  01
                </span>

                <div>
                  <h3 className="font-display text-3xl">
                    Écouter
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Prendre le temps d&apos;échanger et de comprendre votre
                    demande.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] gap-5">
                <span className="text-xs font-semibold tracking-[0.15em] text-sage-light">
                  02
                </span>

                <div>
                  <h3 className="font-display text-3xl">
                    Observer
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    S&apos;appuyer sur l&apos;examen clinique pour mieux
                    comprendre votre situation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] gap-5">
                <span className="text-xs font-semibold tracking-[0.15em] text-sage-light">
                  03
                </span>

                <div>
                  <h3 className="font-display text-3xl">
                    Accompagner
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Adapter la prise en charge à chaque personne et à ses
                    besoins.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/about"
              className="mt-10 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-white"
            >
              Découvrir mon approche
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}