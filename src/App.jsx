import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import LandingPage from './paginas/LandingPage';

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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
