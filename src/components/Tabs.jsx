import React from 'react'
import { useState } from 'react'
import { Link } from "react-scroll"
import ImagenServicios from './ImagenServicios'
import ImagenServiciosSlider from './ImagenServiciosSlider'

import useAuth from '../hooks/useAuth'

const Servicios = [
    {
        id: 1,
        servicio: "Corte de Cabello Estilo Americano",
        precio: "$20.000",
    },
    {
        id: 2,
        servicio: "Perfilamiento de Barba",
        precio: "$15.000",
    },
    {
        id: 3,
        servicio: "Cejas",
        precio: "$10.000",
    },
]

const Tabs = () => {

    const { agendarCita } = useAuth();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='container'>
        <div id='tabs' className='flex text-white text-2xl font-odibee gap-4 border-b-2 border-white/30'>
            <div 
                className={`cursor-pointer ${toggleState === 1 ? 'border-b-4 border-white text-center bg-white/30' : null} transition-opacity duration-500 w-40`}
                onClick={() => toggleTab(1)}    
            >
                <h1>
                    Nuestros Servicios
                </h1>
            </div>
            <div 
                className={`cursor-pointer ${toggleState === 2 ? 'border-b-4 border-white text-center bg-white/30' : null} w-40`}
                onClick={() => toggleTab(2)}
            >
                <h1>
                    Nuestro Catalogo
                </h1>
            </div>
            
        </div>
        <div 
            id='contenido-tabs'
            className='relative sm:h-[650px] md:h-auto'
        >
            <div 
            id='nuestros-servicios' 
            className={`${ toggleState === 1 ? 'block' : 'hidden' } absolute inset-0 transition-all duration-500 opacity-100`}
            >
                <h1 className='text-5xl mt-5 pb-4 text-white font-odibee uppercase'>¿Que Hacemos?</h1>
                <div className='mx-auto p-4 flex flex-col sm:hidden md:block'>
                    <ImagenServicios />
                </div>

                <div className='mx-auto p-4 flex flex-col md:hidden'>
                    <ImagenServiciosSlider />
                </div>

                <div className='text-center p-4'>
                    <Link 
                        to='formulario-cita'  
                        onClick={(e) => {
                            e.preventDefault();
                            agendarCita();
                        }}
                        smooth={true} duration={500}
                        className='uppercase bg-white space-between uppercase font-open sm:text-lg md:text-2xl font-bold hover:bg-white/70 cursor-pointer transition-colors py-2 px-4 rounded-full shadow cursor-pointer'   
                    >
                        agendar cita
                    </Link>
                </div>
            </div>

            <div 
                id='nuestro-catalogo' 
                className={`${ toggleState === 2 ? 'block' : 'hidden' } absolute`}
            >
                <h1 className='text-5xl mt-5 pb-4 text-white font-odibee uppercase'>Catalogo</h1>
                <div className='text-center p-4'>
                    <Link 
                        to='formulario-cita'  
                        onClick={(e) => {
                            e.preventDefault();
                            agendarCita();
                        }}
                        smooth={true} duration={500}
                        className='uppercase bg-white space-between uppercase font-open sm:text-lg md:text-2xl font-bold hover:bg-white/70 cursor-pointer transition-colors py-2 px-4 rounded-full shadow cursor-pointer'   
                    >
                        agendar cita
                    </Link>
                </div>
            </div>

            
        </div>

        
        
        
    </div>
  )
}

export default Tabs