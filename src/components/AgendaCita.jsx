import React from 'react'

const AgendaCita = () => {
  return (
    <div 
        className="relative w-full sm:h-[400px] md:h-[550px] lg:h-screen bg-contain bg-no-repeat bg-center lg:bg-cover "
        style={{ backgroundImage: "url('../../public/img/cabello.jpeg')", opacity:0.7}}
    >
        
            <div class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 justify-center text-white p-2 rounded mr-10">
                <div className="flex flex-col items-center">
                    <h1 className="items-center uppercase font-odibee sm:text-5xl md:text-6xl lg:text-9xl text-white bg-transparent border border-white sm:border-4 md:border-8 hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full  cursor-pointer shadow text-shadow-lg">
                        agenda tu cita
                    </h1>
                

                    <h3 className="text-white sm:text-5xl sm:text-center lg:text-7xl mt-5 font-cursive font-bold text-shadow-lg">Más que un corte, una experiencia</h3>
                </div>
            </div>
        
        
                    
    </div>
  )
}

export default AgendaCita