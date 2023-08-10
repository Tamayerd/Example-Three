import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Anasayfa from './Pages/Anasayfa';
import Navbar from './Components/Navbar';
import Urunler from './Pages/Urunler';
import UrunDetay from './Pages/UrunDetay';
import ErrorPage from './Pages/ErrorPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Anasayfa />} />
        <Route path='/api-urunler' element={<Urunler></Urunler>} />
        <Route path='/api-urunler/:id' element={<UrunDetay></UrunDetay>} />
        <Route path='/404' element={<ErrorPage></ErrorPage>} />

        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;

