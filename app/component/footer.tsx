const navigation = [
  { name: "À propos", href: "/about" },
  { name: "Ostéopathie", href: "/osteopathie" },
  { name: "Consultations", href: "/consultations" },
  { name: "Cabinets", href: "/cabinets" },
];

const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-content">
        <div className="grid gap-12 border-t border-foreground/10 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16 md:py-20">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex flex-col leading-none">
              <span className="font-display text-3xl font-semibold text-sage-dark">
                Agathe Polet
              </span>

              <span className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
                Ostéopathe D.O.
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Ostéopathe D.O. à Bruxelles, avec des consultations à
              Etterbeek et Forest.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow">Navigation</p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-foreground/80 transition-colors duration-200 hover:text-sage-dark"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow">Rendez-vous</p>

            <div className="mt-5">
              <p className="text-sm leading-7 text-muted">
                Etterbeek · Forest
              </p>

              <a
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark transition-colors duration-200 hover:text-sage"
              >
                Prendre rendez-vous
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-foreground/10 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Agathe Polet. Tous droits
            réservés.
          </p>

          <div className="flex gap-5">
            <a
              href="/mentions-legales"
              className="transition-colors hover:text-sage-dark"
            >
              Mentions légales
            </a>

            <a
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-sage-dark"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}