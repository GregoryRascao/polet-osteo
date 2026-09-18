import { Disclosure } from "@headlessui/react";
import { NavLink } from "@remix-run/react";

const navigation = [
  { name: "À propos", href: "/about" },
  { name: "Ostéopathie", href: "/osteopathie" },
  { name: "Consultations", href: "/consultations" },
  { name: "Cabinets", href: "/cabinets" },
];

const appointmentUrl =
  "https://www.doctoranytime.be/d/osteopathe/polet-agathe";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container-content">
              <div className="flex h-20 items-center justify-between gap-8">
                {/* Logo */}
                <NavLink
                  to="/"
                  className="shrink-0"
                  aria-label="Agathe Polet — Accueil"
                >
                  <span className="block font-display text-2xl leading-none text-sage-dark">
                    Agathe Polet
                  </span>

                  <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    Ostéopathe D.O.
                  </span>
                </NavLink>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        [
                          "text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200",
                          isActive
                            ? "text-sage-dark"
                            : "text-muted hover:text-sage-dark",
                        ].join(" ")
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  <a
                    href={appointmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-sage-dark px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-sage"
                  >
                    Rendez-vous
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex h-11 w-11 items-center justify-center rounded border border-foreground/10 text-sage-dark transition-colors duration-200 hover:bg-sage-light lg:hidden"
                  aria-label={
                    open ? "Fermer le menu" : "Ouvrir le menu"
                  }
                >
                  <span className="sr-only">
                    {open ? "Fermer le menu" : "Ouvrir le menu"}
                  </span>

                  <span className="relative block h-4 w-5">
                    <span
                      className={[
                        "absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-200",
                        open ? "translate-y-2 rotate-45" : "",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "absolute left-0 top-2 block h-px w-5 bg-current transition-opacity duration-200",
                        open ? "opacity-0" : "",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "absolute left-0 top-4 block h-px w-5 bg-current transition-transform duration-200",
                        open ? "-translate-y-2 -rotate-45" : "",
                      ].join(" ")}
                    />
                  </span>
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile navigation */}
            <Disclosure.Panel className="border-t border-foreground/10 bg-background lg:hidden">
              <div className="container-content py-5">
                <div className="flex flex-col">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.href}
                      as={NavLink}
                      to={item.href}
                      className={({ isActive }: { isActive: boolean }) =>
                        [
                          "border-b border-foreground/10 py-4 text-left text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                          isActive
                            ? "text-sage-dark"
                            : "text-muted hover:text-sage-dark",
                        ].join(" ")
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}

                  <a
                    href={appointmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-3 rounded bg-sage-dark px-5 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-sage"
                  >
                    Prendre rendez-vous
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}