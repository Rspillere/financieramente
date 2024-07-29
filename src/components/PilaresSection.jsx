import useScrollAnimation from "../hooks/useScroll";
import 'tailwindcss/tailwind.css';
const PilaresSection = () => {
  useScrollAnimation('animate-fadeIn');
  return (
    <div id="cursos" className="bg-gradient-to-r from-amber-300 to-amber-100 mt-20 section opacity-0">
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
            <h1 className="md:text-5xl text-4xl text-gray-900 font-medium my-7">
              Los 4 Pilares de Financiera-Mente:
            </h1>
            <div className="flex">
              <div className="bg-gray-900 w-1 h-auto mr-3"></div>
              <h2 className="text-xl text-gray-900 w-full lg:w-2/3">
                No siempre tenemos todo el tiempo para ocuparnos al 100 % en el
                camino hacia el entendimiento y aprovechamiento de las
                oportunidades financieras. Si querés apalancarte en el camino
                que ya hemos recorrido, esto te va a interesar.
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
            href="https://www.youtube.com/watch?v=M16a9m1sAT0&list=PL_guzR28LK7XXHQxCaluzt6tn-VUhqlnJ&pp=iAQB"
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
            href="https://www.youtube.com/watch?v=M16a9m1sAT0&list=PL_guzR28LK7XXHQxCaluzt6tn-VUhqlnJ&pp=iAQB"
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
              ? 'bg-slate-600 hover:bg-slate-800 cursor-pointer'
              : 'bg-gray-300 cursor-default'
          } w-fit px-4 py-1 rounded-md self-end`}
        >
          <a
            href={href}
            className={`flex items-center text-white ${
              active ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {active ? 'Ver ahora' : 'Próximamente'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PilaresSection;
