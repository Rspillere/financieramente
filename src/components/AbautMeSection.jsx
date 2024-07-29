import { useState } from 'react';

useState;

const AboutMeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMore = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id='AbautMeSection' className="bg-gradient-to-r from-slate-900 to-slate-700 relative mt-20">
      <div className="relative h-32">
        <div
          style={{
            position: 'absolute',
            zIndex: 11,
            width: '100%',
            height: '150%',
            background: 'white',
            transform: 'skewY(-4deg)',
            transformOrigin: 'top left',
          }}
        ></div>
      </div>
        <img
          id="foto"
          src="/mauro-desck.png"
          alt=""
          className="hidden 2xl:block ml-auto h-full absolute z-10 right-0 top-0"
        />
      <img
        src="/mauro-desck.png"
        alt=""
        className="block md:hidden w-full"
      />
      <div className="mx-auto max-w-7xl">
        <div className="px-8 md:px-16 pb-20 md:flex-row flex flex-col-reverse justify-between items-center">
          <div className="md:w-1/2 md:pt-20">
            <h1 className="md:text-4xl text-3xl text-white font-medium my-7">
              ¿Quién soy?
            </h1>
            <div className="flex">
              <div className="bg-white w-1 h-auto mr-3"></div>
              <h2 className="text-1xl text-white w-full">
              ¡Bienvenido a nuestra comunidad financiera! Aquí encontrarás todo lo que necesitas saber sobre finanzas internacionales adaptado al mercado uruguayo, junto con un enfoque en nuestros cuatro pilares fundamentales: Finanzas personales, Inversiones, Criptomonedas y Trading. Nuestro objetivo es brindarte las herramientas y conocimientos necesarios para que puedas poner tu dinero a trabajar de manera efectiva y rentable en el contexto financiero uruguayo. Desde estrategias de ahorro y técnicas para salir de deudas hasta consejos e instrumentos de inversión específicos para nuestro mercado, estamos aquí para ayudarte a alcanzar tus metas financieras.
              </h2>
            </div>
            <button
              type="button"
              className={`mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
                isOpen && 'hidden'
              }`}
              onClick={toggleMore}
            >
              Saber más
            </button>
          </div>
          <img
            src="/mauro-desck.png"
            alt=""
            className="hidden md:block w-2/5 2xl:hidden rounded-full"
          />
          
        </div>
        <div
          className={`mx-6 lg:mx-16 pb-16 text-white ${!isOpen && 'hidden'}`}
        >
          <div>
          ¡Bienvenido a nuestra comunidad financiera! Aquí encontrarás todo lo que necesitas saber sobre finanzas internacionales adaptado al mercado uruguayo, junto con un enfoque en nuestros cuatro pilares fundamentales: Finanzas personales, Inversiones, Criptomonedas y Trading. Nuestro objetivo es brindarte las herramientas y conocimientos necesarios para que puedas poner tu dinero a trabajar de manera efectiva y rentable en el contexto financiero uruguayo. Desde estrategias de ahorro y técnicas para salir de deudas hasta consejos e instrumentos de inversión específicos para nuestro mercado, estamos aquí para ayudarte a alcanzar tus metas financieras.¡Bienvenido a nuestra comunidad financiera! Aquí encontrarás todo lo que necesitas saber sobre finanzas internacionales adaptado al mercado uruguayo, junto con un enfoque en nuestros cuatro pilares fundamentales: Finanzas personales, Inversiones, Criptomonedas y Trading. Nuestro objetivo es brindarte las herramientas y conocimientos necesarios para que puedas poner tu dinero a trabajar de manera efectiva y rentable en el contexto financiero uruguayo. Desde estrategias de ahorro y técnicas para salir de deudas hasta consejos e instrumentos de inversión específicos para nuestro mercado, estamos aquí para ayudarte a alcanzar tus metas financieras.¡Bienvenido a nuestra comunidad financiera! Aquí encontrarás todo lo que necesitas saber sobre finanzas internacionales adaptado al mercado uruguayo, junto con un enfoque en nuestros cuatro pilares fundamentales: Finanzas personales, Inversiones, Criptomonedas y Trading. Nuestro objetivo es brindarte las herramientas y conocimientos necesarios para que puedas poner tu dinero a trabajar de manera efectiva y rentable en el contexto financiero uruguayo. Desde estrategias de ahorro y técnicas para salir de deudas hasta consejos e instrumentos de inversión específicos para nuestro mercado, estamos aquí para ayudarte a alcanzar tus metas financieras.
          </div>
          <button
            type="button"
            className={`mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
              !isOpen && 'hidden'
            }`}
            onClick={toggleMore}
          >
            Ocultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
