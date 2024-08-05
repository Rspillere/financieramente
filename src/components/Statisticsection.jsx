import { Carousel } from 'flowbite-react';
import useScrollAnimation from '../hooks/useScroll';
import 'tailwindcss/tailwind.css';

const Statisticsection = () => {
  useScrollAnimation('animate-fadeIn')
  return (
    <section className="md:pt-44 pt-24 md:pb-20 pb-40 md:px-16 px-8 mx-auto max-w-7xl section opacity-0">
      <div className="lg:flex-row flex flex-col-reverse justify-between items-center">
        <div className="">
          <h1 className=" md:text-5xl text-4xl text-gray-900 font-medium my-7 bg-gradient-to-r from-cyan-900 to-cyan-600 bg-clip-text text-transparent">
            Mis resultados invirtiendo en bolsa
          </h1>
          <div className="flex">
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-600 w-1 h-auto mr-3 "></div>
            <h2 className=" text-xl text-gray-900 w-full lg:w-3/4 ">
            Desde el año 2022 decidí compartir con toda la comunidad mi propio portafolio de Inversión en bolsa y hasta el momento, en todos los años le hemos ganado al Standard and Poors 500 (S&P 500), el índice de referencia en el mercado accionario.
            </h2>
          </div>
        </div>
        <img
          src="/medalla.png"
          type="image/png"
          alt=""
          className="h-auto w-44 lg:w-60"
        />
      </div>
      <div className="flex flex-wrap my-14 md:my-24 justify-center mx-auto">

        <div className="flex flex-col w-36 md:w-44 md:mx-6 lg:mx-14 mb-3 text-center mx-auto">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-32 md:h-40 flex flex-col justify-center items-center">
            <div className="text-xl md:text-3xl font-bold -m-1 -mt-4">+150k</div>
            <div className="text-lg md:text-xl font-semibold">capital</div>
          </div>
          <div className="text-center font-extralight text-sm md:text-base">
            Más de 150 mil dolares gestionados de la comunidad
          </div>
        </div>
        <div className="flex flex-col w-36 md:w-44 md:mx-6 lg:mx-14 mb-3 text-center  mx-auto">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-32 md:h-40  flex flex-col justify-center items-center">
            <div className=" text-xl md:text-3xl font-bold -m-1 -mt-4">49.8%</div>
            <div className=" text-xl font-semibold">profit</div>
          </div>
          <div className="text-center font-extralight text-sm md:text-base">
            49.8 % de ganancias registradas en 2023
          </div>
        </div>
        <div className="flex flex-col w-36 md:w-44 md:mx-6 lg:mx-14 mb-3 text-center mx-auto">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-32 md:h-40  flex flex-col justify-center items-center">
            <div className="text-lg md:text-2xl font-bold -m-1 -my-4">
              Popular
              <br />
              investor
            </div>
            <div className=" text-xl font-semibold">_</div>
          </div>
          <div className="text-center font-extralight text-sm md:text-base">
            Inversor Popular reconocido por eToro (broker regulado)
          </div>
        </div>
      </div>
      <div className="flex mt-14 flex-col items-center">
        <div className=" w-full lg:w-2/3 md:h-40 h-36">
          <Carousel pauseOnHover>
            <div className="bg-[url('/portf.png')] bg-cover bg-left h-36">
            </div>
            <div className="bg-[url('/grafica.png')] bg-cover bg-right h-36">
            </div>
          </Carousel>
        </div>
        <div className="md:flex-row flex-col flex justify-center items-center md:items-end">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 lg:ml-10 mt-10">
            <div className="text-sm mb-5 lg:mt-0 mt-5">
              Puedes accedera a mi portafolio y comprobar en tiempo real mis
              estadísticas, ver en que estoy invirtiendo y qué resultados estoy
              teniendo, te espero!
            </div>
            <button
              type="button"
              className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              <a href="https://www.etoro.com/es/people/financieramente
">Ir al Portfolio</a>
            </button>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 lg:ml-10 mt-10 flex flex-col justify-end">
            <div className="text-sm mb-5 lg:mt-0 mt-5">
              Crea tu cuenta y comenzá a invertir conmigo
            </div>
            <button
              type="button"
              className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 w-fit"
            >
              <a href="https://med.etoro.com/B18200_A109264_TClick_SFinanciera-Mente.aspx ">Crear cuenta</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statisticsection;
