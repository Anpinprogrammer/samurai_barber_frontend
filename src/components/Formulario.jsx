import React from 'react'

const Formulario = () => {
  return (
    <div>
        <form
            className="bg-transparent pb-10 px-5 lg:mb-5 shadow-md"
        >

            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-white uppercase font-bold"
                >Nombre</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Tu Nombre"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-transparent"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-white uppercase font-bold"
                >Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Tu Email"
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
                    htmlFor="mensaje"
                    className="text-white uppercase font-bold"
                >Mensaje</label>
                <textarea 
                    id="sintomas"
                    placeholder="Cuentanos con que te ayudamos"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-transparent"
                />
            </div>

            <input 
                type="submit"
                className="bg-white w-full p-3 text-black uppercase font-bold hover:bg-white/80 cursor-pointer transition-colors"
                value={'Enviar'}
            />
        </form>
    </div>
  )
}

export default Formulario