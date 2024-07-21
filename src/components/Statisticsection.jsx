import { Carousel } from 'flowbite-react';

const Statisticsection = () => {
  return (
    <section className="md:pt-24 pt-12 md:pb-10 pb-20 md:px-16 px-8 mx-auto max-w-7xl">
      <div className="lg:flex-row flex flex-col-reverse justify-between items-center">
        <div className="">
          <h1 className=" md:text-5xl text-4xl text-gray-900 font-medium my-7 bg-gradient-to-r from-cyan-900 to-cyan-600 bg-clip-text text-transparent">
            Mis resultados invirtiendo en bolsa
          </h1>
          <div className="flex">
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-600 w-1 h-auto mr-3 "></div>
            <h2 className=" text-xl text-gray-900 w-full lg:w-3/4 ">
              En esta sección comparto contigo un poco de mis resultados de
              estos últimos años invirtiendo en un portafolio público, del cual
              muchas personas se están beneficiando.
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
      <div className="flex flex-wrap mt-14 justify-center mx-auto">
        <div className="flex flex-col w-44 mx-6 lg:mx-14 mb-3 text-center">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-40 flex flex-col justify-center items-center">
            <div className=" text-3xl font-bold -m-1 -mt-4">+150k</div>
            <div className=" text-xl font-semibold">capital</div>
          </div>
          <div className="text-center font-extralight">
            Más de 150 mil dolares gestionados
          </div>
        </div>
        <div className="flex flex-col w-44 mx-6 lg:mx-14 mb-3 text-center">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-40 flex flex-col justify-center items-center">
            <div className=" text-3xl font-bold -m-1 -mt-4">49.8%</div>
            <div className=" text-xl font-semibold">profit</div>
          </div>
          <div className="text-center font-extralight">
            49.8 % de ganancias registradas en 2023
          </div>
        </div>
        <div className="flex flex-col w-44 mx-6 lg:mx-14 mb-3 text-center">
          <div className="bg-[url('/corona.png')] bg-cover  bg-center h-40 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold -m-1 -mt-4">
              Popular
              <br />
              investor
            </div>
            <div className=" text-xl font-semibold">user</div>
          </div>
          <div className="text-center font-extralight">
            Nivel de usuario reconocido por Etoro (plataforma autorizada)
          </div>
        </div>
      </div>
      <div className="flex mt-14 flex-col items-center">
        <div className=" w-full lg:w-2/3 md:h-40 h-36">
          <Carousel pauseOnHover>
            <div className="bg-[url('/headerimg.png')] bg-cover bg-center h-36">
              <h1 className="text-2xl p-4 text-center font-bold from-teal-400 to-yellow-200 bg-gradient-to-r bg-clip-text text-transparent">
                Imagen del portfolio de etoro
              </h1>
            </div>
            <div className="bg-[url('/headerimg.png')] bg-cover bg-center h-36">
              <h1 className="text-2xl p-4 text-center font-bold from-teal-400 to-yellow-200 bg-gradient-to-r bg-clip-text text-transparent">
                Imagen de algunas gráficas
              </h1>
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
              <a href="https://www.etoro.com/login/?">Ir al Portfolio</a>
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
              <a href="https://www.etoro.com/login/?">Crear cuenta</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statisticsection;
