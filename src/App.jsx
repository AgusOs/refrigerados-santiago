import {Routes, Route} from 'react-router-dom';

import { OfertasPage } from './components/pages/OfertasPage';
import { ComoComprarPage } from './components/pages/ComoComprarPage';
import { EmpresaPage } from './components/pages/EmpresaPage';
import { SucursalesPage } from './components/pages/SucursalesPage';

function App () {
    return ( 
        <div>
            <Routes>
                <Route path='/' element={
                    <OfertasPage/>
                }></Route>
                <Route path='/como-comprar' element={
                    <ComoComprarPage/>
                }></Route>
                <Route path='/empresa' element={
                    <EmpresaPage/>
                }></Route>
                <Route path='/sucursales' element={
                    <SucursalesPage/>
                }></Route>
            </Routes>
        </div>

     );
}

export default App ;