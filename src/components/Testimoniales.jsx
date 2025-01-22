import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slick-custom.css';

const TestimonialData = [
  {
    id: 1,
    nombre: "Yael Amari",
    fecha: "05/01/2025",
    review: "A very good website for developing small companies. Very light and easy to understand explanation. Recommended for small business!",
    delay: 0.2,
  },
  {
    id: 2,
    nombre: "Yael Amari",
    fecha: "05/01/2025",
    review: "A very good website for developing small companies. Very light and easy to understand explanation. Recommended for small business!",
    delay: 0.5,
  },
  {
    id: 3,
    nombre: "Yael Amari",
    fecha: "05/01/2025",
    review: "A very good website for developing small companies. Very light and easy to understand explanation. Recommended for small business!",
    delay: 0.8,
  },
  {
    id: 4,
    nombre: "Yael Amari",
    fecha: "05/01/2025",
    review: "A very good website for developing small companies. Very light and easy to understand explanation. Recommended for small business!",
    delay: 1.1,
  },
];

const Testimoniales = () => {
  const configuracion = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
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
    <>
      <div className='pb-24 mb-10'>
          <div className="container">
            {/**Header Section */}
            <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mx-auto mb-6'>
              <h1 className='text-center uppercase text-white font-odibee text-5xl'>Reseñas</h1>
              <p className='text-white text-3xl font-odibee'>Lo Que Dicen Nuestros Clientes de Nosotros</p>

            </div>
            {/**Testimonial Cards Section */}
            <div>
              <>
              <Slider {...configuracion}>
                {
                  TestimonialData.map((item) => {
                    
                    return (
                      <div
                        key={item.id}
                        className='flex flex-col items-center p-6'
                      >
                        <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-gray-900'>
                          {/**Seccion Superior */}
                          <div>
                            <p className='text-xl font-bold text-white/80'>{item.nombre}</p>
                            <p className='text-white/80'>{item.fecha}</p>
                          </div>
                          {/**Seccion Inferior */}
                          <div className='py-4 space-y-4'>
                            <p className='text-sm text-gray-500'>{item.review}</p>
                            <div class="flex gap-2 text-yellow-500">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>  
              </>  
            </div>
          </div>
      </div>
      
    </>
   
     
  )
}

export default Testimoniales