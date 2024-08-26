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
        
      </Routes>
    </div>
  );
}

export default App;
