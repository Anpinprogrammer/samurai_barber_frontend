import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
   <>
   <div className='relative w-full h-screen'>

      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/img/nosotros.jpeg')" }}
      ></div>
      <div 
        className=' relative z-10 flex justify-center items-center md:pt-20'
      >
        

        <div className='w-auto mt-20 md:mt-5 shadow-lg px-10 xs:py-5 md:py-10 bg-white/60 font-mont rounded-xl'>

            <form>
                <div className="my-5">
                    <label 
                        htmlFor=""
                        className="uppercase text-black block text-xl font-bold"
                    >
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder="Email de Registro"
                        className="w-full p-3 mt-3 bg-white "
                    />
                </div>

                <div className="my-5">
                    <label 
                        htmlFor=""
                        className="uppercase text-black block text-xl font-bold"
                    >
                        Password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Tu Password"
                        className="w-full p-3 mt-3 bg-white"
                    />
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesion"
                    className="bg-black w-full py-3 px-10 text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto " 
                    />
            </form>

            <nav className='xs:mt-6 md:mt-10'>
                <Link 
                    className='block text-center my-5 text-black font-bold'
                    to="#">¿No tienes una cuenta? Registrate</Link>
                <Link 
                    className='block text-center my-5 text-black font-bold'
                    to="#">Olvide mi Password</Link>
            </nav>
        </div>
      </div>
   </div>
    
        
   </>
    
  )
}

export default Login