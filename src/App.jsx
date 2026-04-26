import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Navbar from "./components/Navbar";
import SingleProduct from './components/SingleProduct';
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/auth" element= { <Auth /> } />
        <Route path="/checkout" element= { <Checkout /> } />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path='*' element={<h1>404 Page not found.</h1>} />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </>
  )
}

export default App;
