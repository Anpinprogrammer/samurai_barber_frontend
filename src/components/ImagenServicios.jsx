import React from 'react'

const FotosServicios = [
    {
        id: 1,
        servicio: "Corte de Cabello Estilo Americano",
        precio: "$20.000",
        url: "/img/cabello2.jpeg",
    },
    {
        id: 2,
        servicio: "Perfilamiento de Barba",
        precio: "$15.000",
        url: "/img/barba.jpeg",
    },
    {
        id: 3,
        servicio: "Deliniamiento de Cejas",
        precio: "$10.000",
        url: "/img/cejas.jpeg",
    },
];

const ImagenServicios = () => {
    
  return (
        
        <div className="w-full flex sm:gap-8 md:gap-6 lg:gap-8 sm:flex-col md:flex-row justify-center max-w-full">
            {
                FotosServicios.map((item) => {
                    return (
                        <div
                                key={item.id}
                                className='card  bg-white md:w-[29%] lg:w-[33.3%] relative rounded-xl overflow-hidden'
                            >
                                 
                                <div className="card__info-hover p-4 w-full opacity-0 top-0">
                                    <h1 className='text-black text-4xl font-odibee'>
                                        {item.precio}
                                    </h1>
                                    <div className='mt-[120px] text-center'>
                                                <button    className=' bg-black space-between font-open text-white text-2xl font-bold  cursor-pointer transition-colors py-2 px-4 rounded-full shadow cursor-pointer'>
                                                    ¡ Lo Quiero !
                                                </button>
                                    </div>
                                </div>
                                <div 
                                    className='h-[320px] object-cover invisible bg-cover bg-center bg-no-repeat w-full h-[235px] rounded-t-xl'
                                    style={{ backgroundImage: `url(${item.url})`}}
                                ></div>
                                <a href="#" className="card_link">
                                    <div 
                                        className="card__img--hover bg-cover h-[320px] hover:h-full hover:opacity-30 object-cover bg-center bg-no-repeat w-full rounded-t-xl top-0"
                                        style={{ backgroundImage: `url(${item.url})`}}
                                    ></div>
                                </a>
                                <div className="card__info z-2 bg-white rounded-t-xl hover:relative">
                                    <h3 className="card__title mt-[5px] mb-[10px] font-open text-xl font-bold text-center">{item.servicio}</h3>
                                </div>
                            </div>
                    )
                })
                
            }
            
        
      
       
    </div>
   
    
  )
}

export default ImagenServicios