import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreenPage from './components/GreenPage';
import YellowPage from './components/YellowPage';


export const ColorContext = createContext('dark');

const App = () => {

  return (
    <ColorContext.Provider value={'light'}>
      <BrowserRouter>
        <Routes>
          <Route path='/yellowpage' element={<YellowPage />} />
          <Route path='/greenpage' element={<GreenPage />} />
        </Routes>
      </BrowserRouter>
    </ColorContext.Provider>

    
  );
}

export default App;
