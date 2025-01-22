import React from 'react'
import Carrusel from './Carrusel'

const Nosotros = () => {
  return (
    <>
    <div className='container mx-auto p-4'>
      <div className='grid md:grid-cols-2 gap-6 text-white pb-4'>
        <div>
          <h3 className='font-odibee text-4xl mb-2'>NOSOTROS</h3>
          <h1 className='font-odibee text-5xl uppercase font-bold'>bienvenido a samurai barber</h1>
          <p className='font-open'>
            Con mas de diez años de experiencia, nuestro placer es atenderte y cuidar tu imagen, nuestro personal altamente calificado se asegurara de que luzcas tal cual lo deseas, recuerda que la presencia de un hombre esta en su corte de cabello.
          </p>

          <p className='font-open'>
            Con mas de diez años de experiencia, nuestro placer es atenderte y cuidar tu imagen, nuestro personal altamente calificado se asegurara de que luzcas tal cual lo deseas, recuerda que la presencia de un hombre esta en su corte de cabello.

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sit voluptas omnis. Ea ducimus eos impedit rem facere saepe illum praesentium et facilis nisi laboriosam expedita culpa, consequatur, officiis autem.

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className='text-black p-4 text-center'>
            <button className='uppercase bg-white space-between uppercase font-open text-2xl font-bold hover:bg-white/70 cursor-pointer transition-colors py-2 px-4 rounded-full shadow cursor-pointer'>
            agendar cita
            </button>
          </div>
        </div>
        <div className='sm:hidden md:block'>
          <img src="img/nosotros.jpeg" alt="Barbero" className="w-full h-full object-cover"/>{/**rounded-lg h-80*/}
        </div>
      </div>

      <Carrusel />
      

    </div>
    </>
    
  )
}

export default Nosotros