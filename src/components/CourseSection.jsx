import { AcademicCapIcon } from '@heroicons/react/24/solid';

const CourseSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" my-16 sm:flex-row flex-col flex sm:mb-28">
            <img
                src="/chanchito.png"
                type="image/png"
                alt=""
                className=" h-56 object-contain lg:h-72 sm:mr-20"
            />
            <div className=''>
                <h1 className=" md:text-4xl text-3xl text-gray-900 font-medium my-7">
                    La mejor inversión que podés hacer es en vos mismo.
                </h1>
                <div className="flex">
                    <div className="bg-gray-900 w-1 h-auto mr-3"></div>
                    <h2 className=" text-1xl text-gray-900 w-full lg:w-1/2 ">
                    ¡Bienvenido a nuestra comunidad financiera! Aquí encontrarás todo
                    lo que necesitas saber sobre finanzas internacionales adaptado al
                    mercado uruguayo, junto con un enfoque en nuestros cuatro pilares
                    fundamentales: Finanzas personales, Inversiones, Criptomonedas y
                    Trading.
                    </h2>
                </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <CourseCard
            title="Curso de Finanzas Personales"
            description="Aprende a gestionar tus finanzas personales de manera efectiva y alcanzar la libertad financiera."
            image="/logo-claro.png"
          />
          <CourseCard
            title="Curso básico sobre criptomonedas"
            description="Descubre los conceptos básicos de las criptomonedas y cómo empezar a invertir en este emocionante mercado."
            image="/logo-claro.png"
          />
          <CourseCard
            title="Curso sobre finanzas personales"
            description="Estamos trabajando en un curso completo sobre finanzas personales. ¡Mantente atento para más actualizaciones!"
            image="/logo-claro.png"
            active={false}
          />
          <CourseCard
            title="Curso de trading"
            description="Próximamente lanzaremos un curso avanzado sobre trading. Prepárate para mejorar tus habilidades de inversión."
            image="/logo-claro.png"
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, active = true, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 relative min-w-64 sm:max-w-64 flex sm:flex-col">
      <div className="h-12 bg-slate-600 absolute top-0 left-0 flex">
        <AcademicCapIcon className=" text-white h-5 m-1" />
      </div>
      <div className="flex justify-center">
        <img src={image} alt="" className=" max-h-48 object-contain" />
      </div>
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>

        <div
          className={`${
            active
              ? 'bg-red-600 hover:bg-red-800 cursor-pointer'
              : 'bg-gray-500 cursor-default'
          } w-fit px-2 py-1 rounded-md self-end sm:self-start`}
        >
          <a
            href="#"
            className={`flex items-center text-white cursor-default ${
              active && 'cursor-pointer'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            {active ? 'Ver ahora' : 'Proximamente'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
