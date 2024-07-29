const Herosection = () => {
  return (
    <div className="bg-[url('/foto-mauro.png')] bg-cover bg-center sm:bg-top relative">
      <div className="pb-32 md:pb-40 pt-32 md:pt-48 xl:pt-64 2xl:pt-96 pl-6 2xl:pl-24 flex items-center bg-black bg-opacity-50">
        <img
          src="/logo.png"
          type="image/png"
          alt="Logo"
          className="hidden lg:block h-40 2xl:h-56 mr-8"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-white my-4">
            Financiera-Mente
          </h1>
          <h2 className="text-xl md:text-2xl 2xl:text-3xl text-white mb-6">
            Finanzas | Inversiones | Trading | Criptomonedas
          </h2>
          <button className=" animate-pulse mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg flex items-center absolute bottom-6">
            <svg
              className="h-6 w-6 mr-2 "
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a2.947 2.947 0 0 0-2.077-2.081C19.215 3.515 12 3.515 12 3.515s-7.215 0-9.421.59a2.947 2.947 0 0 0-2.077 2.08C.002 8.4 0 12 0 12s.002 3.601.502 5.814a2.947 2.947 0 0 0 2.077 2.081C4.785 20.485 12 20.485 12 20.485s7.215 0 9.421-.59a2.947 2.947 0 0 0 2.077-2.08C23.998 15.601 24 12 24 12s-.002-3.6-.502-5.814zM9.75 15.002V8.998l6.5 3.001-6.5 3.003z" />
            </svg>
            Ver en YouTube
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
