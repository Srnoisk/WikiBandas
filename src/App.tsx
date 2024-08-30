import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Bandas from './pages/bandas';
import Contato from './componentes/contato/contato';

import Queen from './banco/bandas/queen';
import Offspring from './banco/bandas/offspring';
import AliceInChains from './banco/bandas/aliceinchains';
import TheBeatles from './banco/bandas/beatles';
import AcDc from './banco/bandas/acdc';
import Bathory from './banco/bandas/bathory';
import BillieEilish from './banco/bandas/billieEilish';
import Coldplay from './banco/bandas/coldplay';
import ExaltaSamba from './banco/bandas/exaltasamba';
import Nirvana from './banco/bandas/nirvana';
import FooFighters from './banco/bandas/foofighters';
import HenriqueEjuliano from './banco/bandas/henriqueJuliano';
import Ledzeppelin from './banco/bandas/ledzeppelin';
import Marshmello from './banco/bandas/marshmello';
import Matue from './banco/bandas/matue';
import MCLan from './banco/bandas/mclan';
import MichaelJackson from './banco/bandas/michaeljackson';

function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bandas" element={<Bandas />} />
        <Route path="/contato" element={<Contato />} />

        {/* rotas das bandas */}

        <Route path="/queen" element={<Queen />} />
        <Route path="/offspring" element={<Offspring />} />
        <Route path="/aliceinchains" element={<AliceInChains />} />
        <Route path="/thebeatles" element={<TheBeatles />} />
        <Route path="/acdc" element={<AcDc />} />
        <Route path="/bathory" element={<Bathory />} />
        <Route path="/billieeilish" element={<BillieEilish />} />
        <Route path="/coldplay" element={<Coldplay />} />
        <Route path="/exaltasamba" element={<ExaltaSamba />} />
        <Route path="/foofighters" element={<FooFighters />} />
        <Route path="/henriquejuliano" element={<HenriqueEjuliano />} />
        <Route path="/ledzeppelin" element={<Ledzeppelin />} />
        <Route path="/marshmello" element={<Marshmello />} />
        <Route path="/matue" element={<Matue />} />
        <Route path="/mclan" element={<MCLan />} />
        <Route path="/michaeljackson" element={<MichaelJackson />} />
        <Route path="/nirvana" element={<Nirvana />} />
        
      </Routes>
    </div>
  );
}

export default App;
