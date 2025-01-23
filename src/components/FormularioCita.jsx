import React from 'react'
import { useState } from 'react';

const FormularioCita = () => {

    const [visible, setVisible] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        const prueba = 'una prueba';
        window.open(`https://wa.me/3146098819?text=${prueba}%20Hola,%20quiero%20agendar%20una%20cita%20para%20cortarme%20el%20cabello.`, '_blank');
        setVisible(false);
    }
  return (
    <div className={` ${ visible ? 'block' : 'hidden' } `}>
        <h1 className='md:pt-8 sm:pb-6 md:pb-0 uppercase text-white text-5xl text-center font-odibee'>Completa tu Reserva</h1>
        <form
            className="bg-transparent pb-10 px-5 lg:mb-5 shadow-md font-mont"
            onSubmit={handleSubmit}
        >

            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-white uppercase font-bold"
                >Nombre</label>
                <input 
                    id="nombre-cliente"
                    type="text"
                    placeholder="Tu Nombre"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-transparent"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="telefono"
                    className="text-white uppercase font-bold"
                >Telefono</label>
                <input 
                    id="telefono"
                    type="tel"
                    placeholder="Tu Telefono"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-transparent"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className="text-white uppercase font-bold"
                >Fecha del Corte</label>
                <input 
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2"
                />
            </div>

            <div className="relative mb-5">
                <label 
                    htmlFor="select-barbero" 
                    className="block text-white uppercase font-bold">Barberos</label>
                <select id="select-barbero" name="select-barbero" className="border-2 w-full p-2 mt-2 bg-transparent block appearance-none py-2 px-3 pr-10 text-gray-400">
                    <option value="" disabled selected>Elige Tu Barbero</option>
                    <option value="1">Barbero 1</option>
                    <option value="2">Barbero 2</option>
                    <option value="3">Barbero 3</option>
                </select>
                <div className="pointer-events-none absolute top-[30px] bottom-0 right-0 flex items-center pr-3">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="relative mb-5">
                <label 
                    htmlFor="select-servicio" 
                    className="block text-white uppercase font-bold">Servicio</label>
                <select id="select-servicio" name="select-servicio" className="border-2 w-full p-2 mt-2 bg-transparent block appearance-none py-2 px-3 pr-10 text-gray-400">
                    <option value="" disabled selected>Elige Tu Servicio</option>
                    <option value="1">Servicio 1</option>
                    <option value="2">Servicio 2</option>
                    <option value="3">Servicio 3</option>
                </select>
                <div className="pointer-events-none absolute top-[30px] bottom-0 right-0 flex items-center pr-3">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


            <div className='text-center'>
                <input 
                    type="submit"
                    className="bg-white w-auto p-3 text-black uppercase font-bold hover:bg-white/80 cursor-pointer transition-colors rounded-full"
                    value={'Confirmar Reserva'}
                />
            </div>
            
        </form>
    </div>
  )
}

export default FormularioCita