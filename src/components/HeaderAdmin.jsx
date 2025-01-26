import React from 'react'
import { Link } from 'react-router-dom'
import MenuHamburguesaAdmin from './MenuHamburguesaAdmin'

const HeaderAdmin = () => {
  return (
    <header id='home' className="h-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">

            <div>
                <img 
                    src="img/sinfondosamurai.png" alt="Logo" 
                    className="sm:pt-6 md:pt-0 lg:pb-2 md:mt-2 sm:w-40 sm:object-contain md:w-60 lg:w-80 sm:h-[120px] md:h-auto "
                />
            </div>

            <div className="xs:mr-[20px] xs:mt-[20px] md:mr-0 md:mt-0">
                <MenuHamburguesaAdmin />
                <div className="mx-5 font-mont sm:hidden md:block lg:mt-5">
                    <nav className="flex items-center flex-row gap-4 mt-5 lg:mt-0">
                        <Link to="home" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Soy Admin</Link>
                        <Link to="servicios" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Soy Barbero</Link>
                    </nav>
                </div>
            </div>
        
        </div>
        
    
    </header>
  )
}

export default HeaderAdmin