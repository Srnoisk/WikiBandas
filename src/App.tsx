import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Bandas from './pages/bandas';
import Contato from './componentes/contato/contato';

import Queen from './banco/bandas/queen';

function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bandas" element={<Bandas />} />
        <Route path="/contato" element={<Contato />} />

        {/* rotas das bandas */}

        <Route path="/queen" element={<Queen />} />
      </Routes>
    </div>
  );
}

export default App;
