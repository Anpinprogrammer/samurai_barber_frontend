import React from 'react'
import { useState } from 'react'
import { Link } from "react-scroll"

const MenuHamburguesa = () => {

    const [abierto, setAbierto] = useState(false);

    const toggleMenu = () => {
        setAbierto(!abierto);
    }

  return (
    <div className='relative md:hidden'>
        <button
            onClick={toggleMenu}
          className={`flex flex-col h-6 w-8 justify-between items-center ${ abierto ? 'hidden' : 'visible' }`}
        >
          <span className="block w-full h-1 bg-white/60 rounded-sm"></span>
          <span className="block w-full h-1 bg-white/60 rounded-sm"></span>
          <span className="block w-full h-1 bg-white/60 rounded-sm"></span>
        </button>
        <div className={`fixed top-0 right-0 h-full w-64 bg-white/80 shadow-lg transform ${ abierto ? 'translate-x-0' : 'translate-x-full' } transition-transform duration-300 ease-in-out lg:hidden z-50`}>
            <div className='flex justify-end p-4'>
                <svg className='h-12 w-12 cursor-pointer' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <nav className="flex justify-start flex-col gap-4 ml-5 font-mont font-bold">
                <Link to="home" smooth={true} duration={500} className="text-black hover:text-gray-400 text-lg cursor-pointer transition">Home</Link>
                <Link to="servicios" smooth={true} duration={500} className="text-black hover:text-gray-400 text-lg cursor-pointer transition">Servicios</Link>
                <Link to="nosotros" smooth={true} duration={500} className="text-black hover:text-gray-400 text-lg cursor-pointer transition">Nosotros</Link>
                <Link to="contacto" smooth={true} duration={500} className="text-black hover:text-gray-400 text-lg cursor-pointer transition">Contacto</Link>
            
                <div className="flex flex-col">
                    <button
                        type="button"
                        className="text-black text-sm uppercase"
                    >
                        Iniciar Sesion
                    </button>
                    <button
                        type="button"
                        className="text-black text-sm uppercase"
                    >
                        Registrarme
                    </button>
                </div>
            </nav>
        </div>
        {abierto && (
            <div className='fixed inset-0 bg-black opacity-50 lg:hidden z-40' onClick={toggleMenu}></div>
        )}
    </div>
  )
}

export default MenuHamburguesa