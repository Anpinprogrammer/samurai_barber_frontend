import { createContext, useState } from "react"
import { scroller } from "react-scroll";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [reserva, setReserva] = useState(false);

    const agendarCita = () => {
            
        setReserva(true);
    
        setTimeout(() => {
            scroller.scrollTo('formulario-cita', {
                smooth: true,
                duration: 500,
                offset: -50,
            });
        }, 100);
    }

  return (
    <AuthContext.Provider
        value={{
            agendarCita,
            reserva
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export {
    AuthProvider
}

export default AuthContext