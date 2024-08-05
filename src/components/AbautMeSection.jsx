import { useState } from 'react';
import useScrollAnimation from '../hooks/useScroll';

useState;

const AboutMeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMore = () => {
    setIsOpen(!isOpen);
  };
  useScrollAnimation('animate-fadeIn')
  return (
    <div id='AbautMeSection' className="bg-gradient-to-r from-slate-900 to-slate-700 relative mt-20 section opacity-0">
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
          className={!isOpen ? `hidden 2xl:block ml-auto h-full absolute z-10 right-0 top-0`: 'hidden'}
        />
      <img
        src="/mauro-desck.png"
        alt=""
        className="block md:hidden w-full"
      />
      <div className="mx-auto max-w-7xl">
        <div className="px-8 md:px-16 pb-20 md:flex-row flex flex-col-reverse justify-between items-center">
          <div className="md:w-1/2 md:pt-20">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-white mt-7 my-4 md:my-10">
              ¿Quién soy?
            </h1>
            <div className="flex">
              <div className="bg-white md:w-1 w-0.5 h-auto mr-3"></div>
              <h2 className=" text-sm md:text-lg text-white w-full lg:w-3/4 font-semibold">
              <p className="mb-2">
              ¡Hola! Mi nombre es Mauro, un ser apasionado, metódico e inconformista.

              </p>
              <p className="mb-2">
                Crecí en una familia de clase media donde siempre se fomentó el ahorro, pero no hablemos de invertir el dinero ni mucho menos de ganar dinero a través de los mercados financieros. ¿Mercados Financieros? ¿Qué es eso? (Me seguís por donde va la cosa, ¿no?)
              </p>
              <p className="mb-2">
                A medida que fui creciendo, también lo fue haciendo mi interés por el dinero (al menos eso creía en un principio), lo que me llevó a realizar estudios terciarios en la Facultad de Ciencias Económicas y recibirme exitosamente de Lic. en Administración de Empresas con orientación financiera.
              </p>
              <p className="mb-2">
                A mis 18 años...
              </p> 

              

              
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
            className={!isOpen ? 'hidden md:block w-2/5 2xl:hidden rounded-full': 'hidden md:block w-2/5 rounded-full'}
          />
          
        </div>
        <div
          className={`mx-6 lg:mx-16 pb-16 text-white ${!isOpen && 'hidden'}`}
        >
          <div className=" text-sm md:text-lg text-white w-full font-semibold">
            <p className="mb-2">
              …llego a mis manos un libro clave en mi vida que generaría un  despertar en mi consiencia y en ese momento me di cuenta que se puede poner nuestro dinero a trabajar para generar más dinero (no es esto increíble???) Y si, estoy hablando de Padre Rico, Padre Pobre de Robert Kiyosaki,. Además de este libro cursé una materia en facultad que sería decisivo para mi futuro, esta materia se llamaba “Mercados Financieros”. Entendí cómo funciona “el negocio”, recuerdo que me entusiasmaba utilizar la plataforma de Bloomberg, en fin, comenzaba a descubrir mi destino.
            </p>
            <p className="mb-2">
              Al día de hoy el análisis de los mercados financieros son parte de mi rutina así cómo la capacitación y enseñanza en materia de finanzas personales e inversiones.
            </p>
            <p className="mb-2">
              Pero… ¿te acordas que te dije que siempre tuve un gran interés por el dinero? Resulta que estaba equivocado. Intrínsecamente lo que me mueve es la libertad que trae consigo el dinero y la inversión. ¿Alguna vez te imaginaste cómo sería tu vida si el dinero no sería un problema y ya lo tuvieras resuelto? Pues yo si, muchas veces. De aquí deriva mi misión con Financiera-Mente, que es ayudarte a vos y a una gran cantidad de personas a mejorar sus finanzas personales e invertir su dinero de forma exitosa para que el dinero no sea una preocupación en tu vida y puedas disfrutar de tiempo de calidad en lo que más te plazca. 
            </p>
            <p className="mb-2">
              No te deseo suerte, sino buenas decisiones. El control de tu futuro no depende del gobierno ni de tu empleador, depende solamente de vos! Arriba!
            </p>
          

          

          

          
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
