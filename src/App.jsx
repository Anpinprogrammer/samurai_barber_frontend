import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import LandingPage from './paginas/LandingPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/**Rutas Publicas */}
        <Route path='/' element={<AuthLayout />} >
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
