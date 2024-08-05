import { useState } from 'react';

const Navbar = () => {

  const menu = [
    ["Cursos", "#cursos"],
    ["quién soy?", "#AbautMeSection"],
    ["Servicios", "#ServiceSection"],
    ["Contacto", "#footer"]
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`

  return (
    <div className="fixed w-full bg-gradient-to-r from-slate-900 via-slate-900 to-slate-700 flex px-6 z-20">
      <div className="hidden md:flex md:justify-end w-full"> {/* Ocultar en dispositivos más pequeños */}
        {menu.map(m => 
          (<a key={m[0]} href={m[1]} className="text-gray-50 mx-3 my-3 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out font-semibold">
            {m[0]}
          </a>)
        )}
      </div>
      <div className="md:hidden flex"> {/* Mostrar en dispositivos más pequeños */}
        <button onClick={toggleMenu} className="flex flex-col h-12 w-12 rounded justify-center items-center group">
        <div
        className={`${genericHamburgerLine} ${
          isMenuOpen
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
       />
       <div
        className={`${genericHamburgerLine} ${
          isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen
            ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 top-11 bg-gray-900 bg-opacity-25 backdrop-blur-sm">
            {menu.map(m => (
              <a key={m[0]} href={m[1]} className="block px-4 py-2 text-gray-50 hover:bg-gray-800 hover:bg-opacity-25">{m[0]}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar

