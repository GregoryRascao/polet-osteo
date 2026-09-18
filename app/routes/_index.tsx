import type { MetaFunction } from "@remix-run/node";

import Header from "../component/header";
import Expertise from "../component/expertise";
import Consultations from "../component/consultations";
import AboutPreview from "../component/about-preview";
import Approach from "../component/approach";
import Experience from "../component/experience";
import Locations from "../component/locations";
import AppointmentCTA from "../component/appointment-cta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Agathe Polet — Ostéopathe D.O. à Bruxelles",
    },
    {
      name: "description",
      content:
        "Agathe Polet, ostéopathe D.O. à Bruxelles. Consultations à Etterbeek et Forest pour adultes, grossesse, post-partum, bébés et enfants.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Header />

      <main>
        <Expertise />

        <Consultations />

        <AboutPreview />

        <Approach />

        <Experience />

        <Locations />

        <AppointmentCTA />
      </main>
    </>
  );
}