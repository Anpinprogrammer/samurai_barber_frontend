import React from 'react'
import Slider from 'react-slick';

const FotosServicios = [
    {
        id: 1,
        servicio: "Corte Estilo Americano",
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
        servicio: "Cejas",
        precio: "$10.000",
        url: "/img/cejas.jpeg",
    },
];

const ImagenServiciosSlider = () => {
    const configuracion2 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
        ],  
      };
  return (
    
            <div>
                <>
                    <Slider {...configuracion2} >
                        {
                            FotosServicios.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className='flex flex-col items-center p-6'
                                    >
                                        <div className='card  bg-white md:w-full lg:w-full relative rounded-xl overflow-hidden'>
                                        <div className="card__info-hover p-4 w-full opacity-0 top-0">
                                            <h1 className='text-black text-4xl font-odibee'>
                                                {item.precio}
                                            </h1>
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
                                 
                                        
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </>
            </div>
  )
}

export default ImagenServiciosSlider