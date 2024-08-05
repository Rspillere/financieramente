import useScrollAnimation from '../hooks/useScroll';
import 'tailwindcss/tailwind.css';
const PilaresSection = () => {
  useScrollAnimation('animate-fadeIn');
  return (
    <div
      id="cursos"
      className="bg-gradient-to-r from-amber-300 to-amber-100 mt-20 section opacity-0"
    >
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
      <div className="md:pt-24 pt-12 md:pb-10 pb-20 md:px-16 px-8 mx-auto max-w-7xl">
        <div className="my-16 md:flex-row-reverse flex-col flex sm:mb-28">
          <div>
            <div className="flex">
              <img
                src="/cursos.png"
                alt=""
                className=" w-6 h-min mr-3 self-center md:w-10"
              />
              <h2 className="text-lg md:text-2xl text-gray-900 font-semibold">
                Cursos Gratis
              </h2>
            </div>
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-gray-900 mt-7 my-4 md:my-10">
              Los 4 Pilares de Financiera-Mente:
            </h1>
            <div className="flex">
              <div className="bg-gray-900 md:w-1 w-0.5 h-auto mr-3"></div>
              <h2 className=" text-sm md:text-lg text-gray-900 w-full lg:w-3/4 font-semibold">
                <p className="mb-2">
                  - Trabajemos juntos en estos 4 pilares que definen a
                  Financiera-Mente, comenzando desde lo más basico que es
                  organizar nuestras finanzas personales y generar un mayor
                  ahorro para poder invertir de forma pasiva y construir un
                  portafolio de inversión de cara a largo plazo que nos
                  complemente nuestra jubilación o bien nos permita retirarnos
                  anticipadamente.
                </p>
                <p className="mb-2">
                  - También te invito a explorar la generación de ingresos
                  mediante una inversión activa en criptomonedas y aprneder a
                  hacer trading eficientemente en los mercados financieros.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <CourseCard
            title="Finanzas Personales"
            description="El primer paso es aprender a manejar tus finanzas
            personales, ordenar tus números y generar una mayor
            capacidad de ahorro."
            image="/hucha.png"
            href="https://youtube.com/playlist?list=PL_guzR28LK7Wx4SErlj4Hk3kWXMHWp9Uh&si=C8Pv3doIthxYV22g"
          />
          <CourseCard
            title="Inversiones"
            description="Es momento de poner tu dinero a trabajar y generar 
            un ingreso extra de forma totalmente pasiva y sin 
            dedicarle tiempo."
            image="/crecimiento.png"
            href="https://www.youtube.com/watch?v=M16a9m1sAT0&list=PL_guzR28LK7XXHQxCaluzt6tn-VUhqlnJ&pp=iAQB"
          />
          <CourseCard
            title="Criptomonedas"
            description="Seguro has escuchado hablar sobre Bitcoin y las
            criptomonedas. Antes de invertir, asegúrate
            de saber dónde estás poniendo tu dinero."
            image="/mundial.png"
            href="https://youtube.com/playlist?list=PL_guzR28LK7UYG3N9DcVLEjLkDwuuRG4m&si=sMdaFIln-1YcJHFP"
          />
          <CourseCard
            title="Trading"
            description="Plata fácil no existe, desde ya te lo adelanto. Pero sí que
            es posible construir una segunda fuente de ingresos
            mediante el trading."
            image="/beneficios.png"
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, active = true, image, href }) => {
  return (
    <div className="bg-white bg-opacity-40 rounded-lg overflow-hidden shadow-md p-6 relative w-full md:max-w-md flex flex-col transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2">
      <div className="h-2 w-12 bg-slate-600 rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt=""
          className="max-h-48 object-contain rounded-md"
        />
      </div>
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>

        <div
        
          className={`${
            active
              ? ' bg-rose-600 hover:bg-rose-500 cursor-pointer'
              : 'bg-gray-300 cursor-default'
          } w-fit px-4 py-1 rounded-md self-end`}
        >
        
          <a
            href={href}
            className={`flex items-center text-white ${
              active ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            <svg
              className="h-6 w-6 mr-2 "
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a2.947 2.947 0 0 0-2.077-2.081C19.215 3.515 12 3.515 12 3.515s-7.215 0-9.421.59a2.947 2.947 0 0 0-2.077 2.08C.002 8.4 0 12 0 12s.002 3.601.502 5.814a2.947 2.947 0 0 0 2.077 2.081C4.785 20.485 12 20.485 12 20.485s7.215 0 9.421-.59a2.947 2.947 0 0 0 2.077-2.08C23.998 15.601 24 12 24 12s-.002-3.6-.502-5.814zM9.75 15.002V8.998l6.5 3.001-6.5 3.003z" />
            </svg>
            {active ? 'Ver ahora' : 'Próximamente'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PilaresSection;
