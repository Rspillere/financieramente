
const CursosSection = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-amber-800">
      <div className="relative h-32">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '150%',
            background: 'white',
            zIndex: 0,
            transform: 'skewY(-4deg)',
            transformOrigin: 'top left'
          }}
        ></div>
      </div>

        <div className="px-16 md:px-36 lg:px-16 2xl:px-52 pb-20 flex flex-col mt-24">
          <div className=" lg:w-1/2">
            <h1 className=" md:text-4xl text-3xl text-white font-medium my-7">
            La mejor inversión que podés hacer es en vos mismo.
            </h1>
            <div className="flex">
              <div className=" bg-white w-1 h-auto mr-3"></div>
              <h2 className=" text-1xl text-white w-full">
              Por eso en financieramente tenemos cursos para que aprendes y te inicies en este mundo de forma totalmente gratuita 
              </h2>              
            </div>
            
          </div>
        </div>
        

    </div>
  );
};

export default CursosSection;
