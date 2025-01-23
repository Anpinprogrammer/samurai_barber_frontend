import React from 'react'
import { FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa';/**Iconos de redes sociales*/
import { HiLocationMarker } from 'react-icons/hi';/** */
import { Link } from 'react-scroll';

import useAuth from '../hooks/useAuth';

const Footer = () => {

    const { agendarCita } = useAuth();

  return (
    <div className='rounded-t-3xl container'>
        <div>
            <div className='grid md:grid-cols-3 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white'>
                {/**Enlaces del Footer */}
                <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left mb-5'>
                            Enlaces Importantes
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className='hover:text-white/50 duration-200'>
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <Link 
                                    to="formulario-cita" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        agendarCita();
                                    }}
                                    className='hover:text-white/50 duration-200 cursor-pointer'
                                >
                                    Agendar Cita
                                </Link>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Registrarme
                                </a>
                            </li>
                        </ul>
                    </div>
                
                
                {/**<div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'> */}
                
                
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left mb-5'>
                            Barberos
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 1: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 2: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 3: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 4: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 5: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 6: (314) - 609 - 8819
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Barbero 7: (314) - 609 - 8819
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/**Informacion de la marca */}
                    <div className='py-4 px-4 space-y-4'>
                        <div className='text-2xl flex items-center gap-2 font-bold uppercase lg:text-center'>
                            <img src="img/samuraisolo.png" alt="Logo" className="w-24 h-24 object-contain rounded-lg opacity-80"/>
                            <img src="img/sinfondosamurai.png" alt="Logo" className="w-[50%] h-28 object-contain rounded-lg opacity-80"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolorum nisi. Sunt modi voluptas, quae unde rerum at veritatis laudantium pariatur minima voluptates aut maiores exercitationem quasi fugit voluptate a.</p>
                        <div  className='flex items-center gap-2 font-bold uppercase'>
                        <a href="#" className='hover:text-white/50 duration-200'>
                            <HiLocationMarker className='text-3xl'/>
                        </a>
                        <a href="#" className='hover:text-white/50 duration-200'>
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#" className='hover:text-white/50 duration-200'>
                            <FaTiktok className='text-3xl'/>
                        </a>
                        <a href="#" className='hover:text-white/50 duration-200'>
                            <FaWhatsapp className='text-3xl'/>
                        </a>
                    </div>
                </div>

                    {/**<div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                            Enlaces Importantes
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Agendar Cita
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white/50 duration-200'>
                                    Registrarme
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    
            </div>
            {/**Seccion del Copyright */}
            <div className='mt-8'>
                    <div className='text-center py-6 border-t-2 border-gray-800/10 '>
                        <span className='text-sm text-white/50'>
                            {" "}
                            &#169; Copyright 2025 Samurai Barber
                        </span>
                    </div>

               
            </div>
        </div>
    </div>
  )
}

export default Footer