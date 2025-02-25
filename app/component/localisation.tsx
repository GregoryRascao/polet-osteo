import Divider from '~/component/divider';

export default function Localisation() {
  return (
    <div>
      <Divider></Divider>
      <h1 id="localisation" className="flex justify-center">
        Lieux de consultations
      </h1>
      <Divider></Divider>
      <div className="relative isolate overflow-hidden mx-auto mt-10">
        <div className="card-cab md:flex-row md:justify-center md:justify-around place-items-center">
          <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg sm:m-10">
            <iframe
              title="Etterbeek"
              allowFullScreen
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10077.900358442783!2d4.40129825!3d50.840886049999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82b564d84a90763b!2sPolet+Agathe+Ost%C3%A9opathe+D.O.!5e0!3m2!1sfr!2sbe!4v1557059806251!5m2!1sfr!2sbe"
              data-aos="fade-up"
              width="100%"
              height="450"
            ></iframe>
            <div className="px-6 py-4">
              <div className="flex font-bold text-xl mb-2 justify-center">
                Cabinet à Etterbeek.
              </div>
              <span className="flex justify-center text-gray-700 text-base m-2">
                Avenue Des Nerviens 111, 1040 Etterbeek
              </span>
              <p className="flex justify-center text-gray-700 text-base m-2">
                Présente le Vendredi
              </p>
              <a
                type="button"
                className="btn btn-rose flex justify-center"
                id="rendez-vous Etterbeek"
                href="https://www.doctoranytime.be/d/osteopathe/polet-agathe"
              >
                Prendre rendez-vous en ligne
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg sm:m-10">
            <iframe
              title="Forest"
              allowFullScreen
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.811261889318!2d4.335353351381861!3d50.81613547942695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c44f73bc3319%3A0xe46e4010ee8bd250!2sAvenue+Everard+7%2C+1190+Forest!5e0!3m2!1sfr!2sbe!4v1557060336339!5m2!1sfr!2sbe"
              data-aos="fade-up"
              width="100%"
              height="450"
            ></iframe>
            <div className="px-6 py-4">
              <div className="flex font-bold text-xl mb-2 justify-center">
                Centre &quot;Naitre et Devenir&quot;
              </div>
              <span className="flex justify-center text-gray-700 text-base my-2">
                Avenue Everard 7, 1190
              </span>
              <p className="flex justify-center text-gray-700 text-base my-2">
                Présente le Lundi et Jeudi
              </p>

              <a
                type="button"
                className="btn btn-rose flex justify-center"
                id="rendez-vous forest"
                href="https://www.doctoranytime.be/d/osteopathe/polet-agathe"
              >
                Prendre rendez-vous en ligne
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
