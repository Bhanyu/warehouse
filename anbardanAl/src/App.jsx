import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import {Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products"
import Catalog from "./pages/Catalog/Catalog";
import Portfolio from "./pages/Portfolio/Portfolio";



  
  export default function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="products" element={<Products />} />
            <Route path="portfolio" element={<Portfolio />} />


          </Route>
        </Routes>
      </>
    );
  }



