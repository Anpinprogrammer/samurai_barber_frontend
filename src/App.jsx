import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import AdminLayout from './layout/AdminLayout';
import LandingPage from './paginas/LandingPage';
import Login from './paginas/Login';

import { AuthProvider } from './context/AuthProvider';

function App() {
  

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/**Rutas Publicas */}
          <Route path='/' element={<AuthLayout />} >
            <Route index element={<LandingPage />} />
          </Route>
          {/**Rutas del Admin */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
