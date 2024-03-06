import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from './Register.jsx'
// import Login from './Login.jsx'

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openPopUp = () => {
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      <PopUp isOpen={isOpen} onClose={closePopUp}>
        <h2>Welcome to our store</h2>
      </PopUp>
    </div>
  );
};

export default Home;

