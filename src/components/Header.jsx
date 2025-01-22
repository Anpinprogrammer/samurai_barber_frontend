import { Link } from "react-scroll"
import MenuHamburguesa from "./MenuHamburguesa"

const Header = () => {
  return (
    <header id='home' className="h-auto">
            <div className="container mx-auto flex flex-row justify-between items-center">

                <div>
                    <img 
                        src="img/sinfondosamurai.png" alt="Logo" 
                        className="sm:pt-6 md:pt-0 lg:pb-2 md:mt-2 sm:w-40 sm:object-contain md:w-60 lg:w-80 sm:h-[120px] md:h-auto "
                    />
                </div>

                <div className="xs:mr-[20px] md:mr-0">
                    <MenuHamburguesa />
                    <div className="mx-5 font-mont sm:hidden md:block lg:mt-5">
                        <nav className="flex items-center flex-row gap-4 mt-5 lg:mt-0">
                            <Link to="home" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Home</Link>
                            <Link to="servicios" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Servicios</Link>
                            <Link to="nosotros" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Nosotros</Link>
                            <Link to="contacto" smooth={true} duration={500} className="text-white md:text-xl lg:text-2xl cursor-pointer">Contacto</Link>

                            <div className="flex flex-col">
                                <button
                                    type="button"
                                    className="text-white text-md uppercase"
                                >
                                    Iniciar Sesion
                                </button>
                                <button
                                    type="button"
                                    className="text-white text-md uppercase"
                                >
                                    Registrarme
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                
            </div>
                
            
    </header>
  )
}

export default Header