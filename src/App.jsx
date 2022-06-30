import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InicioSesion from './layout/InicioSesion'
import Principal from './layout/Principal'
import Codigo from './pages/Codigo'
import OpcionesPago from './pages/OpcionesPago'
import Recargar from './pages/Recargar'
import Tramites from './pages/Tramites'
import Saldo from './pages/Saldo'
import ResumenCompra from './pages/ResumenCompra'

import Resume from './pages/Resume'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<InicioSesion/>}>
        </Route>

        <Route path='/user' element={<Principal/>}>
            <Route index element={<Resume/>} />
            <Route path='codigo' element={<Codigo/>} />
            <Route path='opcionesPago' element={<OpcionesPago/>} />
            <Route path='recargar' element={<Recargar/>} />
            <Route path='tramites' element={<Tramites/>} />
            <Route path='saldo' element={<Saldo/>} />
            <Route path='resumen' element={<ResumenCompra/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
