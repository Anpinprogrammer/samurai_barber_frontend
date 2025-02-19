import React from 'react';
import AgendaCita from '../components/AgendaCita';
import Servicios from '../components/Servicios';
import FormularioCita from '../components/FormularioCita';
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Testimoniales from '../components/Testimoniales';

import useAuth from '../hooks/useAuth';

const LandingPage = () => {

  const { reserva } = useAuth()

  return (
    <>
      <div>
        <AgendaCita />
      </div>
      <div id='servicios' className='container sm:h-auto lg:h-screen xs:px-4 md:px-0 sm:py-12 md:pt-16 md:pb-16 lg:py-24'>
        <Servicios />
      </div>
      <div id='formulario-cita' className={` ${ reserva ? 'block' : 'hidden' } sm:h-auto md:h-screen sm:p-8 md:pt-0 lg:pt-8`}>
            <FormularioCita />
      </div>
      <div id='nosotros' className='sm:h-auto md:h-screen sm:pt-8 md:pt-0 lg:pt-8'>
        <Nosotros />
      </div>
      <div id='contacto' className='sm:h-auto md:h-screen md:pt-14'>
        <Contacto />
      </div>
      {/** className="h-64 w-full p-10 h-screen pt-14"
            style={{ background: "linear-gradient(90deg, #000000, #C89116)"}}*/}
      <div className='w-full h-auto' >
        <Testimoniales />
      </div>
    </>
    
  )
}

export default LandingPage