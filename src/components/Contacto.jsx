import React from 'react'
import Formulario from './Formulario'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';/**Iconos de redes sociales*/

const Contacto = () => {
  return (
    <div className='container mx-auto p-4'>
        
        <div className='grid sm:grid-rows-2 md:grid-cols-2 gap-6 text-white'>
            <div className='border-t-2 border-white/50'>
                <img src="img/samuraisolo.png" alt="Logo" className="w-full h-full sm:object-contain md:object-nonelg:object-cover rounded-lg sm:p-0 lg:p-8 opacity-80"/>
            </div>
            <div className='border-b-2 border-white/50'>
              <h1 className='md:pt-8 sm:pb-6 md:pb-0 uppercase text-white text-5xl text-center font-odibee'>Contactanos</h1>
              <Formulario />
            </div>
        </div>
    </div>
  )
}

export default Contacto