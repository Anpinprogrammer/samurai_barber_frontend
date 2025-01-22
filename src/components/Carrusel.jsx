import React from 'react'

const CarruselFotos = [
    {
        id: 1,
        url: "/img/cabello2.jpeg",
    },
    {
        id: 2,
        url: "/img/barba.jpeg",
    },
    {
        id: 3,
        url: "/img/cejas.jpeg",
    },
    {
        id: 4,
        url: "/img/1.jpg",
    },
    {
        id: 5,
        url: "/img/cabello.jpeg",
    },
    
];

const Carrusel = () => {

    const carrusel = [...CarruselFotos, ...CarruselFotos];

    

  return (
    <div className="container my-5">
        <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap animate-scroll">
                {carrusel.map((imagen, index) => {
                    return (
                        <div
                        key={index}
                        className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'
                        >
                            <div className="rounded-3xl overflow-hidden mb-4 h-[350px]">
                                <img src={imagen.url} alt="Foto" />
                            </div>
                        </div>
                    )
                    
                })

                }
            </div>
        </div>
    </div>

  )
}

export default Carrusel