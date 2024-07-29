const Introsection = () => {
  return (
    <div className=" xl:pt-52 md:pt-24 pt-12 md:px-16 px-8 mx-auto max-w-7xl">
      <div className="lg:flex-row flex flex-col justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-gray-900 mt-7 mb-3">
            ¡Te lo explico en criollo!
          </h1>
          <h2 className="text-2xl text-gray-900 w-full lg:w-3/4 mb-7">
            Desde Uruguay a Wall Street
          </h2>
          <div className="flex">
            <div className="bg-gray-900 w-1 h-auto mr-3"></div>
            <div className=" text-md md:text-lg text-gray-900 w-full lg:w-3/4">
              <p className="mb-2">
                Financiera-Mente es una comunidad de personas apasionadas por las
                finanzas y las inversiones que busca poner el dinero a trabajar
                de forma efectiva y rentable.
              </p>
              <p className="mb-2">
                Acá aprenderás todo lo que necesitas para adentrarte al
                apasionante mundo de la inversión y hacerlo de forma sencilla
                pero profesional.
              </p>
              <p className="mb-2">
                Todos los conceptos son explicados con un lenguaje entendible y
                sin tecnicismos para que puedas entender y aplicar los
                conocimientos.
              </p>
              <p className="mb-2">
                Analizamos distintas oportunidades de inversión a nivel
                internacional y con un foco extra y adaptado al mercado
                uruguayo.
              </p>
              <p className="mb-2">
                Además, si te interesa entender y dar tus primeros pasos en la
                inversión en bolsa y los mercados financieros, definitivamente
                este es tu lugar!
              </p>
              <p className="mb-2">
                ¡Caminemos juntos hacia nuestros objetivos financieros!
              </p>
            </div>
          </div>
        </div>
        <img
          src="/mate-mauro.png"
          type="image/png"
          alt=""
          className="hauto lg:w-96 rounded-full my-10 mt-14"
        />
      </div>
    </div>
  );
};

export default Introsection;
