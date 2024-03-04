import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from './Register.jsx'
// import Login from './Login.jsx'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      <Slider />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
