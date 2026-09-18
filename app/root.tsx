import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Navigation from "./component/navigation";
import Footer from "./component/footer";

import "./tailwind.css";

export const meta: MetaFunction = () => [
  {
    title: "Agathe Polet — Ostéopathe D.O. à Bruxelles",
  },
  {
    name: "description",
    content:
      "Agathe Polet, ostéopathe D.O. à Bruxelles. Consultations pour adultes, femmes enceintes, post-partum, bébés et enfants à Etterbeek et Forest.",
  },

  // Open Graph
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:locale",
    content: "fr_BE",
  },
  {
    property: "og:site_name",
    content: "Agathe Polet — Ostéopathe D.O.",
  },
  {
    property: "og:title",
    content: "Agathe Polet — Ostéopathe D.O. à Bruxelles",
  },
  {
    property: "og:description",
    content:
      "Ostéopathe D.O. à Bruxelles. Consultations à Etterbeek et Forest pour adultes, grossesse, post-partum, bébés et enfants.",
  },
  {
    property: "og:image",
    content: "https://www.osteopathe-bruxelles.com/og-image.png",
  },
  {
    property: "og:image:alt",
    content: "Agathe Polet — Ostéopathe D.O. à Bruxelles",
  },

  // Twitter / X
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:title",
    content: "Agathe Polet — Ostéopathe D.O. à Bruxelles",
  },
  {
    name: "twitter:description",
    content:
      "Ostéopathe D.O. à Bruxelles. Consultations à Etterbeek et Forest.",
  },
  {
    name: "twitter:image",
    content: "https://www.osteopathe-bruxelles.com/og-image.png",
  },
];

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="google-site-verification"
          content="p6sFTArjgQMJBoV1hUNx16pJGRf-0xQLeBsY80lrX6Q"
        />

        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Agathe Polet",
              jobTitle: "Ostéopathe D.O.",
              url: "https://www.osteopathe-bruxelles.com/",
              image: "https://www.osteopathe-bruxelles.com/agathe2.jpg",
              sameAs: [
                "https://www.doctoranytime.be/d/osteopathe/polet-agathe",
              ],
              worksFor: {
                "@type": "MedicalBusiness",
                name: "Cabinet d'ostéopathie — Agathe Polet",
                url: "https://www.osteopathe-bruxelles.com/",
                address: [
                  {
                    "@type": "PostalAddress",
                    streetAddress: "Avenue des Nerviens 111",
                    postalCode: "1040",
                    addressLocality: "Etterbeek",
                    addressCountry: "BE",
                  },
                  {
                    "@type": "PostalAddress",
                    streetAddress: "Avenue Everard 7",
                    postalCode: "1190",
                    addressLocality: "Forest",
                    addressCountry: "BE",
                  },
                ],
              },
            }),
          }}
        />
      </head>

      <body className="bg-background font-sans text-foreground antialiased">
        <Navigation />

        {children}

        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}