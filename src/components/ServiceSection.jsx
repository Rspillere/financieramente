const ServiceSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:pt-24 pt-12 md:pb-10 pb-20 md:px-16 px-8 mx-auto max-w-7xl">
        <div className="my-16 sm:flex-row-reverse flex-col flex sm:mb-28">
          <img
            src="/birrete.png"
            type="image/png"
            alt=""
            className="h-56 object-contain lg:h-72 sm:mr-20"
          />
          <div>
            <h1 className="md:text-4xl text-3xl text-gray-900 font-medium my-7">
              La mejor inversión que podés hacer es en vos mismo.
            </h1>
            <div className="flex">
              <div className="bg-gray-900 w-1 h-auto mr-3"></div>
              <h2 className="text-lg md:text-xl text-gray-900 w-full lg:w-2/3">
                No siempre tenemos el tiempo para ponernos a investigar y aprender absolutamente todo por nosotros mismos. No siempre la experiencia personal y darnos contra la pared constantemente es el mejor maestro. Si valorás tu tiempo y querés un atajo para lograr tus objetivos financieros más rápido y eficiente, quizás estos servicios educativos y de acompañamiento puede ser lo que estás buscando.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <CourseCard
            title="Comunidad VIP de inversores"
            description="Rodeate de personas como vos y accedé a la mejor información sobre Inversiones en Uruguay y Mercados Financieros para tomar mejores decisiones y rentabilizar efectivamente tu capital"
            image="/comunidad.png"
          />
          <CourseCard
            title="Programa Cripto 10x"
            description="Multipliquemos tu capital entre 5 a 10 veces invirtiendo en criptomonedas mediante mi Programa de Acompañamiento Personalizado"
            image="/cripto.png"
          />
          <CourseCard
            title="Asesorías Personalizadas"
            description="Analicemos a profundidad tu situación financiera actual y planifiquemos juntos un plan de acción a tu medida en reuniones 1 a 1."
            image="/asesoria.png"
          />
          <CourseCard
            title="Trading Signals"
            description="Estamos trabajando en algo genial, mantenete al tanto!"
            image="/trading.png"
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, active = true, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 relative w-full min-w-64 sm:max-w-64  flex flex-col transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2">
      <div className="h-2 w-12 bg-slate-200 rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2"></div>
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
              : 'bg-gray-200 cursor-default'
          } w-fit px-4 py-1 rounded-md self-end `}
        >
          <a
            href=""
            className={`flex items-center text-white ${
              active ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {active ? 'Saber más' : 'Próximamente'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;