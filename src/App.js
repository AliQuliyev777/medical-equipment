import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout bileşeni her sayfa için ortak alan (Header, Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
