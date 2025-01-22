import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <>
        <body className='bg-black'>
            <Header />
                <main>
                    <Outlet />
                </main>

                <BtnWhatsapp />
            <Footer /> 
        </body>
            
        
    </>
  )
}

export default AuthLayout